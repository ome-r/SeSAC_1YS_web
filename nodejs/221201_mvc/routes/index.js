var express = require("express"); // express 모듈 불러오기 -- router을 쓸라고 부른것
var controller = require("../controller/Cmain"); //controller안에 있는 Cmain을 리콰이어하겠다. 
const router = express.Router(); // 이 express안에 router를 쓰기 위해 첫줄이 필요

//controller와 연결된 부분 
//http 요청에 맞는 함수 넣어주기. get이나 post 사용
router.get("/", controller.main); //어떤 주소로 접근할 지에 대한 정의를 여기에 저장하겠다 . get과 post 둘 다 가능하다.
router.get("/test", controller.test); //단 각각 다른 함수를 사용해야한다. 

router.post("/postform", controller.post); // 이때 controller.post 같은 함수는 controller의 cmain에서 받아서 사용  

//login 
router.get("/login", controller.loginView); //요청방법이 다르면 /라우터가 같아도 된다. 여기서는 다르게 했다. 
router.post("/form", controller.login);

router.loginPost("/form", controller.login);


module.exports = router; //index.js를 어디선가 불러왔을 때 router를 내보낸다. 
// 즉 모듈로서 다른 데서 사용하고 싶다면 (호출해서 사용) 무조건 exports해줘야 한다. (이렇게 정의한 router를 내보내겠다.)

