// 변수
//키워드 변수이름:타입 = 값;
// 타입표시 ( type annotation )
const str: string = 'str';
const num: number = 1;
const bool: boolean = true;

//object
const arr1: number[] = [1, 2, 3];
const arr2: string[] = ['a', 'w', 'e'];
const arr3: Array<number> = [1, 2, 3];
// console.log(arr2[0].concat('!'));

// tuple >> 길이 고정 , 바꿀 수 없는 배열
const arr4: [boolean, string] = [true, 'a'];
// console.log(arr4[0].concat('!'));

// enum 타입 >> 특정 값 열거하는 집합
enum Names {
  sesac,
  새싹,
} //여기있는것 중에서 선택하여
const name1: Names = Names.sesac; // 여기서 사용할 수 있음

// any : 최대한 안 쓰는 게 좋다. js로 구현한 것을 ts로 바꿀때 주로 사용
// 모든 타입에 대해서 허용한다
const any1: any = '1,2,3'; //숫자 문자 배열 다 가능

//void : undefined 와 null만 들어갈 수 있는 타입
// ex. 함수를 만들 때 return 타입을 void로 지정

// never >> 절대 끝에 도달하지 않는 경우에 사용하는 타입
function neverEnd(): never {
  while (true) {}
}

//////////함수//////////////
// (매개변수:type) : <return>
// function 함수이름 (매개변수:type) : 반환타입 {}
function sum1(a: number, b: number): number {
  return a + b;
}
// 선택적으로 받기 ?
function sum2(a: number, b?: number): number {
  if (b == undefined) return a;
  else return a + b; //number + number // number + undefined
}
sum2(1);
sum2(1, 2);

//interface 미리 약속해놓은 규칙, 미리 정의해놓는 약속
interface Student {
  name: string;
  age: number;
  nickname?: string; //필수가 아닌 값
} // student1이 Student에 들어있는 값을 받는다
const student1: Student = {
  name: '이름1',
  age: 10,
};
const student2: Student = {
  name: '이름2',
  age: 20,
  nickname: '닉네임2',
};
function check(stu: Student) {
  console.log(stu.name);
}
check(student1);
check(student2);

///class
// class 클래스이름 {
//   변수명: 타입;
//   constructor(변수: 타입) {
//     this.변수명 = 변수;
//   }
// }

class Person {
  id: string;
  constructor(name: string, age: number) {
    this.id = name + age;
  }
}
const person1 = new Person('이름3', 30);
console.log(person1.id);

interface Shape {
  width: number; //변수
  getLength(): number; //함수인데 number리턴
}
class Sqaure implements Shape {
  constructor(readonly width: number) {}
  getLength(): number {
    return this.width;
  }
}
class Sqaure2 implements Shape {
  width: number;
  //높이 추가
  height: number;
  getLength(): number {
    return this.width;
  }
}
const square = new Sqaure(10);
console.log(square.getLength()); //잘 출력

//퍼블릭과 프라이빗
class Person2 {
  constructor(public name: string, private age: number) {
    this.name = name;
    this.age = age;
  }
}
const person3 = new Person2('a', 1);
console.log(person3.name); //private은 못가져옴 console.log(person3.age);

// 제네릭 (Generic) <T> // 재사용을 위해서 만듦
//여러가지 타입에서 동작하는 것을 만들때 주로사용
function getText<T>(text: T): T {
  return text; //return, 매개변수 타입이 동일하게
}
console.log(getText<string>('a')); //여기서 스트링이라고 지정했음
console.log(getText<number>(1)); // 함수에 숫자가 들어가고 반환도 숫자
//any는 타입지정이 아니고 다 허용인것이므로 제네릭을 써야 타입을 지정하는 의미가 되기 때문
