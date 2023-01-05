// import logo from './logo.svg';
import './App.css';
import ObjState from './components/ObjState';
// import ArrayState from './components/ArrayState';
// import { useState } from 'react';
// import Ex1 from './components/Ex1';
// import Condition from './components/Condition';
// import Emoji from './components/Emoji';
// import Ex2 from './components/Ex2';
// import ClassState from './components/ClassState';
// import StateAndVariable from './components/StateAndVariable';

// function App() {
//   return (
//     <div className="App">
//       <Condition />
//     </div>
//   );
// }
function App() {
  return (
    <div className="App">
      {/* <Ex2 /> */}
      {/* <ClassState /> */}
      {/* <StateAndVariable /> */}
      {/* <ArrayState /> */}
      <ObjState />
    </div>
  );
}
export default App;

// function App() {
//   let [teacher, setTeacher] = useState('이효석');

//   // function inEnglish() {
//   //   // const spanEl = document.querySelector('.App > span');
//   //   // spanEl.innerHTML = 'tetz';
//   //   teacher = 'tetz';
//   //   console.log(teacher);
//   // }

//   function customSetTeacher(name) {
//     // name이라는 인자를 받아서 teacher에 넣기
//     // teacher = name;
//     // state변경함수를 불러서 해보면, 리렌더링이 된다. 즉 반드시 state변경함수를 호출하여 사용해야한다.
//     setTeacher(name);
//     // 받았는지 확인하기
//     console.log(teacher);
//   }

//   return (
//     <div className="App">
//       <button onClick={() => customSetTeacher('tetz')}>영어로!</button>
//       <br />
//       <span> {teacher} </span>
//     </div>
//   );
// }

// function App() {
//   let [count, setCount] = useState(0);

//   function add() {
//     setCount(count + 1);
//   }

//   function sub() {
//     setCount(count - 1);
//   }

//   return (
//     <div className="App">
//       {count} <br />
//       <button onClick={add}>1</button>
//       <button onClick={sub}>1</button>
//     </div>
//   );
// }

// function App() {
//   return (
//     <div className="App">
//       <Ex1 />
//     </div>
//   );
// }
