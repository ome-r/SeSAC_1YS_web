//객체형태로 가져오기
// const Car = require("./09-1class.js");
// console.log( Car); //객체형태로 car라는 걸 출력해준다.

//구조분해로 가져오기
const { Car } = require("./09-1class.js");
console.log(Car);

// 클래스를 이용해서 자동차 찍어내기
// 기본구조는 다음과 같다. 
// constructor(color) {   
//     this.color = color; //color를 파라미터로 받고 있다, 따라서 컬러를 인자로 입력해야한다.
//     this.isDoor = true;
// }
var car1 = new Car("red");  
console.log( car1.returnColor()); // 클래스의 함수 reutrncolor실행 후 출력

var car2 = new Car("blue");
console.log( car2.returnColor());

var car3 = new Car("yellow");
console.log( car3.returnColor());
