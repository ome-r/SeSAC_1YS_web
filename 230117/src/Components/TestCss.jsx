import React from 'react';
//적용할 css 임포트하면 css 적용!
import '../Style/TestCss.css';

export default function TestCss() {
  return (
    <div className="component-root">
      <h1>CSS 파일 테스트</h1>
      <span>CSS 적용하기</span>
    </div>
  );
}
