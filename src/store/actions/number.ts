import { createActions } from 'redux-actions';
export const numberActions = createActions({ 
    INCREMENT_NUMBER: num => num, // 该函数参数传入的是action创建的时候传入的参数，返回结果会作为到生成的action的payload的value。
    DECREMENT_NUMBER: num => num,
    CHANGE_NUMBER: type => type,
});