const Visitor = require("../model/Visitor"); //modle의 visitor라는 js 연결, Visitor라는 객체를 만들어 사용한다.

//함수 vistior 와 register를 만듦

//라우터에 접속 후 하고싶은 일을 함수형태로 걸기 
exports.visitor = (req,res) => { //가장 기본 라우터에 대한 함수 정의, visitor에 들어오면 이 일을 하겠다. 
    Visitor.get_visitor(function(result){ //이 함수를 model에 넘겨준다 cb (콜백함수)를 인자로 넘겨준것
        console.log(result);
        res.render("visitor", { data: result }); // 할일이 다끝나면 응답을 한다 visitor라는 ejs를 렌더. function에 있는 매개변수 result를 data로 
    });//data라는 이름으로 result를 보낸다 이 값은 다시 모델에 가서 확인하면 rows임을 알 수 있다. 최종적으로 vistior에서 렌데할때 result를 받아서 렌더
}

exports.register = (req, res) => { // req.body는 사용자가 보내주는 값을 통째로 넘기기 위해 사용한다 
    Visitor.register_vistior( req.body, function(id){ //이 함수를 model에 넘겨준다 cb (콜백함수)를 인자로 넘겨준것
            console.log(id);    
            res.send(String(id)); // 할일이 다끝나면 응답을 한다, 이때 result는 쿼리를 날려서 나온 결과값이다. 이때 id 하나만 넘겨준다(model에서 그렇게 정의했으므로)
        }); //숫자를 보내기 때문에 string을 넣는다 send에는 숫자만 들어갈 수 없기 대문 
    //insert 데이터 : req.body안의 것들을 받아와야 한다 
    // 
}



exports.delete = (req,res)=>{
 //1. mysql에서 req.body.id에 해당하는 데이터를 delete를 할 것이다.(모델에서 할 것) 2. delete한 것을 서버에 응답 즉 res.send해야한다. 
    Visitor.delete_visiotr(req.body.id, function(){
        res.send(true); //삭제만 잘 되면 응답만 보내면 되므로 true만 보낸다. 클라이언트가 끝난걸 알게 만들기 위해, res.send는 반드시 있어야한다. 안에 res.send("성공");이렇게 해도 된다
    })
}

exports.get_visitor_by_id = (req,res) => {
    //req.query.id에 해당하는 데이터 조회 (view의 ejs에서 보낸 params를 말한다. )
    // 서버 응답 > 조회한 데이터 
    Visitor.get_visitor_by_id_model(req.query.id, function(rows){ //get_visitor_by_id_model 이라는 함수 실행 
        res.send(rows); //응답으로 객체가 넘어갈 예정 
    });
}

exports.update_visitor = (req, res) => {
    //req.body로 받아온 데이터를 mysql에 업데이트 할 수 있도록 만든다  -> 모델에서 만들기 
    //서버에 응답을 보낼 예정 --> 컨트롤러에서 만들기 
    Visitor.update_visitor_model(req.body, function(){ // 모델에 있는 함수 실행 / req.body를 매개변수로 info라는 변수에 담긴다
        res.send(true); // 클라이언트가 true를 받을 것이다. 
    });
}