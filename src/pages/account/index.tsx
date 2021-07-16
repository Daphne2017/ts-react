import React, { useState, useEffect } from 'react';
import { Button, Spin } from 'antd';
import List from '../../components/List';
import Modal from '../../components/Modal';
// import Goback from '../../components/Goback';
import { StateStore } from '../../models/index';
import { accountActions } from '../../store/actions';
import { withRouter, RouteComponentProps } from "react-router";
import { useSelector, useDispatch } from 'react-redux';
import ErrorBoundary from 'components/Hoc/ErrorBoundary';
import HocGoback from 'components/Hoc/Goback';  // 高阶组件使用
import WithAuth from 'components/Hoc/WithAuth';  // 高阶组件使用
// useSelector、useDispatch的使用方式 https://blog.csdn.net/vitaviva/article/details/104508139
// @ErrorBoundary() //修饰器在而是es6的class语法中生效
interface IProps {
  handleBack:() =>void,
}
function App(props: RouteComponentProps & IProps) {

  const [visible, setVisible] = useState(false);

  const data = useSelector((state:StateStore) => state.accountState);
  
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(accountActions.getAccount());
  }, [dispatch]);

  function handleAccount() {
    setVisible(true);
  }
  function handleCancel() {
    setVisible(false);
  }

  function handleAdd(data:any) {
    dispatch(accountActions.addAccount(data));
  }

  return (
    <div className="App">
      <h1>Dong日账目</h1>
      <Spin spinning={data.loading}>
        <List data={data.accounts} all={data.all} />
        <Button style={{ marginRight: 20 }} onClick={props.handleBack}>返回首页</Button>
        <Button type="primary" style={{ marginTop: 20 }} onClick={handleAccount}>开始记账</Button>
      </Spin>
      <Modal isOpen={visible} onClose={handleCancel} type={0} data={null} addAccount={handleAdd} />
    </div>
  );
}
export default withRouter(WithAuth("Admin")(ErrorBoundary()(HocGoback(App))));



// @ErrorBoundary()
// class TagReport extends React.PureComponent<RouteComponentProps> {
//   public render() {
//     return this.props.children;
//   }
// }

// export default withRouter(TagReport);
