import './App.css';
import List from './components/List';

function App() {
  return (
    <div className="App">
      {/* <List /> */}
      {/* props를 컴포넌트로 보내기 MainHeader의 text에서 받는다. */}
      {/* <MainHeader text="Hello, Props World!" />
      <MainHeader text="Bye Bye, props world!" />
      <MainHeader text="Well come back, props world!" /> */}
      {/* <MainHeader text="Go naver" href="https://naver.com" userID="tetz!" />
      <ClassProps text="Go naver" href="https://naver.com" userID="tetz!" /> */}
      <List />
    </div>
  );
}

export default App;
