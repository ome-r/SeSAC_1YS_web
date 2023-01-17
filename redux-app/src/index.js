import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { Provider } from 'react-redux';
import { createStore } from 'redux';

// 관리할 품목
const weight = 100;

// 관리자 reducer (일꾼)
// 매개변수 action 추가
function reducer(state = weight, action) {
  if (action.type === '증가') {
    state += 1;
    //증가한 값을 돌려준다
    return state;
  } else if (action.type === '감소') {
    state -= 1;
    return state;
  } else {
    return state;
  }
}
//100을 리턴해주는 것
//   return state;
// }

//가게를 만들었다
let store = createStore(reducer);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  //그걸 provider에 전달한다. 아재 어디서든 weight라는 품목을 불러올 수 있다
  <Provider store={store}>
    <App />
  </Provider>
);

reportWebVitals();
