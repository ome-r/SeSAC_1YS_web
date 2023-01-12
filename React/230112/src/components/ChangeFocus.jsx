import React from 'react';
import { useRef } from 'react';

export default function ChangeFocus() {
  const input1 = useRef();
  const input2 = useRef();

  // 기능요소 만들기 (function, const 둘다 가능)
  const ChangeFocusOne = () => {
    input1.current.focus();
  };

  const ChangeFocusTwo = () => {
    input2.current.focus();
  };

  return (
    <div>
      <input ref={input1} />
      <input ref={input2} />
      <br />
      <button onClick={ChangeFocusOne}>1번</button>
      <button onClick={ChangeFocusTwo}>2번</button>
    </div>
  );
}
