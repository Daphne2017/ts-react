import {
    combineReducers
  } from 'redux';
  import account from './account';
  import number from './number';
  
  const reducer = combineReducers({
    accountState:account,
    numberState:number
  });
  
  export default reducer;