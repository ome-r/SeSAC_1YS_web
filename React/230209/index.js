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

  //고유 아이디가 있으므로 socket.emit사용
  socket.emit('info', socket.id); //id 보내주기

  //   io.emit('notice', socket.id + '님이 입장하셨습니다');

  //콜백함수 실행, 인자로 name이 들어온다
  socket.on('username', (name) => {
    list[socket.id] = name; //입장시 추가된 값(list)을 가지고 밑에서 보내주기,
    io.emit('list', list); //list 보내기 사람 알려고
    // 입장메세지를 네임을 사용해서 보내기
    io.emit('notice', name + '님이 입장하셨습니다');
  });

  // 인풋상자값이 {key밸류}이므로 json으로 받기
  socket.on('send', (json) => {
    // json = {msg:~~~~ , to : ~~~ }
    // // 닉네임 추가
    json['from'] = socket.id; //보내주기
    //json = {msg: ~~~ , from:~~~, to : ~~~ }
    json['username'] = list[socket.id];
    //json { msg : ~~~ , from: ~~~ , username:~~~, to : ~~~ , is_dm:~~}
    json['is_dm'] = false; // dm여부 판별
    //특정 사람 구분 코드 추가
    if (json.to === '전체') io.emit('newMSG', json);
    else {
      //dm인지 여부 판별
      json['is_dm'] = true;
      //list에서 닉네임을 찾아서 보내주기
      // 객체의 키값만 가져오기
      const socketID = Object.keys(list).find((key) => list[key] == json.to); //json안에 to랑 list의 키값이 같으면 찾아온다
      //상대한테만 메세지를 보내고 있음
      io.to(socketID).emit('newMSG', json);
      //나한테만 보내기 >> 내 아이디를 찾아서 보내주는 것
      socket.emit('newMSG', json);
    }
    // io.emit('newMSG', json);
  });

  //퇴장시 메세지 (디스커넥트 이벤트)
  socket.on('disconnect', () => {
    //name이 없으므로 list를 이용해서 닉네임 띄우기
    io.emit('notice', list[socket.id] + '님이 퇴장하셨습니다');
    //연결을 끊었을때, list에서 지워주자.
    delete list[socket.id]; //socket.id를 키로 갖는 데이터가 삭제
    //다시 클라이언트에게 이걸 보내준다
    io.emit('list', list);
  });
});

http.listen(8000, () => {
  console.log('Server port : ', 8000);
});
