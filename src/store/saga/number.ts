import {
    put,
    takeLatest,
} from 'redux-saga/effects';
import {numberActions} from '../actions/number';
import { Action } from '../../models'
function* changeNumber(action: Action) {
    if(action.payload.type === "add"){
        yield put(numberActions.incrementNumber());
    }else{
        yield put(numberActions.decrementNumber());  
    }
}

export default function* numberSaga() {
    yield takeLatest(numberActions.changeNumber().type, changeNumber);
}