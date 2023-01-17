import React from 'react';
import { useDispatch, useSelector } from 'react-redux';

export default function Test() {
  //콜백으로 받아온 state값을 return {} 이건 생략되었음
  const weight = useSelector((state) => state);
  //dispatch 임포트 _ 우편배달부 고용
  const dispatch = useDispatch();
  return (
    <>
      {/* 저 멀리 index.js의 내부의 state값이 들어왔다 */}
      <h1>당신의 몸무게는 {weight} 입니다🎇</h1>
      {/* dispatch 사용  type인 이유? 우리가 type이라 했기 때문이다. 디스패치에게 편지지를 쥐어준다
      내용은 '증가', '감소'*/}
      <button
        onClick={() => {
          dispatch({ type: '증가' });
        }}
      >
        살찌우기
      </button>
      <button
        onClick={() => {
          dispatch({ type: '감소' });
        }}
      >
        살빼주기
      </button>
    </>
  );
}
