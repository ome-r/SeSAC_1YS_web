// 원래 코드를 promise로 변경

function login(id) {
    return new Promise( function (resolve, reject) { //promise로 변경
        setTimeout(function(){
            console.log("사용자 입장");
            resolve(id); //resolve로 변경
        }, 3000);
    });
}

function getVideo(id) {
    return new Promise(function (resolve, reject){
        setTimeout(function(){
            console.log( id + "의 비디오 리스트");
            resolve( ['아바타', '라라랜드']);
        }, 2000);
    });
}


function getDetail(video) {
    return new Promise(function(resolve, reject) {
        setTimeout(function() {
        resolve ("비디오 제목 : " + video);
    }, 1000);
    });
}

login('kim')
    .then(function(user){ //리졸브 id를 user로 받아온다 
        console.log("user : ", user);
        return getVideo(user); // getvdideo함수를 실행하는데, 2초 타임아웃이므로 펜딩상태의 promise를 다음 then이 받는다
    })  //    getVideo().then()과 같다.
    .then(function(videos){ // 파라미터 videos에 아바타, 라라랜드가 들어온다.
            console.log("videos : ", videos);
            return getDetail(videos[0]); // 이것도 시간초가 있어 팬딩이 되므로, 기다리려면 return 시키고 그 다음 then으로 받게한다.
    })
    .then(function(msg){ 
        console.log("msg : ", msg);
    });

    // 비동기 코드지만, .then을 이용해 동기처리하도록 만듦

    
    login('kim')
        .then(getVideo) //이 함수가 바로 실행되게 한 것으로 위의 코드와 같다.



// login('kim')
//     .then( function(user){
//     });
// getVideo(id)
//     .then (functtion (videos){
//     });
// getDetail(videos[0])
//     .then (function (msg){
//     });

        // getVideo(user, function(videos){
        //     getDetail(videos[0], function(msg){
        //         console.log( msg );
        //     });
        // });





// login('kim', function(user){
//     getVideo(user, function(videos){
//         getDetail(videos[0], function(msg){
//             console.log( msg );
//         });
//     });
// });