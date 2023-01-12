import React from 'react';
import { useState } from 'react';
import PracticeTimer from './PracticeTimer';

export default function ExUnmount() {
  const [show, setShow] = useState(false);
  return (
    <div>
      {show && <PracticeTimer />}
      {/* 무한렌더링 방지용 익명함수 후에 state함수 가져오기 */}
      <button
        onClick={() => {
          setShow(!show);
        }}
      >
        보이기
      </button>
    </div>
  );
}
