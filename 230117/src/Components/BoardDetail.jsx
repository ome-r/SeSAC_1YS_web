import React from 'react';
import { useParams } from 'react-router-dom';
import Header from './Header';

export default function BoardDetail() {
  // useParams 임포트해오자
  const params = useParams();
  //   콘솔 찍어서 확인
  console.log(params);

  return (
    <>
      <Header />
      {/* boardID라는 key로 넣어준다 */}
      <h2>{params.boardID}번 글입니다.</h2>
    </>
  );
}
