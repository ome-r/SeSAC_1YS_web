// 클래스 공부
class Car {
    constructor(color) {   
        this.color = color; //color를 파라미터로 받고 있다
        this.isDoor = true;
    }
    //메소드 3개 move, stop, returncolor
    move(){
        console.log('움직인다.');
    }
    stop() {
        console.log('멈춘다.');
    }
    returnColor(){
        return this.color;
    }
}
module.exports = { Car };