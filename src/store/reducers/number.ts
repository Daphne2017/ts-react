import {
    handleActions
} from 'redux-actions';
import update from 'immutability-helper';
import { Action,numberStore } from '../../models'
const configState: numberStore  = {
    number: 0,
    languageName:'chinese'
};
// createAction: https://github.com/redux-utilities/redux-actions/blob/master/docs/api/createAction.md
// combineActions: https://github.com/redux-utilities/redux-actions/blob/master/docs/api/combineActions.md
// handleActions的使用方法：https://github.com/redux-utilities/redux-actions/blob/master/docs/api/handleAction.md
const numberReducer = handleActions({
    'INCREMENT_NUMBER': (state:numberStore, action:Action) => {
        console.log("reducer里边的action",action);
        return  {...state, number:state.number + 1 }
    },
    'DECREMENT_NUMBER': (state:numberStore, {payload}:Action) =>  {return  {...state, number:state.number - 1 }},
  }, configState);
  
export default numberReducer;