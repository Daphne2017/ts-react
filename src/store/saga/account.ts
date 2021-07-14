import {
    put,
    takeLatest,
    delay
} from 'redux-saga/effects';
import {accountActions} from '../actions/account';
import store from '../index';
import { sortBy } from 'lodash';
import { Action } from '../../models'
// 获取账目
function* fetchGetAcount() {
    try {
        yield put(accountActions.setLoading(true));
        yield delay(1000);
        yield put(accountActions.setLoading(false));
        yield put(accountActions.setAccount([
            {
                name: '充值',
                type: 0,
                money: 100,
                date: new Date(),
                id: 1
            },
            {
                name: '兼职',
                type: 1,
                money: 200,
                date: new Date(),
                id: 2
            }
        ]));
        yield put(accountActions.setAll(100));
    } catch (error) {
        return error;
    }
}

// 新增账目
function* fetchAddAcount(action:Action) {
    try {
        const allData = store.getState().accountState;
        
        const newData = sortBy(allData.accounts.concat(action.payload), function(item){
            return item.date;
        });

        const money = action.payload.type ? action.payload.money : -action.payload.money;

        yield put(accountActions.setAccount(newData));
        yield put(accountActions.setAll(allData.all + money));

    } catch (error) {
        return error;
    }
}

// 修改账目
function* fetchUpdateAcount(action:Action) {
    try {
        const allData = store.getState().accountState;

        const selectNum = allData.accounts.findIndex(item => {
            return item.id === action.payload.id;
        });
        
        const [...accounts] = allData.accounts;

        accounts.splice(selectNum, 1);

        const newData = sortBy(accounts.concat(action.payload), function(item){
            return item.date;
        });
        yield put(accountActions.setAccount(newData));
        yield put(accountActions.setAll(allData.all - action.payload.initial + (action.payload.type ? action.payload.money : -action.payload.money)));

    } catch (error) {
        return error;
    }
}

// 删除账目
function* fetchDeleteAcount(action:Action) {
    try {
        const allData = store.getState().accountState;
        const [...accounts] = allData.accounts;
        accounts.splice(action.payload.index, 1);
      
        yield put(accountActions.setAccount(accounts));
        yield put(accountActions.setAll(allData.all - action.payload.money));

    } catch (error) {
        return error;
    }
}

export default function* accountSaga() {
    yield takeLatest(accountActions.getAccount().type, fetchGetAcount);
    yield takeLatest(accountActions.addAccount().type, fetchAddAcount);
    yield takeLatest(accountActions.updateAccount().type, fetchUpdateAcount);
    yield takeLatest(accountActions.deleteAccount().type, fetchDeleteAcount);
}