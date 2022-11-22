//함수 안에 파라미터로 함수 보내기
function func1(callback) {
    console.log("func1");
    console.log(callback);
    callback('이름'); //여기가 콜백함수
}

function func2(name) {
    console.log("func2");
    console.log("name : ", name);
}

func1(func2); // 선언 후 불러온 것
// 비동기로 실행되는 경우 순서를 강제로 정함
console.log("----------------------------");

// 이 둘은 동일, 단 선언 후 바로 불러온 것의 차이
func1(() => {
    console.log("func2");
});
console.log("----------------------------");

// 인자를 필요로 하는 콜백 함수 만들기
func1(function (name) {
    console.log("func2");
    console.log("name : ", name);
});

//promise로 변경
func1().then(function(name){
    console.log("func2");
    console.log("name : ", name);   
})