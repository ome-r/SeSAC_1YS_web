import React from 'react';
import { Navbar } from 'react-bootstrap';
import '../css/Header.css';

// const Navbar = styled.div``

export default function Header() {
  return (
    //     <Navbar bg="Primary" variant="dark" className="header-container">
    //       <Navbar.Brand className="header-title-container">
    //         <h2>채팅방</h2>
    //       </Navbar.Brand>
    //     </Navbar>
    //   );
    <Navbar bg="success" variant="dark" className="header-container">
      <Navbar.Brand className="header-title-container">
        <h3>채팅앱</h3>
      </Navbar.Brand>
    </Navbar>
  );
}
