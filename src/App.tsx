import React from "react";
import {Container, Navbar} from "react-bootstrap"
import Certificates from "./components/Certificates"

function App() {
  return (
    <React.Fragment>
      <Navbar bg="primary" expand={true} variant="dark" >
        <Navbar.Brand href="#home" style={{fontSize:"3em"}}>Tanmay's Certificates</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
      
        </Navbar.Collapse>
      </Navbar>
      <Container fluid style={{backgroundColor:"white"}}>
        <Certificates />
    </Container>
  </React.Fragment>
  );
}

export default App;
