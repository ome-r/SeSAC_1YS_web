
const http = require('http');
// const server = http.createServer(); //이걸 이용해서 서버를 연다
// const server = http.createServer( function(req,res){ // 클라이언트가 접속했을 때 실행할 함수를 적어준다. 
//     res.write("<h1>hello!<h1>");                       //req는 클라이언트 요청, res는 서버가 클라이언트에게 주는 응답을 의미
//     res.end("<hr>"); //end라는 함수를 통해서 내 응답이 여기까지인걸 명시해야 무한동력을 멈춘다. write게수는 상관 x
// });
// //만약 수정사항이 생긴다면, 반영하기 위헤서는 포트를 닫고 다시 시작하면 된다. 

//프로미스와 html 사용하기
const fs = require('fs').promises;
const server = http.createServer( function(req,res){ // 클라이언트가 접속했을 때 실행할 함수를 적어준다. 
    fs.readFile('./04test.html')         
    .then(function(data){
        res.end(data.toString());
    });
    });

// server.on() //on이라는 함수는 이벤트를 등록하는 함수
// server.listen() // 서버를 실행하고 클라이언트를 기다리는 함수

server.listen(8080, function(){  //포트번호, 함수 
    console.log('8080번 포트로 실행'); // 8080을 연다는 의미. 브라우저를 http://localhost:8080/ 를 열고 보면 된다.
}); 