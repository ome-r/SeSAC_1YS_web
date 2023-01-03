// 새로운 컴포넌트를 만든다. 기능요소, 그림요소를 가지고 있는 컴포넌트를 만들어준다. 
// 함수형 컴포넌트
// function MainHeader() {
//     return (
//         <h1>Hello Component World!</h1>
//     )
// }

// // mainHeader라는 함수를 바깥에서 사용할 수 있도록 빼준다. 
// // pascal case로 변경하기 위해 대문자로 변경
// export default MainHeader; 


// 클래스형 컴퍼넌트 구조 
import React, {Component} from "react" ; 

//여기서 class를 쓰므로, app.js에서는 className을 써야 한다. 컴포넌트는 상속받는다
class MainHeader extends Component {
    render() {
        return (
        <h1>Hello, class world!</h1>)

    }
}

export default MainHeader; 