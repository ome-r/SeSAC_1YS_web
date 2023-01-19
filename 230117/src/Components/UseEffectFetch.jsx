import React, { useEffect, useState } from 'react';
import axios from 'axios';
import ProfileComponent from './ProfileComponent';

// 이안에서 컨포넌트 최초마운트 -> 서버로부터 데이터 요청 -> 데이터를 state에 등록 -> 해당내용렌더링
export default function UseEffectFetch() {
  const [dataArr, setDataArr] = useState([]);
  async function fetchData() {
    const resFetch = await axios.get('http://localhost:4000/');
    if (resFetch.status !== 200) return alert('통신 에러');
    const data = resFetch.data;

    setDataArr(data);
    console.log(data);
  }
  //   useEffect 는 리턴을 먼저 그려놓고 실행 , 빈배열[]을 넣어야 무한렌더링을 막을 수 있다
  useEffect(() => {
    fetchData();
  }, []);

  //위의 useEffect보다 얘네가 먼저 실행
  return (
    <>
      {/* 빈배열[].map을 그려주면 오류가 나지않아 초깃값을 []로한다. 만약 undefined.map이라면 오류가 난다 */}
      {dataArr.map((el, index) => {
        return (
          <ProfileComponent
            name={el.name}
            age={el.age}
            nickName={el.nickName}
            key={index}
          />
        );
      })}
    </>
  );
}
