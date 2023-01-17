import React from 'react';

export default function FancyBorder(props) {
  return (
    //체이닝으로 사용
    // 객체 표현 {} 그 안에 style 적용하기
    // 백틱 사용``하기 데이터를 받아오기 때문
    <div style={{ border: `3px solid ${props.color}` }}>{props.children}</div>
  );
}
