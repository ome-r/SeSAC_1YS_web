
// global 내장 겍체
console.log( global );
console.log( global.console); //console은 global에 올라가 있다.
//global.console.log(); 가 원래는 맞는 표현이나, global은 생략 가능

// console.log( global._filename);
// console.log( global.module);
// console.log( global.require);

// console 내장객체
let obj = {
    out: {
        in : {
            key : 'value'
        }
    }
}

console.error('error'); //error만 모아서 확인 가능

console.log( obj );
console.log( obj["out"]);
console.time("시간");
console.timeEnd("시간"); // time과 timeEnd를 사용할 때 이 안에 파라미터가 동일해야 시간 측정이 가능(여기서는 "시간")
console.table([{name:'abc'}],[{name:'efg'}]); // 배열을 가지고 표 형태로 보여주는 것
console.dir(obj, {colors: true, depth:1}); // 객체 구조를 보여줌. 처음에는 obj라는 객체의 구조, 그 다음은 옵션을 사용(color), depth는 단계
console.dir(obj, {colors: true, depth:2}); // 여기서는 2단계까지
console.trace("Error"); //어디서 오류가 났는지 추적
 