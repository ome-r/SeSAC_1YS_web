import React from 'react';
import snow from '../snow.jpg';

export default function Best() {
  return (
    <div style={{ textAlign: 'center', backgroundColor: 'bisque' }}>
      <h1 style={{ color: 'orange', textAlign: 'center' }}>
        이번주 베스트셀러
      </h1>
      <img src={snow} alt="백설공주" style={{ width: '300px' }}></img>
      <h2>백설공주에게 죽음을</h2>
      <h3 style={{ textAlign: 'left', marginLeft: '450px' }}>
        저자 : 넬레 노이하우스 <br /> 번역 : 김진아 <br /> 가격 : 12,420원{' '}
        <br /> 구분 : 독일소설
      </h3>
    </div>
  );
}
