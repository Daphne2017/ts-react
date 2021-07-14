import {
    handleActions
} from 'redux-actions';
import update from 'immutability-helper';
import { Action,AccountItem ,accountStore} from '../../models'
const configState: accountStore  = {
    loading: false,
    accounts: [] as AccountItem[],
    all: 0
};
// createAction: https://github.com/redux-utilities/redux-actions/blob/master/docs/api/createAction.md
// combineActions: https://github.com/redux-utilities/redux-actions/blob/master/docs/api/combineActions.md
// handleActions的使用方法：https://github.com/redux-utilities/redux-actions/blob/master/docs/api/handleAction.md
const accountReducer = handleActions({
    'SET_LOADING': (state:accountStore, {payload}:Action) => {return{...state, loading: payload}},
    'SET_ACCOUNT': (state:accountStore, {payload}:Action) =>  {return {...state, accounts: payload}},
    'SET_ALL': (state:accountStore, {payload}:Action) => {return {...state,all:payload}}
  }, configState);
  
export default accountReducer;