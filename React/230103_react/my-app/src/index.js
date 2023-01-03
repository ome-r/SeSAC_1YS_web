import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  // StrictMode == 내부에 들어있는 코드를 두번씩 실행시켜준다. 잘 되는지 보려고 
  <React.StrictMode> 
    <App />
  </React.StrictMode>
);


reportWebVitals();
