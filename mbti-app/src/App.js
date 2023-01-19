import styled from 'styled-components';
import GlobalStyle from './Componenets/GlobalStyle';
import Start from './Componenets/Start';
import { useSelector } from 'react-redux';
import Mbti from './Componenets/Mbti';
import Show from './Componenets/Show';

const Main = styled.main`
  box-sizing: border-box;
  width: 100%;
  max-width: 500px;
  padding: 0 35px;
  margin: auto;
  text-align: center;
`;

function App() {
  // 페이지 값 받아오기
  const page = useSelector((state) => state.mbti.page); //state안에 mbti가서 page값
  //suvey 받아오기
  const survey = useSelector((state) => state.mbti.survey);
  return (
    <>
      <GlobalStyle />
      {/* page 분기처리 */}
      <Main>
        {/* 페이지가 0이면 start페이지, 아니면 MBTI페이지를 보여줘라 */}
        {page === 0 ? (
          <Start />
        ) : page !== survey.length + 1 ? (
          <Mbti />
        ) : (
          <Show />
        )}
      </Main>
    </>
  );
}

export default App;
