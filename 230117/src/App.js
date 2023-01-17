import { Route, Routes, Link } from 'react-router-dom';
import './App.css';
import Board from './Components/Board';
import BoardDetail from './Components/BoardDetail';
import FancyBorder from './Components/FancyBorder';
import Header from './Components/Header';
import Image from './Components/Image';
import NotFound from './Components/NotFound';
import Profile from './Components/Profile';
import StyledApp from './Components/StyledApp';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Header />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/board" element={<Board />} />
        {/* 파라미터 : 주소값으로 데이터를 받아서 변경할 것이다 key값 = boardID */}
        <Route path="/board/:boardID" element={<BoardDetail />} />
        {/* 위에서 주소가 걸리는지 주르륵 먼저 읽고, notfound띄우기 */}
        <Route path="*" element={<NotFound />} />
      </Routes>
      {/* <Image /> */}
      {/* <FancyBorder color="skyblue"> */}
      {/* props.children으로 전달할 html */}
      {/* <h1>Hello, props.children</h1>
        <span>이건 매우 유용한 기술입니다!</span>
      </FancyBorder> */}
      {/* <nav>
        <ul>
          <li>
            <Link to="/">홈페이지 이동</Link>
          </li>
          <li>
            <Link to="/profile">프로필 페이지 이동</Link>
          </li>
          <li>
            <Link to="/board">게시판 페이지 이동</Link>
          </li>
        </ul>
      </nav> */}
      {/* 라우터 처리하는 코드 작성 */}
      {/* <Routes> */}
      {/* profile이라는 주소가 들어오면 반응, el안에 js를 의미하는 {} 안에 컴포넌트 넣기 */}
      {/* <Route path="/profile" element={<Profile />} />
        <Route path="/board" element={<Board />} />
      </Routes> */}
      {/* <Profile />
      <Board /> */}
    </div>
  );
}
export default App;
