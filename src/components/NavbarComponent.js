import Navbar from 'react-bootstrap/Navbar'
import { NavDropdown } from 'react-bootstrap'
import Nav from 'react-bootstrap/Nav'
import Container from 'react-bootstrap/Container'
import React from 'react';
import Badge from 'react-bootstrap/Badge'
import logoImg from './logo.PNG'

function NavbarComponent() {

  let loggedStatus = <></>

  if (localStorage.getItem('username') && localStorage.getItem('password')) {
    loggedStatus=(<a href="/login"><Badge pill bg="success">Authenticated</Badge></a>)
  } else {
    loggedStatus=(<a href="/login"><Badge pill bg="danger">Not Authenticated</Badge></a>)
  }

    return (
      <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark" >
        <Container>
          <Navbar.Brand href="/">
            <img
              alt=""
              src={logoImg}
              width="30"
              height="30"
              className="d-inline-block align-top"
            />{' '}
          </Navbar.Brand>
          <Navbar.Toggle/>
          <Navbar.Collapse>
            <Nav className="me-auto">
              <Nav.Link href="/">Home</Nav.Link>
              {/* <Nav.Link href="/crt">CRT Page</Nav.Link> */}
              {/* <Nav.Link href="/VM-tables">VM Table</Nav.Link> */}
              <NavDropdown title="Planner" id="navbarScrollingDropdown">
                <NavDropdown.Item href="/audience-check">My Planner</NavDropdown.Item>
              </NavDropdown>
              <NavDropdown title="Profile" id="navbarScrollingDropdown">
                <NavDropdown.Item href="/message-deployment">My Profile</NavDropdown.Item>
                <NavDropdown.Item href="/audience-creation">Audience Creation</NavDropdown.Item>
                <NavDropdown.Item href="/client-creation">Client Creation</NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="/crt">CRT Page</NavDropdown.Item>
              </NavDropdown>
              <NavDropdown title="Results" id="navbarScrollingDropdown">
                <NavDropdown.Item href="/VM-tables">My Progress Tracker</NavDropdown.Item>
                <NavDropdown.Item href="/gc-analytics/Apteo">Our Bee Hive</NavDropdown.Item>
                <NavDropdown.Item href="/audience-check">Our Garden</NavDropdown.Item>
              </NavDropdown>
              {/* <Nav.Link href="/audience-check">Audience Table</Nav.Link> */}
              {/* <Nav.Link href="/gc-analytics/Apteo">GC-Analytics</Nav.Link> */}
              {/* <Nav.Link href="/audience-search">Audience Search</Nav.Link> */}
              {/* <Nav.Link href="/gc-x">GC-X</Nav.Link> */}
              {/* <Nav.Link href="/audience-creation">Audience Creation</Nav.Link> */}
              {/* <Nav.Link href="/campaign-summary">Campaign Summary</Nav.Link> */}
              {/* <Nav.Link href="/message-deployment">Message Deployment</Nav.Link>
              <Nav.Link href="/client-creation">Client Creation</Nav.Link> */}
             
            </Nav>
          </Navbar.Collapse>
          <Navbar.Collapse className="justify-content-end">
            <Navbar.Text>
              Status: {loggedStatus}
            </Navbar.Text>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    );
}

export default NavbarComponent;