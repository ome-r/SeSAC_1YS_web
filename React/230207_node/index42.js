const express = require('express');
const { cpSync } = require('fs');
const app = express();
const http = require('http').Server(app);
const io = require('socket.io')(http);

app.get('/', (req, res) => {
  res.sendFile(__dirname + '/index42정답.html');
});

// 클라이언트 소켓이 연결되면 콜백함수가 생성된다.
// socket : 클라이언트 소켓과 연결되고 새로 생성된 소켓
io.on('connection', (socket) => {
  //인자 = 새로 생성된 소켓
  //   console.log('Server Socket Connected', socket.id); //각자만의 소켓 아이디가 있다.

  //   //   한쪽에서는 emit, on을 번갈아사용하며 주고받기
  //   socket.emit('welcome', { msg: 'welcome!!' }); //보낼때는 emit // welcome이라는 이벤트명으로 메세지 보내기
  //   socket.on('response', (str) => {
  //     console.log(str);
  //   });

  //   //  diconnect 부분
  //   socket.on('disconnect', () => {
  //     console.log('Server Socket disconnected');
  //   });

  //실습42
  // socket.on('hello', (str) => {
  //   console.log(str);
  //   socket.emit('hello2', 'hello : 안녕하세요!');
  // });
  // socket.on('study', (str) => {
  //   console.log(str);
  //   socket.emit('study2', 'study : 공부합시다!');
  // });
  // socket.on('bye', (str) => {
  //   console.log(str);
  //   socket.emit('bye2', 'bye : 안녕히 가세요!');
  // });

  //
  // socket.on('hello_e', (msg) => {
  //   console.log(msg);
  //   socket.emit('response', 'hello : 안녕하세요!');
  // });

  // 객체 키값따라 변경  = msg를 키값으로 하는 객체
  let data = { hello: '안녕하세요', study: '공부하세요', bye: '안녕히가세요' };
  socket.on('send', (msg) => {
    console.log(msg);
    // 각각의 mag를 보내준다
    socket.emit('response', msg + ':' + data[msg]);
  });
});

http.listen(8000, () => {
  console.log('server port :', 8000);
});
