import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { Provider } from 'react-redux';
import { configureStore } from '@reduxjs/toolkit'; //store실제적으로 만듦
import rootReducer from './Store'; //생략하면 알아서 index.js를 가져온다 (원래는 ./store/index)

const reduxDevTool =
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__();
const store = configureStore({ reducer: rootReducer }, reduxDevTool);

// 프로바이더안에 들어갈 store 변수 설정
// const store = configureStore({ reducer: rootReducer }); //스토어 안에 index.js에 합쳐놓은 스토어를 사용
console.log(store.getState());

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Provider store={store}>
    <App />
  </Provider>
);

reportWebVitals();
