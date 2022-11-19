// //모듈 불러올 때 require사용
// const result = require('./01module.js');  // require을 변수 module에 넣음

// console.log( result.a ); //변수값을 가져오기 위해 .을 쓴다
// console.log( result.b ); 
// result.test(); //함수를 불러올 때에는 ()괄호를 사용하여 불러온다.

// //모듈끼리도 불러올 수 있다.


const num = require('./01module.js');
//01module.js의 module.exports = {a,b} 를 그대로 받아온 것이므로, num = {a,b}이다.

// module.exports= A
// const B = require('모듈파일')
// A = B
// 만약 A가 10이라는 숫자였으면 B도 10이라는 숫자
// 만약 A가 {a:1, b:1}이라는 배열이면, B도 {a:1,b:2}라는 배열

const a = num.a; //배열로 보냈기 때문에 .key를 통해서 값을 사용할 수 있다.
const b = num.b; //배열안에 있는 값 꺼내오기

function add(){
    return a+b;
}

console.log(add); //이때는 딕셔너리 형태로 함수의 형태 자체가 나오고
console.log(add()); //이때는 함수 실행했으므로 값이 4

module.exports = add ; // 이때는 딕셔너리 형태로 보내지 않았으므로 단일값만 결과로 나오게 된다.
