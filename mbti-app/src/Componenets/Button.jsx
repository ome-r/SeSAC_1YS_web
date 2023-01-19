import React from 'react';
import styled from 'styled-components';

const MyButton = styled.a`
  position: relative; //문서흐름에따라 자리에 박혀있음
  display: inline-block;
  cursor: pointer;
  vertical-align: middle;
  text-decoration: none; //a 태그 밑줄 없애기
  line-height: 1.6em; //버튼에 맞는 라인높이
  font-size: 1.2em;
  padding: 1.25em 2em;
  // 백틱 안에 문자열이므로 $사용
  background-color: ${(props) => props.mainColor};
  border: 2px solid ${(props) => props.subColor};
  border-radius: 0.75em;
  user-select: none; //드래그 여부를 결정하는 속성 -- 지금은 안되게 함
  transition: transform 0.15s ease-out; //처음에 빨랐다가 천천히 0.15초
  transform-style: preserve-3d; //그림자에 3D효과 _ 3차원 효과
  margin-top: 1em;

  //스타일드 컴포넌트는 css보다 발달된 sass 문법 사용가능. sass는 중첩이 가능하므로 사용하기 좋다
  &::before {
    // 가상요소
    content: ''; //가상의 컨텐츠를 주어야함
    position: absolute;
    width: 100%;
    height: 100%;
    top: 0;
    right: 0;
    left: 0;
    bottom: 0; // 이렇게 0000 줘버리면 부모요소와 겹칠것이다.
    background: ${(props) => props.subColor};
    border-radius: inherit; //부모와 동일하게 맞춰줌
    box-shadow: 0 0 0 2px ${(props) => props.subColor}; //y축으로 2픽셀 떨구는 그림자
    transform: translate3d(0, 0.75em, -1em);
  }
  &:hover {
    background: ${(props) => props.hoverColor};
    transform: translateY(0.25em);
  }
`;
export default function Button({
  //이안에 필요한 props를 작성하자
  text, //컨텐츠 내용
  clickEvent,
  mainColor,
  subColor, //그림자 색깔
  hoverColor,
}) {
  return (
    <MyButton
      onClick={clickEvent}
      mainColor={mainColor}
      subColor={subColor}
      hoverColor={hoverColor}
    >
      {text}
    </MyButton>
  );
}
