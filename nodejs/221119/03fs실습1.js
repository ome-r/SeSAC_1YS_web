// write와 copy fs 

// writefile
const fs2 = require("fs").promises;

fs2.writeFile("./sesac.txt",'반갑습니다')
.then(function() { //write는 resolve가 필요없다.
   return fs2.readFile('./sesac.txt'); //다음 then에 던져준다
}) 
.then(function(data) { //write는 resolve가 필요없다.
    console.log( data.toString()); //파일을 다 만들면 콘솔로그를 찍는다. 

});

const src = "sesac.txt"
const dest = "sesac.txt"

//copy file

fs2.copyFile("./sesac.txt", "./sesac2.txt") 
.then(function () {
    return fs2.readFile("./sesac2.txt");
})

//rename

fs2.rename("./sesac2.txt", "new.txt")
.then(function () {
    return fs2.readFile("./new.txt");
})
