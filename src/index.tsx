import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import AppRouter from './router/AppRouter';
import reportWebVitals from './reportWebVitals';
import {Provider} from 'react-redux';
import store, { sagaMiddleware }  from './store/index';
import rootSaga from './store/saga';
sagaMiddleware.run(rootSaga);
ReactDOM.render(
  // <React.StrictMode>
    <Provider store={store as any}>  
      <AppRouter />
    </Provider>,
   
  // </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

