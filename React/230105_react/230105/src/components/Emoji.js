import React, { useState } from 'react';

export default function Emoji() {
  const [count, setCount] = useState(0);
  const [count2, setCount2] = useState(0);

  return (
    <div>
      <br />
      <button onClick={() => setCount(count + 1)}>👍</button>
      {count}
      <button onClick={() => setCount2(count2 + 1)}>😎</button>
      {count2}
    </div>
    // <div></div>
  );
}
