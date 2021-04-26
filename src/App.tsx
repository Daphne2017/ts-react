import React from 'react';
import './App.css';
import Hello from './components/Hello';
import List from './pages/List';
import * as actions from './actions/';
import { IStoreState } from './types/index';
import { connect } from 'react-redux';
interface IProps {
  name: string;
  enthusiasmLevel?: number;
  onIncrement?: () => void;
  onDecrement?: () => void;
}
function App(props: IProps,) {
  const {onIncrement,onDecrement,enthusiasmLevel} = props

  const clickHandler = (data:string)=>{
    console.log(data);
  }
  return (
    <div className="App">
      hello React Typescript
      <Hello title="yanyanshan" age={ 20 } parentClick={clickHandler}/>
      <List />
      <div>enthusiasmLevel:{enthusiasmLevel}</div>
      <button onClick={onDecrement}>-</button>
      <button onClick={onIncrement}>+</button>
    </div>
  );
}

function mapStateToProps({ enthusiasmLevel, languageName }: IStoreState) {
  return {
    enthusiasmLevel,
    name: languageName,
  }
}

function mapDispatchToProps(dispatch:any) {
  return {
    onIncrement: () => dispatch(actions.incrementEnthusiasm()),
    onDecrement: () => dispatch(actions.decrementEnthusiasm()),
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(App);
