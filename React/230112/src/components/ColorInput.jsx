import React from 'react';
import { useRef } from 'react';

export default function ColorInput() {
  // input태그에서 값 받을 것
  const userInput = useRef();
  // div 전체 요소에 색 변경
  const divEl = useRef();

  // 이벤트 핸들러 함수
  const adjustCSS = () => {
    // divEl은 useRef, current까지 가야 DOM요소
    divEl.current.style.backgroundColor = userInput.current.value;
    // input 태그에 접근하여 값 받아온것 = userInput.current.value
  };

  return (
    <div ref={divEl}>
      <input ref={userInput} />
      <br />
      <button onClick={adjustCSS}>컬러 적용</button>
    </div>
  );
}
