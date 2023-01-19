import React from 'react';
import styled from 'styled-components';
import OrangeButton from './OrangeButton';
import { useDispatch } from 'react-redux';
import { next } from '../Store/modules/mbti'; //액션함수 임포트

const MainImg = styled.img`
  width: inherit;
`;
const Header = styled.p`
  font-size: 3em;
`;
const SubHeader = styled.p`
  font-size: 1.5em;
  color: #859d49;
`;

export default function Start() {
  const dispatch = useDispatch();

  return (
    <>
      <Header>개발자 MBTI 조사</Header>
      <MainImg src="/images/main.jpg" alt="메인 이미지" />
      <SubHeader>
        개발자가 흔히 접하는 상황에 따른, <br /> MBTI를 알아 봅시다!
      </SubHeader>
      {/* 리덕스에 있는 페이지를 +1 해주는 next 액션 함수 */}
      <OrangeButton text="테스트 시작" clickEvent={() => dispatch(next())} />
      {/* <a text="테스트 시작">테스트 시작</a> */}
    </>
  );
}
