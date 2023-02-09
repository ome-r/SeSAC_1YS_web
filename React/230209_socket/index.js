const express = require('express');
const app = express();
const http = require('http').Server(app);
const io = require('socket.io')(http);

app.get('/', (req, res) => {
  res.sendFile(__dirname + '/index.html');
});

// {소켓 아이디 : 닉네임, 소켓 아이디 : 닉네임 ...} 키밸류 형태로 저장
let list = {};

io.on('connection', (socket) => {
  console.log('서버연결');

  // io.emit('notice'.socket.id + '님이 입장하셨습니다');

  //콜백함수 실행, 인자로 name이 들어온다
  socket.on('username', (name) => {
    list[socket.id] = name;
    // 입장메세지를 네임을 사용해서 보내기
    io.emit('notice', name + '님이 입장하셨습니다');
  });
});

http.listen(8000, () => {
  console.log('server port :', 8000);
});
