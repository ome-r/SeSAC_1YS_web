import React from 'react';

export default function MyComponent({ food }) {
  return (
    <div>
      <h1>
        제가 좋아하는 음식은<p style={{ color: 'red' }}>{food}</p>입니다.
      </h1>
    </div>
  );
}

MyComponent.defaultProps = {
  food: '양념굴비',
};
