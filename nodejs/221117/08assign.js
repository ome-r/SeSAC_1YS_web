//배열 구조 분해 
let list = ['apple', 'banana'];
[item1, item2] = list;
// let item1 = list[0];
// let item2 = list[1];
console.log( item1 );
console.log( item2 );

[item1, item2 = 'peach', item3 = 'orange'] = list;
console.log( item1 );
console.log( item2 ); // 없으면 peach로 대체하므로, 이미 있는 banana가 출력
console.log( item3 ); // 값이 없으면 대체되므로 orange로 출력

let x = 1;
let y = 3;

let temp = x;
x = y;
y = temp;
//바로 값이 바뀌게 하려면? 임시변수 사용 
//배열 구조변화를 통해서 y,x에 값을 바꿔 넣어준 것
//이때 배열은 순서가 중요하다 
[y,x] = [x,y]


//객체 구조분해

let obj = {
    a : 'one',
    b : 'two',
    e : '1',
    f : '2'
};
// let a = obj.a;
// let { a, b } = obj ; //a와 b에는 각각 one , two가 들어감
//이때 a와 b라는 key로 찾으므로, 배열과 달리 순서 상관없이 찾을 수 있다. 
// console.log( a );
// console.log( b );

// 값 변화
let { b: key1, a, c = 'three'} = obj; //변수의 이름을 변경하고 싶을 때는 : 콜론 사용
console.log( a );
console.log( key1);
console.log( c );

//전개 연산자
// ...'변수명' 사용시 앞에서 추출한 걸 제외한, 나머지를 가져온다
let { b, ...rest} = obj; // ...이 전개 연산자로, 배열이나 객체를 전개해서 가져옴. 
console.log( b );
console.log( rest ); //b만 빼고 나머지를 가져옴


