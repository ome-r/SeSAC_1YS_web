// new Promise( function (resolve, reject){ //변수명은 바뀌어도 된다.
    // resolve : 함수 형태, 성공했을 때 실행할 친구
   // reject : 함수 형태, 실패 or 에러 처리 때 실행할 친구
// });

function func3(flag){
    return new Promise(function(resolve, reject) {//프로미스라는 객체를 만드는데 콘스트럭터로 함수를 만들어서.... 
        if (flag) {
            resolve("flag는 true");
        } else {
            reject("flag는 false");
        }
    });
}

//then과 catch를 이용한 reject 처리
func3(false).then(
    function(msg){ //resolve시켰다면 나올값
        console.log("msg1 : ", msg); //then이 받는 인자 두 가지는 1 리졸브 된 거 2 리젝트 된것이다.
    }
    
// 단 만약에 then이 있다면 then에서 다 처리하므로 catch까지 내려오지 않는다. (then catch 둘다 있는 경우)

    ).catch( //reject 처리
        function(msg){
            console.log("msg2 : ", msg);
        }
     )

// func3(false).then(
//     function(msg){ //resolve시켰다면 나올값
//         console.log("msg1 : ", msg); //then이 받는 인자 두 가지는 1 리졸브 된 거 2 리젝트 된것이다.
//     },
//     function(msg){ //reject시킨다면 나올 결과
//         console.log( "msg2 : ", msg) ; 
//     }
// )