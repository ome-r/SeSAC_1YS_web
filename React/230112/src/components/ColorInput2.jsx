import React from 'react';
import { useRef } from 'react';

export default function ColorInput2() {
  // 컬러 적용 버튼을 눌렀을때, input창에 텍스트가 컬러와 동일할시 컬러 변경
  const orangeEl = useRef();
  const cccEl = useRef();
  const skyblueEl = useRef();

  const adjustCSS = () => {
    orangeEl.current.style.backgroundColor = 'orange';
    cccEl.current.style.backgroundColor = 'ccc';
    skyblueEl.current.style.backgroundColor = 'skyblue';
  };

  // const inputColor = () => {
  //   if (inputColor.current.value === 'orange')
  // }

  return (
    <div>
      <input type="text" />
      <br />
      <button onClick={adjustCSS}>컬러 적용</button>
    </div>
  );
}
