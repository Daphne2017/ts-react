import {
    all
  } from 'redux-saga/effects';
  import account from './account';
  import number from './number';
  
  export default function* rootSaga() {
    yield all([account(),number()]);
  }