//비동기함수 setTimeout사용
function login(id, cb) {
    setTimeout(function() {
        console.log("사용자 입장");
        cb(id);
    }, 3000); // 로그인 하는 시간 예시로 3초 설정
}
function getVideo(id,cb) {
    setTimeout(function() {
        console.log( id + "의 비디오 리스트");
        cb(['아바타','라라랜드']);
    }, 2000);
}
function getDetail(video,cb) {
    setTimeout(function() {
        cb("비디오 제목 :" + video);
    }, 1000);
}

// 비디오 가져오기
// login('kim', '1234', function(user) {
//    getVideo(user, function(Videos){
//     console.log("video : " + Videos)
//    });
// });

login('kim', function(user){
    getVideo(user, function(videos){
        getDetail(videos[0], function(msg){
            console.log( msg );
        });
    });
});

//let user = login(id, pw);
// let videos = getVideo(user);
// let msg = getDetail(videos[0]);
// console.log(msg);

// 4번째
cb = function(user){
    getVideo(user, );
}
//10번째
cb = function(videos){
    getDetail(videos[0], );
}
// 15번째
cb = function(msg){
    console.log( msg );
}