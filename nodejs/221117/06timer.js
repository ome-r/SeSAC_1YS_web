setTimeout(function() {
    console.log("1.5초 후 실행");
}, 1500); //1500은 1.5초를 의미

// function a() {console.log("1.5초 후 실행");}
// setTimeout()은 한 번만 사용하여 이름이 필요없으므로 익명함수 사용

const func2 = setInterval( () => {
    console.log("1초마다 반복");
}, 1000);

const func3 = setTimeout( () => {
    console.log("func3 실행");
}, 3000);

setTimeout(() => {
    clearTimeout(func3);
    clearInterval(func2);
}, 2500);

const func4 = setImmediate(() => {
    console.log("func4 즉시 실행");
})

//func5는 실행되자마자 취소
const func5 = setImmediate(() => {
    console.log("func5 즉시 실행");
})
clearImmediate(func5);  //즉시 실행 취소

//코드를 전체적으로 읽고 실행