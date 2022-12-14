const mysql = require("mysql"); //mysql을 연결할수 있는 정의부 

//mysql에 관련된 것은 모델에 작성한다. 
const cnn = mysql.createConnection({ //mysql에 접근하는 코드 
    host : 'localhost',
    user: 'user',
    password : 'marin45',
    database: 'sesac'
})

//컨트롤러의 get_visitor와 매치 
exports.get_visitor = (cb) => { //cb라는 콜백함수를 인자로 넘겨받았다 
    var sql = 'SELECT * FROM visitor'; //visitor라는 테이블에서 모든 정보를 조회하겠다 

    cnn.query(sql, (err,rows)=> { //sql문을 실행시킨 결과를 뒤에있는 매개변수 rows에 반환
        if(err) throw err; //에러가 있는 경우 
        
        console.log("visitors : ", rows); //실행된 결과 (에러가 없는 경우 결괏값 rows를 콘솔 찍는다)
        cb(rows); // 콜백함수 받아온 거 여기서 실행한다 
    // == console.log(result);
    // res.render("visitor", { data: result }); 이거를 실행한다 
    })
}

exports.register_vistior = (info, cb) =>{ //req.body와 cb을 각각 인자로 넘겨받아 사용
    //info = req.body ; {name : "", comment : "" }
    var sql = `insert into visitor(name, comment) values('${info.name}', '${info.comment}')` //클라이언트가 보내준 정보 values에 담기, id는 auto_increase이므로 작성하지 않아도 된다
    //('${info.name}') 이 들은 문자열로 나오므로 '' 감싼다. 

    //sql문 실행하는 부분, 콜백함수로 하고싶은 일을 넘겨준다 
    cnn.query(sql, (err,result)=> { //sql을 실행한 결과를 뒤에있는 매개변수 result에 반환 (row라고 써도 되지만 형태 예측이 안되므로 그냥 결과라 씀)
    if(err) throw err; //에러가 있는 경우 
    
    console.log("visitors : ", result); //실행된 결과, 결과값 잘 보여주게 만들어준 것
    cb(result.insertId); //콜백의 인자로 insertID를 넘겨주겠다  
    })
}

exports.delete_visiotr = (id ,cb) => { //id를 매개변수로 받아와야 그 아래에서 삭제할 수 있다. 
    var sql = `delete from visitor where id = ${id}`;

    cnn.query(sql, (err, result)=>{ //sql을 실행한 다음 err랑 result를 받아올 함수 작성 
        if (err) throw err;

        console.log("delete result :", result); //잘 되는 지 콘솔에 찍기 
        cb(); //인자 보낼건 없고 응답만 보냄 
    })
}

// 수정하기 버튼 
exports.get_visitor_by_id_model = (id, cb) => { 
    var sql = `select * from visitor where id = ${id}`; //req객체가 없어 접근하지 못하므로 query.id를 받아서 사용한다 

    cnn.query(sql, (err, rows)=>{ //쿼리 날리기 
        if (err) throw err;

        console.log("select by id : ", rows); //가져온 것들은 배열 즉 rows형태로 들어올 것이다. 
        cb(rows[0]); // 원랜 배열이지만, 하나만 넘겨주게 만든다 (index)
    })
}

// 업데이트 
exports.update_visitor_model = (info ,cb) => {
    // var sql = `update visitor set name = ?? , comment = ??? where id = ?` //이 값들이 info에 있는 것들이다 req.boy로 오는애들
    var sql = `update visitor set name ='${info.name}' , comment ='${info.comment}' where id = '${info.id}'`;
//쿼리 이용해서 실행부
    cnn.query(sql, (err, result)=>{ 
        if (err) throw err;

        console.log("update result : ", result); //결과를 굳이 사용하지 않고 프론트딴에서 처리가 가능하므로 비워둔다
        cb(); //cb안에 매개변수가 없으므로 controller에서도 받지않을것이다. 
    })
}