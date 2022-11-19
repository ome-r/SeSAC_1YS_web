const result = require('./02module.js');

console.log( result ); // 지금은 값만 나오는데,
//{ function : add } 이 형태로 넘어왔을 때는 
// console.log(add.add()); 이렇게 사용한다. 

console.log( result() );
// js에서 {a} 이렇게 보내면 {a:a}라는 키와 값으로 자동으로 인식
// 이는
// let a=1 ; 
// {a:a}
// 이것과 동일하다 