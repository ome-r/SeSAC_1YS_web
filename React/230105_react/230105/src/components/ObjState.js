import React, { useState } from 'react';

export default function ObjState() {
  const [state, setState] = useState({ teacher: '이효석' });
  console.log(state);

  return (
    <div>
      <button
        onClick={() => {
          //   state.teacher = 'tetz';
          //   setState(state);
          state.teacher = 'tetz';
          // 전개 연산자 - 객체에 있는 값
          const copyObj = { ...state };
          setState(copyObj);
          //   setState({ teacher: 'tetz' });
          console.log(state);
        }}
      >
        영어로!
      </button>
      <br />
      <span>{state.teacher}</span>
    </div>
  );
}
