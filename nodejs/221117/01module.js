// const a = 'a변수';
// const b = 'b변수'; 
// //만든 변수를 모듈로 사용하려면? 내보내는 exports를 사용한다.

// //여기서는 함수를 만들어서 모듈로
// function test() {
//     console.log('test');
// }

// //모듈로서 a,b를 내보내겠다 == 밖에서 사용할 수 있도록 세팅
// module.exports = {
//     a,
//     b,
//     test
// }

const a = 1;
const b = 3;

//n개를 보낼때는 묶어서 배열로 감싸서 {}딕셔너리 형태로 보낸다, 즉 키와값 형태
module.exports = {
    a,
    b
}