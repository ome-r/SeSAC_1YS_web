import React from 'react';
import { useRef } from 'react';
import { useState } from 'react';

export default function TestRef() {
  // useState안에 초깃값 안녕하세요 넣기
  const [text, setText] = useState('안녕하세요!');

  //   useRef 써보기
  const inputValue = useRef();

  //  input이라는 태그에서 발생한 e 인자를 받아온다
  function onChangeText() {
    console.log(inputValue);
    setText(inputValue.current.value);
    // iput 태그값이 변경될때마다 온체인지함수가 작동, h1태그에 해당값이 입력
    // const inputText = e.target.value;
    // setText(inputText);
  }

  return (
    <div>
      <h1>{text}</h1>
      {/* 이벤트객체e를 받는 함수를 인풋 안에 만든다*/}
      {/* 참조하고싶은 요소에 DOM */}
      <input
        ref={inputValue}
        //   input에 e 객체는 어떤 값을 인풋에 입력받는지 보려고 하는 것
        // 이를 inoutvalue값이 할것이므로 뺀다
        onChange={() => {
          onChangeText();
        }}
      />
    </div>
  );
}
