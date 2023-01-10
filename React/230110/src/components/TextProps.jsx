import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class TextProps extends Component {
  render() {
    const { text, valid } = this.props;
    return (
      <div>
        <h1>App 컴포넌트에서 넘겨준 {text}입니다.</h1>
        <button onClick={valid}>콘솔 메세지</button>
      </div>
    );
  }
}

TextProps.defaultProps = {
  text: '이건 기본 text props 입니다.',
};

TextProps.propTypes = {
  text: PropTypes.string.isRequired,
};
