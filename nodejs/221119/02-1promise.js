// 프로미스 기본형태
// new Promise( function (resolve, reject){

// });

function func1() {
    return new Promise(function (resolve, reject){
        resolve("성공");
    });
}

// var a = func1();
// console.log(a);
func1().then(function(result){  // then은 두개의 인자를 받는다. 1) 앞의 promise에서 resolve 즉 성공된 것을 하나 받아온다 = promise를 없애고 안의 값만 받아온다 
    console.log("result : ", result);
})

function func2() {
    return new Promise(function (resolve, reject){
        setTimeout(function() {resolve("성공");},1000)
        
    });
}

// var b = func2();
// console.log(b);

func2().then(function(result){  //resolve가 된 후에 실행이 되므로, 1초 뒤 값이 나오게 된다. 즉 비동기를 '동기'처럼 사용가능 / pending상태에서 resolve된 fulfieed상태에서 값을 받아온다
    console.log("result2 : ", result);
    return 'a';
}). then(function(abc){ // then 안에서 return하면 다음 then이 받게 된다. == 체이닝, 같은 라인에서 연결
    console.log("abc : ", abc); 
});
