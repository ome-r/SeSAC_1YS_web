import React from 'react';
import { useState } from 'react';
import Item from './Item';

export default function ConditionalRender() {
  // 조건부 렌더링을 위해서 리렌더링이 되어야 하므로 useState도 함께 사용
  const [condition, setCondition] = useState('보여주기');

  //함수
  const onChange = () => {
    condition === '보여주기'
      ? setCondition('감추기')
      : setCondition('보여주기');
  };
  const conditionRender = condition === '감추기' && <Item />;

  return (
    <>
      {conditionRender}
      {/* 왼쪽이 true라면 item이 보인다 */}
      {/* {condition === '감추기' && <Item />} */}
      {/* 버튼명도 변경이 될 것이다 */}
      <button onClick={onChange}>{condition}</button>
    </>
  );
}
