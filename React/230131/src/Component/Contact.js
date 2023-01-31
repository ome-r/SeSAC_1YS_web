import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';

export default function Contact() {
  // state에 접근을 위해 훅 사용 (useSelector) 존재하는 state 가져와서 list에 넣겠다는 의미
  const list = useSelector((state) => state);
  const dispatch = useDispatch();
  function writeList() {
    var action = {
      // 할일 담기, 타입과 담길 값
      type: 'ADD',
      payload: {
        writer: '1',
        title: 'a',
      },
    };
    dispatch(action); //담은 개체를 dispatch에 전달한다.
    //     let form = document.getElementById('form_write');
    //     let newList = {
    //       writer: form.writer.value,
    //       title: form.title.value,
    //     };

    //     setList([...list, newList]);
  }
  return (
    <div>
      <form id="form_write" style={{ marginBottom: '15px' }}>
        <input type="text" name="writer" placeholder="작성자" />
        <input type="text" name="title" placeholder="제목" />
        <button type="button" onClick={writeList}>
          작성
        </button>
      </form>

      <table border={1}>
        <thead>
          <tr>
            <th>번호</th>
            <th>제목</th>
            <th>작성자</th>
          </tr>
        </thead>
        <tbody>
          {list.map((value, i) => {
            // value = { writer: ~~ , title~~ };
            return (
              <tr>
                <td>{i + 1}</td>
                <td>{value.title}</td>
                <td>{value.writer}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}
