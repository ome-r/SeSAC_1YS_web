import React from 'react';
import { useState } from 'react';
import PracticeOne from './PracticeOne';
import PracticeTwo from './PracticeTwo';

export default function ExConditional() {
  //조건부 렌더링
  const [condition, setCondition] = useState('1번');

  const onChange = () => {
    condition === '1번' ? setCondition('2번') : setCondition('1번');
  };

  return (
    <div>
      {condition === '1번' ? (
        <PracticeOne text={condition} />
      ) : (
        <PracticeTwo text={condition} />
      )}
      <button onClick={onChange}>{condition}</button>
    </div>
  );
}
