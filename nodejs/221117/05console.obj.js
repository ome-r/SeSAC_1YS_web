//절대경로 찾을 때 파일이름, 디렉토리 이름 찾기
console.log("__filename :" + __filename);
console.log("__dirname :" + __dirname);
console.log("--------------------------------")
// process 객체 = 현재 실행 중인 노드 프로세스 정보

console.log("process.version :", process.version);
console.log("process.arch :", process.arch);
console.log("process.platform :", process.platform);
console.log("process.cpuUsage :", process.cpuUsage());
console.log("--------------------------------")

// os 모듈 - 운영체제 
// '내장모듈'이므로 global과 달리 os 친구를 불러와서 사용한다.
// 설치나 내장  모듈은 이름을 적으면 찾아간다
const os = require("os"); // require로 os 모듈을 불러온다
console.log("os:type", os.type()); // 내 운영체제 타임
console.log("os:cous", os.cpus());  //컴퓨터 코어 정보
console.log("os:homedir", os.homedir()); // 이 컴퓨터의 디렉토리 경로
console.log("os:freemem", os.freemem()); // 사용기능한 메모리 정보
console.log("--------------------------------")

// Path 모듈 (내장모듈)

const path = require("path");
const file = __filename;
console.log("path.extname :", path.extname(file)); //확장자를 가져올때 .까지 같이 가져옴 (확장자만 가져옴)
console.log("path.parse :", path.parse(file)); // path안에는 파일명, 경로명 구분이 가능한데 parse라는 함수는 구분해서 '모두다' 가져와 줌

