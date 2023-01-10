import React, { Component } from 'react';
import cat from '../cat2.jpeg';

export default class Test2 extends Component {
  render() {
    const style = { color: 'orange', fontSize: '40px', marginTop: '20px' };
    return (
      <div style={style}>
        <h2>"안녕하세요"</h2>
        <img src={cat} alt="cat" style={{ width: '400px' }}></img>
      </div>
    );
  }
}
