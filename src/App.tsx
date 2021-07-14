
import React from 'react';
import './App.css';
import { StateStore } from './models/index';
import { connect } from 'react-redux';
interface IProps{
}
const Index: React.FC<IProps> = (props: IProps) =>{

  return (
    <div className="App">
      <h1> hello React Typescript</h1>
    </div>
  );
}
function mapStateToProps({numberState}: StateStore) {
  
  return {
  }
}
function mapDispatchToProps(dispatch:any) {
  return {
  
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(Index);
