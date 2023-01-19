import React from 'react';
import styled from 'styled-components';
import SkyblueButton from './SkyblueButton';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { check, next } from '../Store/modules/mbti';

const SurveyQuestion = styled.p`
  font-size: 1.5em;
  color: #777;
`;
const Vs = styled.p`
  font-size: 2em;
  padding-top: 1em;
`;

export default function Mbti() {
  const survey = useSelector((state) => state.mbti.survey);
  //페이지마다 질문이 다르므로 페이지 가져오기
  const page = useSelector((state) => state.mbti.page);

  const dispatch = useDispatch();
  return (
    <>
      {/* 배열 인덱스는 0부터 시작하므로, page는 1부터 시작하기 때문에 -1 */}
      <SurveyQuestion>{survey[page - 1].question}</SurveyQuestion>
      <ul>
        {survey[page - 1].answer.map((el, index) => {
          return (
            <li key={index}>
              <SkyblueButton
                text={el.text}
                clickEvent={() => {
                  dispatch(check(el.result)); //결과값전달
                  dispatch(next()); //페이지 넘기기
                }}
              />
              {/* 첫 버튼 아래(인덱스가 0인 경우)에만 vs 주기 */}
              {index === 0 && <Vs> VS </Vs>}
            </li>
          );
        })}
      </ul>
    </>
  );
}
