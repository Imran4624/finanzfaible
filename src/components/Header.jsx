import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Logo from "../assets/images/logo.svg";
import LanguageIcon from "../assets/images/language-icon.svg";

import React from "react";
import { Dropdown } from "react-bootstrap";

function Header() {
  return (
    <header>
      <div className="container">
        <Navbar className="bg-white mt-4" expand="lg">
          <Container fluid>
            <div className="d-flex justify-content-between w-100">
              <div>
                <Navbar.Brand href="#">
                  <img src={Logo} alt="logo" />
                </Navbar.Brand>
              </div>
              <div>
                {" "}
                <Navbar.Toggle aria-controls="navbarScroll" />
                <Navbar.Collapse id="navbarScroll">
                  <Nav
                    className="me-auto my-2 my-lg-0"
                    style={{ maxHeight: "100px" }}
                    navbarScroll
                  >
                    <Nav.Link href="#action1">Home</Nav.Link>
                    <Nav.Link href="#action2">counsellor</Nav.Link>
                    <Nav.Link href="#action2">calculator</Nav.Link>
                    <Nav.Link href="#action2">Financial Services</Nav.Link>
                    <Nav.Link href="#action2">News & Press</Nav.Link>
                    <Nav.Link href="#action2">Contact</Nav.Link>
                  </Nav>
                  <Dropdown className="header-dropdown">
                    <Dropdown.Toggle id="dropdown-basic">
                      <img className="me-1" src={LanguageIcon} alt="icon" />
                    </Dropdown.Toggle>

                    <Dropdown.Menu>
                      <Dropdown.Item href="#/action-1">English</Dropdown.Item>
                      <Dropdown.Item href="#/action-2">Deutsch</Dropdown.Item>
                    </Dropdown.Menu>
                  </Dropdown>
                </Navbar.Collapse>
              </div>
            </div>
          </Container>
        </Navbar>
      </div>
    </header>
  );
}

export default Header;
