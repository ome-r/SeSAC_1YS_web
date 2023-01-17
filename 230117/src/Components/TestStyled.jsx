import React from 'react';
// styled컴포넌트 불러오기, styled라는 변수는 마음대로 설정가능
import styled from 'styled-components';

// 디자인을 입힐 div headning span
// 어떤 html태그로 치환활지 결정
const MyDiv = styled.div`
  background-color: orange;
`;
// h1 태그로 하겠다.
const MyHeading = styled.h1`
  color: blue;
`;
const MySpan = styled.span`
  background-color: pink;
  font-weight: 700;
`;
//왜 사용하나? style 파일을 하나하나 만드는것보다 컴포넌트 내부에서 관리하는게 편리해서
export default function TestStyled() {
  // 나만의 태그로 변경!
  return (
    <MyDiv>
      <MyHeading>h1태그</MyHeading>
      <MySpan>span입니다</MySpan>
    </MyDiv>
  );
}
