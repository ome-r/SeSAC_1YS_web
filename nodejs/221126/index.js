const express = require('express');
const multer = require('multer'); //multer 설치 후 불러오기
const path = require('path');
const app = express();
const port = 8000;

app.set("view engine", "ejs");
app.use(express.urlencoded({extended: true}));
app.use(express.json());
// const upload = multer({
//     dest: "uploads/"
// });
app.use("/uploads", express.static("uploads")); //이미지 접근해야하니깐 static 대신 uploads파일에 접근
//app.use(express.static("static")); 사용 시 바로 이미지에 접근 가능하다. 

app.use(express.urlencoded({extended: true})); //x-www-urlencoded 데이터 해석
app.use(express.json()); //클라이언트가 보낸 데이터가 json형태로 받아와질 것이다. json : 딕셔너리 형태와 비슷

//멀터에 대한 세부설정 (경로 및 파일이름)
const upload = multer({ //멀터 정의 여기 (multer라는 애를 사용하겠다는 upload 변수 설정)
    storage: multer.diskStorage({ // storage : 저장할 공간에 대한 정보, diskStorage : 파일을 디스크에 저장하기 위한 모든 제어기능 제공 
        destination(req,file,done){ // destination : 저장할 경로
            done( null, 'uploads/'); // 규칙 : 두번째 인자를 파라미터로 사용  (경로 )
        },
        filename(req,file,done){ // 파일이름에 대한 설정 
            console.log( "filename : ",  req.body ); //여기서 받아 오는 데이터는 ejs에서 name까지. 그 이유는 multer가 데이터를 file전까지만 받아올 수 있기 때문
            const ext = path.extname(file.originalname); // 바나나.jpg // extname ==확장자
            // const filename = req.body.name + ext; // 123123123123.jpg  // 확장자를 이름끝에 붙여서 사용하겠다 
            const filename = req.body.id + ext; // 이렇게 하면 파일이름이 아이디로 저장 
            done( null, filename ); //규칙 : 두번째 인자를 파라미터로 사용  (파일명)
        }
    }),

});
app.get("/file", (req,res) => {
    res.render("file");
});

// 35.실습
app.get("/form", (req,res) => {
    res.render("form");
});
app.post("/upload-form", upload.single("userfile"), (req,res) => {
    // console.log( req.file ); //req.file : 파일업로드 성공 결과 (파일정보)
    // console.log( "body : ", req.body ); //req.body : title 데이터 정보 확인 가능 
    // res.send( req.body.id + req.file.filename);
    res.render("formre", { path: req.file.path } );
});


// 36. 동적 폼 실습
app.get("/form2", (req,res) => {
    res.render("form2");
});
app.post("/form2", upload.single("userfile"), (req,res) => {
    res.send( { path: req.file.path}); //path를 여기서 프론트로 다시 넘길 것이다. 이때 path는 위에서처럼 이미지 경로를 의미한다.
})


//
app.post("/upload-single", upload.single("userfile"), (req,res) => {
    console.log( req.file ); //req.file : 파일업로드 성공 결과 (파일정보)
    console.log( "body : ", req.body ); //req.body : title 데이터 정보 확인 가능 
    res.send( "Upload Complete" );
});
app.post("/upload-array", upload.array("userfile"), (req,res) => {
    console.log( req.files );
    console.log( req.body );
    res.send( "Upload Complete" );
});
app.post("/upload-fields", upload.fields([{name:'userfile1'}, {name:'userfile2'}, {name:'userfile3'}]), (req,res) => {
    console.log( req.files );
    console.log( req.body );
    res.send( "Upload Complete" );
});
function test2(req,res,next) {
    console.log("test2 함수입니다.");
    next(); //미들웨어 규칙, 그 다음에 실행을 할 게 있으면 마지막에 무조건 사용 (근데 미들웨어라 어차피 써야됨)
}
app.get("/", test, test2, (req,res) => {
    console.log( "req.name : ", req.name);
    console.log("Hello");
    res.send("Hello");
});
function test(req, res, next) {
    req.name = "12345";
    console.log( req.query );
    console.log("test 함수입니다.");
    next(); // test 미들웨어 함수가 끝났고, 그 다음을 진행해라.
}
app.listen(port, ()=>{
    console.log( "Server Port : ", port );
});