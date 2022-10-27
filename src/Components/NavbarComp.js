import React, {
  Component,
  Slider,
  Button,
  Container,
  Navbar,
  Nav,
} from "react";
// import { Navbar, Nav, Container } from "react-bootstrap";
import { createArray } from "../Util/ArrayCreator";

export default class NavbarComp extends Component {
  render() {
    return (
      <div>
        <React.ComponentNavbar
          bg="dark"
          variant="dark"
          className="shadow-lg"
          fixed="top"
        >
          <Container>
            <Navbar.Brand href="#home">Navbar</Navbar.Brand>
            <Nav className="me-auto">
              <Nav.Link href="#home">Home</Nav.Link>
              <Nav.Link href="#features">Features</Nav.Link>
              <Nav.Link href="#about">About</Nav.Link>
              <Button onClick={createArray(200)}>Hello</Button>
            </Nav>
          </Container>
        </React.ComponentNavbar>
      </div>
    );
  }
}
