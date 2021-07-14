
import React from 'react';
import './index.css';
import Hello from '../../components/Hello';
import List from '../../pages/List';
import { RouteComponentProps, withRouter } from 'react-router';
import { numberActions } from '../../store/actions/number';
import { StateStore } from '../../models/index';
import { connect } from 'react-redux';
import { Button } from 'antd';
interface IProps{
  name: string;
  number?: number;
  onIncrement?: () => void;
  onDecrement?: () => void;
}
const Index  = (props:  RouteComponentProps & IProps) =>{

  const {onIncrement,onDecrement,number,name} = props

  const clickHandler = (data:string)=>{
    console.log(data);
  }
  const handleBack = ()=>{
    props.history.replace("/")
  }
  return (
    <div className="App">
      hello React Typescript
      <Hello title={name} age={ 20 } parentClick={clickHandler}/>
      <List />
      <div> hello, { number }</div>
      <button onClick={onDecrement}>-</button>
      <button onClick={onIncrement}>+</button>
      <div><Button style={{ marginRight: 20 }} onClick={handleBack}>返回首页</Button></div>
    </div>
  );
}

function mapStateToProps({numberState}: StateStore) {
  
  return {
    number:numberState.number,
    name: numberState.languageName,
  }
}

function mapDispatchToProps(dispatch:any) {
  return {
    onIncrement: () => dispatch(numberActions.incrementNumber()),
    onDecrement: () => dispatch(numberActions.decrementNumber()),
  }
}
export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Index));
