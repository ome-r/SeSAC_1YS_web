import React from 'react';
import { useState } from 'react';
import { Fragment } from 'react';

function App() {
  // info라는 배열을 만들었고 map 함수를 통해 처리할 예정
  // const info = [
  //   { name: '코디', email: 'codee@gmail.com' },
  //   { name: '윤소희', email: 'ysh@gmail.com' },
  // ];

  // info를 state함수로 바꾸어 재렌더링 시켜주자
  const [info, setInfo] = useState([
    { name: '코디', email: 'codee@gmail.com' },
    { name: '윤소희', email: 'ysh@gmail.com' },
  ]);
  // name이라는 state변수를 통해 내용을 변경하자
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');

  return (
    <Fragment>
      <div>
        {/* input에는 onchange를 걸 수 있다(이벤트 걸기). 
        onChange 프롭스에는 함수가 들어가고 첫 매개변수는 event처리하는 정보객체 
        e.target하면 event가 걸린 태그의 정보를 가져올 수 있다.
        즉 e.taget = input태그를 선택한 것
        그 안에 value를 가져와서 바꾸어보자...*/}
        <input
          type="text"
          name="name"
          placeholder="이름"
          value={name}
          onChange={(e) => {
            setName(e.target.value);
          }}
        />
        <input
          type="text"
          email="email"
          placeholder="이메일"
          value={email}
          onChange={(e) => {
            setEmail(e.target.value);
          }}
        />
        {/* concat안에 딕셔너리 안에 name, email 넣기 
        concat을 사용하면 새로운 배열이 info 마지막에 븥을 것이다, 이때 setInfo 안에 들어가도록 만든다*/}
        <button
          type="button"
          onClick={() => {
            setInfo(info.concat({ name: name, email: email }));
            setName('');
            setEmail('');
          }}
        >
          등록
        </button>
        {/* map 함수를 통해 for문처럼 돌아다니며 h2 태그 두개 출력, 두번째 매개변수는 i = 인덱스 */}
        {info.map((element, i) => {
          return (
            <h2 key={i}>
              {element.name} : {element.email}
            </h2>
          );
        })}
        {/* 중괄호 없이 쓰려면 return도 빼고 {}도 빼기 */}
      </div>
    </Fragment>
  );
}

export default App;
