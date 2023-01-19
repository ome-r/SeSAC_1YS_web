import React, { useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';
//내가 만들어둔 action 불러오기
import { create, done } from '../Store/modules/todo';

export default function TodoList() {
  //store안에 todo.js에서 값받아오는 hook 사용, 데이터는 콜백형태로 state를 받아온다. 각각 state를 다 합쳐놓은 상태(컴바인을 사용했으므로)
  //따라서 컴바인리듀서로 합쳐진 값 중에서, state안에 todo안에 list 까지 접근
  const list = useSelector((state) => state.todo.list).filter(
    (el) => el.done === false
  ); //필터 걸어서 체이닝, el에 done이 false인애만 남겨
  //인풋요소에서 값을 받아줄 useRef 선언
  const inputRef = useRef();
  //nextID값 전달
  const nextID = useSelector((state) => state.todo.nextID);
  //우편배달부 고용
  const dispatch = useDispatch();

  return (
    <section>
      <h1>할 일 목록</h1>
      <div>
        <input type="text" ref={inputRef} />
        <button
          onClick={() => {
            //id, text 받아서 전달
            dispatch(create({ id: nextID, text: inputRef.current.value }));
            inputRef.current.value = ''; //인풋태그 초기화
          }}
        >
          추가👆
        </button>
      </div>
      {/* 리스트 - 리덕스로부터 받아온 배열을 출력 */}
      <ul>
        {list.map((el) => {
          return (
            // key값인 id는 리스트에서 일정한 값 0, 1, 2 로 되어있으므로 가능
            <li key={el.id}>
              {el.text}{' '}
              <button
                onClick={() => {
                  dispatch(done(el.id));
                }}
              >
                완료
              </button>
            </li>
          );
        })}
      </ul>
    </section>
  );
}
