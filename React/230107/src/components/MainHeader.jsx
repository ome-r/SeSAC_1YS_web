import React from 'react';

// 부모 컴퍼넌트가 자식 컴포넌트에 보내는 것이 props
// app.js에서 보낸 props를 구조분해할당으로 받고있다.
export default function MainHeader(props) {
  const { text, href, userID } = props;

  return (
    <div>
      <h1>{userID} 님 반갑습니다.</h1>
      <a href={href}>{text}</a>
    </div>
  );
}

// const abj = {
//     str: "test",
//     num: 10
// }

// const str = obj.str;

// console.log(obj.str);
// console.log(obj.num);

// const str = obj.str; 이라고 쓰던 것을
// 구조분해 할당으로는
// const {str} = obj;
// 이렇게 되면 객체 키 중 하나인 str을 선언해서 바로 사용가능하다

// console.log(str);
// console.log(num);
