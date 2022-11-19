// os 모듈 
const os = require("os"); 
console.log("os:freemem", os.freemem()); // 사용가능한 RAM 출력
console.log("os:totalmem", os.totalmem()); // 전체 메모리 용량 출력
console.log("os:homedir", os.homedir()); // 홈 디렉토리 경로 출력


//path 모듈
const path = require("path"); 
const file = __filename; //__filename을 변수에 넣었음
console.log('path.sep:', path.sep); // 현 운영체제 경로 구분자 출력
console.log("path.extname :", path.extname(file)); // 현재 파일의 확장자 출력
console.log("path.parse :", path.parse(file));  //현재 파일의 경로 분리해서 출력

