import React, { useState } from 'react';

export default function Ex1() {
  const [count, setCount] = useState(0);

  return (
    // return 내부에서는 하나의 부모요소만 존재해야한다. 하나의 요소로 감싸져있지않으면 어떤 관계인지 알수 없으므로
    <div>
      {count}
      <br />
      <button onClick={() => setCount(count - 1)}>-</button>
      <button onClick={() => setCount(count + 1)}>+</button>
    </div>
    // <div></div>
  );
}
