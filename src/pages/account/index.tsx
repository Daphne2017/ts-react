import React, { useState, useEffect } from 'react';
import { Button, Spin } from 'antd';
import List from '../../components/List';
import Modal from '../../components/Modal';
import { StateStore } from '../../models/index';
import { accountActions } from '../../store/actions';
import { useSelector, useDispatch } from 'react-redux';
// useSelector、useDispatch的使用方式 https://blog.csdn.net/vitaviva/article/details/104508139
function App() {

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
        <Button type="primary" style={{ marginTop: 20 }} onClick={handleAccount}>开始记账</Button>
      </Spin>
      <Modal isOpen={visible} onClose={handleCancel} type={0} data={null} addAccount={handleAdd} />
    </div>
  );
}


export default App;
