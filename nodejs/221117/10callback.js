// function func1(value, call){
//     console.log( value );
//     call();
// }
// //a는 value안에, 익명함수 형태로 call에 들어감
// func1('a', function(){
//     console.log("1");
// })

// func2(function(){
//     console.log("2");
// })

// func1(func2);

//로그인 시도
// console.log( "Start");
// function login(id, cb) {
//     setTimeout(() => {
//         console.log('x');
//         return id;
//     }, 2000);
// }
// // 로그인 성공 시
// const id = login('kim', null);
// console.log( id + "님 환영!");
// console.log( "finish!" );

// 특정함수가 끝났을 때, 사용하기 위해 
// 즉 비동기인 함수들을 순서롤 부여해 사용하기 위해 콜백함수 사용

console.log( "Start");
function login(id, cb) {
    setTimeout(() => {
        console.log('로그인 성공');
        cb(id);
    }, 2000);
}
// 로그인 성공 시
login('kim', function(id){
    console.log( id + "님 환영해요!");
});
console.log( "finish!" );