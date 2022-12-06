const express = require("express");
const app = express();
const port = 8000;

app.set("view engine", "ejs");
app.use( "/static", express.static( "static" ) );
app.use(express.urlencoded({extended: true}));
app.use( express.json() );

const router = require("./routes");
app.use('/visitor', router);

//새로운 라우터를 쓰기 위해 새롭게 추가! 
const userRouter = require("./routes/users");
app.use('/user', userRouter);

app.get('*', (req,res) =>{
    res.send("접근할 수 없는 주소입니다.");
});

app.listen(port, ()=>{
    console.log( "Server Port : ", port );
});

