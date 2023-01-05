import React, { useState } from 'react';

export default function Condition() {
  // let은 상태변경이 안되더라도 값을 바꿔주는 경우가 발생할 수 있어, 주로 const를 사용한다
  const [condition, setCondition] = useState(true);

  return (
    <div>
      {/* 버튼클릭시 state값 변경이 무한히 되는 구조 */}
      <button onClick={() => setCondition(!condition)}>컨디션 변경!</button>
      <br />
      <span>{condition ? '👍' : '😂'}</span>
    </div>
  );
}
