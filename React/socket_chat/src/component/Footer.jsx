import React from 'react';
import { Form, Button } from 'react-bootstrap';
import sendImage from '../icon/send.png';
import '../css/Footer.css';

export default function Footer() {
  return (
    <>
      <footer>
        <Form.Control placeholder="" className="input-form" />
        <Button variant="success" type="submit" className="input-button">
          <img alt="send" className="send-icon" src={sendImage} />
        </Button>
      </footer>
    </>
  );
}
