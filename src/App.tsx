
import React from 'react';
import './App.css';
import Hello from './components/Hello';
import List from './pages/List';
import { RouteComponentProps, withRouter } from 'react-router';
import { numberActions } from './store/actions/number';
import { StateStore } from './models/index';
import { connect } from 'react-redux';
interface IProps{
  name: string;
  number?: number;
  onIncrement?: () => void;
  onDecrement?: () => void;
}
const Index: React.FC<IProps> = (props: IProps) =>{
  const {onIncrement,onDecrement,number,name} = props

  const clickHandler = (data:string)=>{
    console.log(data);
  }
  return (

    <div className="App">
      hello React Typescript
      <Hello title={name} age={ 20 } parentClick={clickHandler}/>
      <List />
      <div> hello, { number }</div>
      <button onClick={onDecrement}>-</button>
      <button onClick={onIncrement}>+</button>
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
export default connect(mapStateToProps, mapDispatchToProps)(Index);
