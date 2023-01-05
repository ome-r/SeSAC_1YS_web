import React, { useState } from 'react';

export default function StateAndVariable() {
  const [state, setState] = useState(0);
  // 바꿀 변수는 let으로 선언한다.
  let variable = 0;
  // 콘솔로그에서 값 보기위해 함수선언
  function setVariable() {
    variable += 1;
    console.log(`state: ${state} / variable: ${variable}`);
  }

  return (
    <div>
      {state} / {variable}
      <br />
      {/* 함수 두가지 동시실행을 위해 {}중괄호로 삽입 */}
      <button
        onClick={() => {
          setState(state + 1);
          // variable +=1;
          setVariable();
        }}
      >
        +1
      </button>
    </div>
  );
}
