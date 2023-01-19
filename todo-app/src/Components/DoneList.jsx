import React from 'react';
import { useSelector } from 'react-redux';

export default function DoneList() {
  // 전체 리듀서에서 todo에서 list값만 받아오기!
  const list = useSelector((state) => state.todo.list).filter(
    (el) => el.done === true
  ); // .filter로 체이닝 걸기
  return (
    <section>
      <h1>완료 목록</h1>
      <ul>
        {list.map((el) => (
          <li key={el.id}>{el.text}</li>
        ))}
      </ul>
    </section>
  );
}
