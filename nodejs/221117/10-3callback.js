function call1(name) {
    setImmediate(function() {
        console.log("사용자는 " + name);
    }, 0000);  
}

function call() {
    setTimeout(function() {
        console.log("시작은 call");
        back();
    }, 2000);
}
function back() {
    setTimeout(function() {
        console.log("두번째는 back" );
        hell();
    }, 1000);
}
function hell() {
    setTimeout(function() {
        console.log("세번째는 hell" );
    }, 0500);
}

let a1 = call1('kim');
let a = call('kim');
 