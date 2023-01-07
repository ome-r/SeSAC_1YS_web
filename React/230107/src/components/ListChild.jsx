import React from 'react';

export default function ListChild({ work, todo }) {
  return (
    <div>
      <h1>{work}</h1>
      <p>{todo}</p>
      <hr />
    </div>
  );
}
