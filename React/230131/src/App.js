import { useState } from 'react';
import Contact from './Component/Contact';
import { createStore } from 'redux';
import { Provider } from 'react-redux';

export default function App() {
  function reducer(state = [], action) {
    if (action.type === 'ADD') {
      return [...state, action.payload];
    }
    return state;
  }
  const store = createStore(reducer);
  const [list, setList] = useState([]);

  return (
    <>
      <Provider store={store}>
        현재 개수 : {list.length} <br />
        <Contact />
      </Provider>
    </>
  );
}
