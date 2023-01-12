import React from 'react';
import { useState } from 'react';
import PracticeTimer from './PracticeTimer';

export default function ExShow() {
  //state
  const [show, setShow] = useState(false);

  return (
    <div>
      {/* 조건부 처리 */}
      {show && <PracticeTimer />}
      {/* show 트루면 숨기기 , false면 보이기*/}
      <button
        onClick={() => {
          setShow(!show);
        }}
      >
        {show ? '숨기기' : '보이기'}
      </button>
    </div>
  );
}
