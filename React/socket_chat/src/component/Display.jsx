import React from 'react';
import styled from 'styled-components';
import { Navbar } from 'react-bootstrap';
import '../css/Header.css';
import { Form, Button } from 'react-bootstrap';
import sendImage from '../icon/send.png';
import '../css/Footer.css';
const MyDiv = styled.div`
  background-color: transparent;
`;
export default function Display() {
  return (
    <>
      <Navbar bg="success" variant="dark" className="header-container">
        <Navbar.Brand className="header-title-container">
          <h3>채팅앱</h3>
        </Navbar.Brand>
      </Navbar>

      <footer>
        <Form.Control placeholder="" className="input-form" />
        <Button variant="success" type="submit" className="input-button">
          <img alt="send" className="send-icon" src={sendImage} />
        </Button>
      </footer>
    </>
  );
}
