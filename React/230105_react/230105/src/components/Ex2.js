import React, { useState } from 'react';

export default function Ex2() {
  const [count, setCount] = useState(0);

  return (
    <div>
      {/* 숫자가 10보다 작으면 따봉, 크면 썬글라스 이모지 */}
      <span onClick={() => setCount(count + 1)}>
        {count <= 10 ? '👍' : '😎'}
      </span>
      <br />
      <span>{count}</span>
    </div>
  );
}
