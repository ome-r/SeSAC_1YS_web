import { createGlobalStyle } from 'styled-components'; //스타일드 컴포넌트 내부 메소드

//컴포넌트 이름과 맞춰주기
const GlobalStyle = createGlobalStyle`
@font-face {
    font-family: 'ONE-Mobile-POP';
    src: url('https://cdn.jsdelivr.net/gh/projectnoonnu/noonfonts_2105_2@1.0/ONE-Mobile-POP.woff') format('woff');
    font-weight: normal;
    font-style: normal;
}

body {
    //첫번째 거 없으면 "Arial", 그거도 없으면 기본폰트 sans-serif를 써라 
    font-family: 'ONE-Mobile-POP', "Arial", sans-serif; //전체에 동일한 폰트 먹이기
    padding-top: 1em;
    white-space: pre-wrap;
}
ul, ol {
    list-style: none; //얘넨 스타일없게 
    padding-left: 0px; //쓸데없는 공간 없도록 
}
`;

export default GlobalStyle; //바깥에서 사용하게
