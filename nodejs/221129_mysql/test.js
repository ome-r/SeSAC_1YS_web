const mysql = require('mysql');
//사용할 객체 설정
const cnn = mysql.createConnection({ //{}는 옵션객체를 사용하기 위해 썼다
    // 이 옵션들은 mysql에 연결되게 되는 것이다. createConnection함수를 통해서 
    host: 'localhost', // 접근할 경로
    // user: 'root', //root는 기본사용자 (우리가 mysql에 접근할때도 이 사용자로 접근)
    user : 'user',
    password: 'marin45',
    database: 'sesac'
});
// sql문을 실행, 하는데 err가 발생하면 어떤 에러가 발생하는지 담아주는 변수와 결과 담는 result 변수 설정
cnn.query('select * from user', (err, result)=> { //err가 있으면 에러메세지, 잘 되면 result 
    // err = undefined; // 에러가 발생하지 않으면 이렇게 undefined가 뜨고 if문으로 들어가지 않는다
    // if (err) console.log(err); // 이거는 다음 줄과 동일하다./
    if (err) throw err;
    //에러 발생하지 않으면 결과를 찍겠다 
    console.log(result); 
});
// 그러나 외부로의 접근이 허락되지 않으므로 이렇게는 작동이 되지 않는다. 
// 그러므로 새로운 계정으로 (root가 아닌) 접근해야 한다.
// mysql에서 user라는 새로운 user를 생성해서 접근한다. 

