import React from 'react';
import { useEffect } from 'react';

export default function Timer() {
  //  빈 배열이므로 마운트 될때만 렌더
  useEffect(() => {
    // 멈추려면 변수에 담는다
    const timer = setInterval(() => {
      console.log('oneTime');
    }, 1000);
    return () => {
      clearInterval(timer);
    };
  }, []);

  return (
    <>
      <h1>타이머 실행중입니다.</h1>
    </>
  );
}
