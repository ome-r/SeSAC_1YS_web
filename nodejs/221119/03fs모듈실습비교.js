//파일복사
const fs2 = require("fs").promises;
fs2.copyFile('sesac.txt', 'seasc2.txt')

 //이름바꾸기
const fs = require("fs");
fs.rename('sesac3.txt', 'new.txt', function(err){
    if( err ) throw err;
    console.log('File Renamed!');
});

const fs1 = require('fs').promises;

    fs1.writeFile("./fc2.txt", '테스트 중')
    .then(()=> {
        return fs1.readFile("./fc2.txt");
    })
    fs1.copyFile("./fc2.txt", "2fc2.txt")
    .then((data) => {
        return console.log( data.toString());
    })
    fs1.rename("./2fc2.txt", "pre.txt")
    .then(()=> {
        return ;
    })
    

