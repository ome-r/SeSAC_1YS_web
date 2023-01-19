// 초기 상태(값) 설정 _ 배열안에 객체 3개
const initState = {
  list: [
    {
      id: 0,
      text: '리액트 공부하기',
      done: false,
    },
    {
      id: 1,
      text: '척추의 요정이 말합니다! 척추 펴기!',
      done: false,
    },
    {
      id: 2,
      text: '취업 하기',
      done: false,
    },
  ],
};

let counts = initState.list.length;
initState['nextID'] = counts; // initState.nextID라 써도 동일하다
// initState 안에 nextID라는 애가 안보이지만 생성되었다

//액션타입 정의
const CREATE = 'todo/CREATE'; //중복될 경우를 대비해서 앞에 todo 붙임
const DONE = 'todo/DONE';

// 액션 생성 함수 작성 _ 필요할때 바깥에서 부르게 할 수 있게 export
export function create(payload) {
  //리덕스에서 보낼 데이터가 있다
  return {
    type: CREATE,
    payload, //인자 payload안에 어떤 일을 할 건지가 담김
  };
}

//done이라는 가방을 만들어서 일을 전달한다.
export function done(id) {
  //id가 인자로 들어왔다. (payload 대신 명시)
  return {
    type: DONE,
    id, //id값이 없으면 어떤 일인지 구분할 수 없으므로 필수로 추가
  };
}

// reducer 리듀서 _ 가장 중요하고 실제 나가는 코드이므로 export default로 설정
export default function todo(state = initState, action) {
  //if문 대신 switch를 사용했으므로 편한걸 사용하면 된다. but redux는 보통 스위치문을 사용한다.
  switch (action.type) {
    case CREATE:
      //   return console.log('CREATE 호출');
      return {
        ...state, //전개연산자 사용
        list: state.list.concat({
          //list라는 키에 함수가 실행될 리턴이 들어간다. push는 리턴값으로 배열의 길이 즉 숫자를 남기므로
          //숫자를 list에 남겨서 리턴해버린다. 그런데 concat은 추가된 값을 리턴하므로 concat을 push대신 사용
          id: action.payload.id,
          text: action.payload.text, //payload는 값이 여러개일때 사용
          done: false,
        }),
        nextID: action.payload.id + 1, //id값을 +1씩 해서 유니크한 키를 만들자
      };
    case DONE:
      return {
        //객체를 리턴, 리턴한 객체는 state로 들어간다.
        ...state, //건들면 안되는 값은 전개연산자로 다 받아주자
        list: state.list.map((el) => {
          if (el.id === action.id) {
            //외부에서 받은 id 값이 내가 가진 id 값이 같다면
            return {
              ...el, //나머지는 그대로 두고
              done: true, //트루로 해줘
            };
          } else {
            return el; //아니면 el 리턴해줘
          }
        }),
      };
    //   return console.log('DONE 호출');
    //스위치문에는 default를 써야한다.
    default:
      return state;
  }
}
