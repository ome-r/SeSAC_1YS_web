import React from 'react';
import { useRef } from 'react';
import { useState } from 'react';

export default function Comparing() {
  const [countState, setCountState] = useState(0);
  const countRef = useRef(0);
  let countVar = 0;

  // state리렌더링용 코드
  const [render, setRender] = useState(false);

  // state 숫자 올려주기
  const countUpState = () => {
    setCountState(countState + 1);
    // 변화보기용 콘솔로그
    console.log('State :', countState);
  };
  // countRef 올리기
  const countUpRef = () => {
    // countRef.current = countRef.current + 1;
    countRef.current += 1;
    console.log('Ref :', countRef.current);
  };
  // 변수에도 값 올리기
  const countUpVar = () => {
    countVar += 1;
    console.log('Var :', countVar);
  };
  // 리렌더링
  const reRender = () => {
    setRender(!render);
  };
  return (
    <div>
      <h1>State: {countState}</h1>
      <h1>Ref : {countRef.current}</h1>
      <h1>Var : {countVar}</h1>
      <br />
      <button onClick={countUpState}>State UP!</button>
      <button onClick={countUpRef}>Ref UP!</button>
      <button onClick={countUpVar}>Variable UP!</button>
      {/* 리렌더링 */}
      <button onClick={reRender}>렌더링!</button>
    </div>
  );
}
