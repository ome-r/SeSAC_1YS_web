const express = require('express');
const app = express();
const port = 8000;
const mysql = require('mysql');
const cnn = mysql.createConnection({ //{}는 옵션객체를 사용하기 위해 썼다
    host: 'localhost', // 접근할 경로
    // user: 'root', //root는 기본사용자 (우리가 mysql에 접근할때도 이 사용자로 접근)
    user : 'user',
    password: 'marin45',
    database: 'sesac'
});

app.set('view engine', 'ejs');

// 아까 test.js의 것들을 가져왔다. 
app.get('/', (req,res)=>{
    cnn.query('select * from user', (err, result)=> { //err가 있으면 에러메세지, 잘 되면 result 
        if (err) throw err;
        console.log(result); 
        res.render("index", { rows : result}); // {} = 백엔드에서 만든 변수 보내기 
    });

});

app.listen(port, ()=>{
    console.log("open : ", port);
})