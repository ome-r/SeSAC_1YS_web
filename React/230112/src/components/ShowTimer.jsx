import React from 'react';
import { useState } from 'react';
import Timer from './Timer';

export default function ShowTimer() {
  // 조건부 렌더링
  const [show, setShow] = useState(false);
  return (
    <div>
      {show && <Timer />}
      {/* 무한렌더링 방지용 익명함수 후에 state함수 가져오기 */}
      <button
        onClick={() => {
          setShow(!show);
        }}
      >
        버튼
      </button>
    </div>
  );
}
