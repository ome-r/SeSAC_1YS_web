import React from 'react';
import { useEffect } from 'react';
import { useRef } from 'react';
import { useState } from 'react';

export default function PracticeTimer() {
  // 리렌더링
  const [render, setRender] = useState(false);
  //시간은 버튼 클릭시에만 떠야하고 리렌디렁시 값 유지 -> useRef
  const time = useRef(0); //0초부터 시작

  //마운트해서 시간 찍히게 만들기
  useEffect(() => {
    const timer = setInterval(() => {
      time.current += 1;
      console.log(time.current);
    }, 1000);

    //언마운트 멈추기
    return () => {
      clearInterval(timer); // timer에 든 시계 멈춰라
    };
  }, []); //마운트될때 한번만 실행하기 위해 빈배열 삽입

  return (
    <div>
      <h1>{time.current}</h1>
      <button onClick={() => setRender(!render)}>시간</button>
    </div>
  );
}
