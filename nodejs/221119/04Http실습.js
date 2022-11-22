const http = require('http');

const fs = require('fs').promises;
const server = http.createServer( function(req,res){ // 클라이언트가 접속했을 때 실행할 함수를 적어준다. 
    fs.readFile('./04cath.html')         
    .then(function(data){
        res.end(data.toString());
    });
    });

 server.listen(8080, function(){  //포트번호, 함수 
     console.log('8080번 포트로 실행'); // 8080을 연다는 의미. 브라우저를 http://localhost:8080/ 를 열고 보면 된다.
    }); 