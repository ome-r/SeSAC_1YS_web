import React from 'react';
import Button from './Button';
const showAlert = () => {
  alert('alert');
};
function App() {
  return (
    <div>
      <Button onClick={showAlert}>버튼</Button>
    </div>
  );
}
export default App;
