import React from "react";
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import "./Nav.scss";
import Logo from '../../../src/logo.svg';
import SearchForm from '../SearchForm';

function Mainnav(props) {
  return (
    <Navbar className="navbarStyle">
      <Navbar.Brand className="navheader" href="#home">
        <img
          src={Logo}
          width="55"
          height="55"
          className="d-inline-block align-top"
          alt="Bee The Change Logo"
        />
        <span className="textheader">
          {' Bee The Change '}
        </span>
      </Navbar.Brand>
      <Nav.Link href="/" className={"MainNav"}>|| Home</Nav.Link>
      <Nav.Link href="/settings" className={"MainNav"}>|| Settings</Nav.Link>
      <span className={'navbarSpan'}></span>
      <SearchForm />
    </Navbar>
  );
}

export default Mainnav;
