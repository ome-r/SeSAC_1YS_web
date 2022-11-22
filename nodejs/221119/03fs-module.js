// FS 모듈 : 파일처리에 관련된 모듈 

//콜백함수로 불러오기
const fs = require("fs");
fs.readFile("./test.txt", function(err, data) { // 파일과 함수라는 두개 인자를 넣고, 그 함수 안에는 ERR와 DATA라는 두 가지 인자 사용된다(약속)
    if ( err ) throw err ; //내가 err를 던져서 코드를 멈추겠다.. 근데 이러면 노드js가 죽어서 이 방법은 사용하지는 xx throw는 그 즉시 시스템 중단

    console.log( "data : " , data);
    console.log( "data2 : ", data.toString()); //string으로 변환
});

// 파일처리 fs는 대표적인 비동기처리 이므로 위처럼 콜백이나 아래처럼 프로미스를 사용해서 불러온다. 

//프로미스로 불러오기 
const fs2 = require("fs").promises; // 프로미스의 함수들 사용하기 위해 require
fs2.readFile("./test.txt") //프로미스에서는 인자 하나만 사용한다. 
    .then((data) => {
        console.log("promise - data : ", data);
    }); 


    // 
    fs2.writeFile("./write.txt",'sesac')
    .then(function() { //write는 resolve가 필요없다.
       return fs2.readFile('./write.txt'); //다음 then에 던져준다
    });

console.log("------------------------")

    fs2.writeFile("./write.txt",'sesac')
    .then(function() { //write는 resolve가 필요없다.
       return fs2.readFile('./write.txt'); //다음 then에 던져준다
    }) 
    .then(function(data) { //write는 resolve가 필요없다.
        console.log( data.toString()); //파일을 다 만들면 콘솔로그를 찍는다. 
 
    });

    //콜백으로 써보기 
    // but 요즘은 거의 프로미스를 사용한다. 

    fs.writeFile('./write2.txt', 'codingon', function(err){ //writeFile은 에러처리만 하면 된다.
        if ( err ) throw err;
        console.log("writefile success!!");
        fs.readFile("./write2.txt", function(err, data){
        if ( err ) throw err;
        console.log('./write2.txt : data' , data.toString());
    })
});