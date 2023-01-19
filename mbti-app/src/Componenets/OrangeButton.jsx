import React from 'react';
import Button from './Button'; //버튼 컴포넌트 불러와서 색깔만 지정!

//props로 받아온 애들 + 컬러 오렌지로 지정
export default function OrangeButton({ text, clickEvent }) {
  return (
    <Button
      text={text} //프롭스 내려받기
      clickEvent={clickEvent} //프롭스 내려왔다
      //여기서부터는 컬러 지정
      mainColor="#fae243"
      subColor="#fa9f1a"
      hoverColor="#faf000"
    />
  );
}
