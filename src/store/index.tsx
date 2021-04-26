import { createStore } from 'redux';
import { enthusiasm } from '../reducers/index';
import { IStoreState } from '../types/index';
import { composeWithDevTools } from 'redux-devtools-extension'

const store = createStore<IStoreState>(enthusiasm, {
  enthusiasmLevel: 1,
  languageName: 'TypeScript',
},composeWithDevTools());
export default store
