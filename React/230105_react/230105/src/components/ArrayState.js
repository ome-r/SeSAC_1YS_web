import React, { useState } from 'react';

export default function ArrayState() {
  // 내부 값이 0
  const [state, setState] = useState([0]);

  return (
    <div>
      {/* state라는 배열에서 인덱스0값 */}
      {state[0]}
      <br />
      <button
        onClick={() => {
          // 초기값 0을 1로 바꾸기
          state[0] = 1;
          //  리렌더링을 위해 state변경함수 사용
          const copyArr = [...state];
          setState(copyArr);
          console.log(state);
        }}
      >
        +1
      </button>
    </div>
  );
}
