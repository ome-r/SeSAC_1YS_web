// react의 캔버스, 실제 리액트 코드 실행 기본조건이 걸려있는 곳.  
// 여기서 개발하게 된다. 

import logo from './logo.svg';
import './App.css';
import ImgComponent from './components/ImgComponent';
import BtnToNaver from './components/BtnToNaver';

function App() {

   return (
    <div className="App">
      <ImgComponent/>
      <BtnToNaver/>
    </div>
  );
}

export default App;
