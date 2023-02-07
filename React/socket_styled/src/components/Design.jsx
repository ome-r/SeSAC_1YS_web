import React from 'react';
import styled from 'styled-components';
import sendImage from '../icon/send.png';

const MyDiv = styled.div`
  background-color: white;
`;

const Header = styled.div`
  background-color: green;
  position: absolute;
  width: 100%;
  color: white;
  top: 0rem;
`;

const Footer = styled.div`
  background-color: white;
  position: absolute;
  bottom: 0rem;
`;

const Button = styled.button`
  background-color: green;
  position: relative;
  left: 68rem;
`;

export default function Design() {
  return (
    <>
      <MyDiv>
        <Header>
          <h3>Marin's Chatting</h3>
        </Header>
        <Footer>
          <Button>
            <img src={sendImage} alt="send"></img>
          </Button>
        </Footer>
      </MyDiv>
    </>
  );
}
