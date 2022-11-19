const url = require("url");
// console.log( url);
// console.log( url.URL);


console.log( url.parse);
//하나하나 나눠서 보기 (객체로 나눠진다)
var obj = url.parse('https://sesac.seoul.kr/common/greeting.do');
console.log(obj);
//다시 string(문자열)으로 변경하기
console.log( url.format(obj));
// 객체로 나눈 뒤 보고싶은 것은 .key로 보기
console.log(obj.protocol);

// var string = new url.URL("https://sesac.seoul.kr/common/greeting.do");
var string = new url.URL("http://localhost?name=sesac&name=코딩온&age10");  //객체 만들때는 new url.URL 이렇게 사용. new를 사용해서 url 객체 만듦
console.log(string.searchParams); //? 뒤의 부분을 가져온다, 이때 특정한 함수를 통해서 컨트롤 한다. 

// searchParams 이용시 컨트롤하는 함수 예시
console.log(string.searchParams.getAll('name')); // name 전부 가져온다
console.log(string.searchParams.keys()); // = 앞의 값을 key라고 하며, 이들을 가져온다. 여기서는 name, name, age

string.searchParams.append('age','20'); //추가하는 append 함수 사용
console.log(string.searchParams.getAll('age'));
console.log(string.searchParams.has('age')); //이 문자로 시작하는 key가 있는지 확인하는 has 함수 


