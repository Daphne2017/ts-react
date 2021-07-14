import React, { useState, useEffect } from 'react';
import { RouteComponentProps, withRouter } from 'react-router';
import { Button } from 'antd';
import Upload from '../../components/Upload';
const Index = (props: RouteComponentProps) => {
	const [visible, setVisible] = useState(false);
	const handleBack = () => {
		props.history.replace("/")
	}
	return (
		<div className="App">
			<Upload visible={visible} setVisible={setVisible}></Upload>
			<div><Button style={{ marginRight: 20 }} onClick={()=>setVisible(true)}>打开Modal</Button></div>
			<div><Button style={{ marginRight: 20 }} onClick={handleBack}>返回首页</Button></div>
		</div>
	);
}
export default withRouter(Index);
