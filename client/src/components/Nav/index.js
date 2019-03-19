import React from "react";
import "./Nav.scss";
import Navbar from 'react-bootstrap/Navbar';
import Logo from '../../../src/logo.svg';
import Form from 'react-bootstrap/Form';
import FormControl from 'react-bootstrap/FormControl';
import Button from 'react-bootstrap/Button';
import Nav from 'react-bootstrap/Nav';

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
      <span className='textheader'>
      {' Bee The Change '}
      </span>
      </Navbar.Brand>
      
      <Nav.Link href="#home" className={"MainNav"}>|| Home</Nav.Link>
      <Nav.Link href="#features" className={"MainNav"}>|| Inbox</Nav.Link>
      <Nav.Link href="#pricing" className={"MainNav"}>|| Settings</Nav.Link>
      <span className={'navbarSpan'}></span>
    <Form inline>
      <FormControl type="text" placeholder="Find A Hive To Sponsor" className="mr-sm-2" />
      <Button variant="outline-info" className={"MainNavButt"}>Search</Button>
    </Form>
 
  
  </Navbar>
    );
}

export default Mainnav;

