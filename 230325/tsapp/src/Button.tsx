import { useState } from 'react';

interface ButtonProps {
  onclick(): void;
  children: string;
}
interface User {
  name: string;
  age: number;
}

const Button = (props: ButtonProps) => {
  const [name, setName] = useState('');
  const [list, setList] = useState<Array<User>>([]); //훅 쓸때는 제네릭

  const a: string = 'a';
  return <button onClick={props.onClick}>{props.children}</button>;
};

export default Button;
