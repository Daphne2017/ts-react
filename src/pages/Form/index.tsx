import React, { useState, useEffect } from 'react';
import { RouteComponentProps, withRouter } from 'react-router';
import { Button } from 'antd';
import Upload from '../../components/Upload';
import HocGoback from 'components/Hoc/Goback';
interface IProps {
	handleBack:() =>void,
  }
const Index = (props: RouteComponentProps & IProps) => {
	const [visible, setVisible] = useState(false);
	return (
		<div className="App">
			<Upload visible={visible} setVisible={setVisible}></Upload>
			<div><Button style={{ marginRight: 20 }} onClick={()=>setVisible(true)}>打开Modal</Button></div>
			<div><Button style={{ marginRight: 20 }} onClick={props.handleBack}>返回首页</Button></div>
		</div>
	);
}
export default withRouter(HocGoback(Index));
