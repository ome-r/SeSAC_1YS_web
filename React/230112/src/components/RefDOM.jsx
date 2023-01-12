import React from 'react';
import { useRef } from 'react';

export default function RefDOM() {
  const orangeEl = useRef();
  const navyEl = useRef();
  const inputEl = useRef();

  //css 함수
  const adjustCSS = () => {
    orangeEl.current.style.backgroundColor = 'orange';
    navyEl.current.style.backgroundColor = 'navy';
  };
  // input 비우는 함수
  const clearInput = () => {
    inputEl.current.value = '';
  };
  return (
    <div>
      <h1 ref={orangeEl}>Orange</h1>
      <h1 ref={navyEl}>navy</h1>
      <input type="text" ref={inputEl} />
      <br />
      <br />
      <button onClick={adjustCSS}>CSS 적용하기</button>
      <button onClick={clearInput}>Input 초기화</button>
    </div>
  );
}
