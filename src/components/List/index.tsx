import React, { useState } from 'react';
import { Button } from 'antd';
import Modal from '../Modal';
import './index.css';
import { accountActions } from '../../store/actions';
import { useDispatch } from 'react-redux';
interface IProps{
    data: any;
    all: any
   
  }
function List(props:IProps) {

    const [visible, setVisible] = useState(false);
    const [select, setSelect] = useState({});
    const dispatch = useDispatch();

    const { data, all } = props;

    function handleAccount(data:any) {
        setSelect(data);
        setVisible(true);
    }

    function handleCancel() {
        setVisible(false);
    }

    //修改
    function updateAccount(data:any) {
        dispatch(accountActions.updateAccount(data));
    }

    //删除
    function handleDel(item:any, index:number) {
        dispatch(accountActions.deleteAccount({money: item.type ? item.money : -item.money, index}));
    }

    return (
        <ul className="list">
            {
                data && data.length > 0 ? data.map((item:any, index:number) => {
                    return (
                        <li key={item.id}>
                            <span className="type">{item.name}</span>
                            <span className="money" style={{ color: item.type ? 'green' : 'red' }}>{`${item.type ? '+' : '-'}${item.money}`}</span>
                            <span className="date">{item.date.toLocaleDateString()}</span>
                            <div>
                                <Button type="link" style={{ marginRight: 10 }} onClick={() => handleAccount(item)}>修改</Button>
                                <Button type="ghost" onClick={() => handleDel(item, index)}>删除</Button>
                            </div>
                        </li>
                    )
                }) : '暂无数据'
            }

            <Modal isOpen={visible} onClose={handleCancel} data={select} type={1} updateAccount={updateAccount}/>

            <span className="all">总计： {all}</span>
        </ul>
    )
}

export default List;