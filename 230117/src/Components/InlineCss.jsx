import React from 'react';

export default function InlineCss() {
  // css도 jsx문법이므로 카멜케이스
  const divStyle = {
    backgroundColor: 'orange',
  };

  const headingStyle = {
    backgroundColor: 'pink',
    fontWeight: '700',
  };

  const spanStyle = {
    backgroundColor: 'skyblue',
    fontWeight: '700',
  };

  return (
    // 컴포넌트 내부의 태그를 꾸미는 것
    <div style={divStyle}>
      <h1 style={headingStyle}>CSS 테스트 컴포넌트</h1>
      <span style={spanStyle}>컴포넌트 css로 꾸미기 </span>
    </div>
  );
}
