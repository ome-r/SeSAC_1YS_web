// index.js

app.post("/login", function(req,res){
    if ( req.body.id == "1" && req.body.pw == "1234" ){
        res.send("<p style='color:blue'>로그인 성공</p>");
    } else {
        res.send("<p style='color:red;'>로그인 실패 ( 아이디 또는 비밀번호가 틀렸습니다.)");
    }
})