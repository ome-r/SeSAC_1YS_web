import React from 'react';
import ListChild from './ListChild';
import Modal from './Modal';

export default function List() {
  return (
    <div>
      <h1>오늘 해야할일</h1>
      <hr />
      <Modal />
      {/* <h2>리액트 공부하기!</h2>
      <p>State 활용법 익히기</p>
      <hr /> */}
      <ListChild work="리액트 공부하기" todo="State 사용법 익히기" />
      <h2>코테 문제 풀기</h2>
      <p>LV 0 정복 가즈아</p>
      <hr />
      <Modal />
    </div>
  );
}
