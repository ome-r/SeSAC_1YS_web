// @ts-check

// // a,b를 제외한 나머지 변수들은 객체로
// function foo(a, b, ...rest) {
//   rest = { c: 'dd', d: 'dd' };
// }

const obj = {
  proro: '뽀로로',
  lupy: '루피',
  crong: '크롱',
};

// console.log({ ...obj });

// 루피만 영어로 변경
const copyObj = { ...obj, lupy: 'lupy' };

console.log(obj);
console.log(copyObj);
console.log(obj === copyObj);

// const arr = [1, 2, 3, 4, 5];
// console.log(arr);
// // console.log(...arr);

// //값만 카피하고 싶을 때
// const copyArr = [...arr];
// console.log(copyArr);

// //메모리 주소가 다르므로 false
// console.log(arr === copyArr);

// 값이 아닌 메모리 주소가 카피된다.
// const copyArr = arr;
// console.log(copyArr);

// console.log(arr === copyArr); //같은 메모리주소를 가져왔으므로 true
