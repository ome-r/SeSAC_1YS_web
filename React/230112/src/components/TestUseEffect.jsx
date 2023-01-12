import React from 'react';
import { useRef } from 'react';
import { useEffect } from 'react';
import { useState } from 'react';

export default function TestUseEffect() {
  const [count, setCount] = useState(0);
  const [text, setText] = useState('입력하세요!');
  const inputValue = useRef();

  // 버튼 클릭 해도 렌더
  const onButtonClick = () => {
    console.log('👆버튼 클릭');
    setCount(count + 1);
  };

  //키보드 입력해도 렌더
  const oninputChange = () => {
    console.log('🌐 Key보드 입력');
    setText(inputValue.current.value);
  };

  // useEffect 사용해서 마운트될때 콘솔 보여주기 = 익명함수 사용
  useEffect(() => {
    console.log('🎇 렌더링 될 때 마다 실행');
  });

  // 마운트 될때만 실행 = 빈 배열
  useEffect(() => {
    console.log('🟢 마운트 될 때만 실행');
  }, []);

  // 버튼 클릭 될때만 실행 == 카운트는 클릭시에 업데이트 되므로 count를 조건으로 한다 [count]가 의존성 배열이다.
  useEffect(() => {
    console.log('🛼 버튼 클릭시에만 실행');
  }, [count]);

  //키 입력시에만 실행 -- input 태그 변경시 text가 변경되므로 의존성 배열에 text
  useEffect(() => {
    console.log('🖼️ 키 입력시에만 실행');
  }, [text]);

  return (
    <div>
      <h1>{count}</h1>
      <button onClick={onButtonClick}>+1 버튼</button>
      <br />
      <h1> {text} </h1>
      <input ref={inputValue} onChange={oninputChange} />
    </div>
  );
}
