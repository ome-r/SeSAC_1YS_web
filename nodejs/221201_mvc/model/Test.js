exports.hello = function(){ //문자열을 리턴하는 hello라는 함수를 만들었다.
    return "Hello!";
}

//앞으로 mysql에서 받아온 값들을 이렇게 return할 것이다 (예시)
exports.user = () => {
    return {id: "1", pw: "1234"}
}

var users = 
`spreatics//1234//스프레틱스/codee//4321/코디`;

exports.user2 = () => {
    return users;
}