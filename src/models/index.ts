export  interface AccountItem {
    name: string
    type: number
    money: number
    date: any
    id: number
}
export interface accountStore {
    [x: string]: any;
    loading: boolean,
    accounts: AccountItem[],
    all: number,
}
export interface numberStore {
    number: number,
    languageName:string
}
export interface StateStore {
    accountState: accountStore,
    numberState: numberStore,
}
export interface Action<T = any> {
    type: string;
    payload: T;
}
  