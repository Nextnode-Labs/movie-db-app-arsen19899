import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { Context } from '../../context';
import Search from "../input/search";
import {Navbar, Nav,NavDropdown,Container,Form,Button  } from 'react-bootstrap';

const Header = () => {
  const [user] = useContext(Context);


  return (
      <header className='sticky-top bg-white container-fluid p0 m0'>
<Navbar bg="light" expand="lg">
  <Container>
    <Navbar.Brand href="/">Arsens MovieBD</Navbar.Brand>
    <Navbar.Toggle aria-controls="navbarScroll" />
    <Navbar.Collapse id="navbarScroll">
      <Nav
        className="me-auto my-2 my-lg-0"
        style={{ maxHeight: '100px' }}
        navbarScroll
      >
        <Nav.Link href="/">Home</Nav.Link>
        <NavDropdown title="Selection of films" id="navbarScrollingDropdown">
        <NavDropdown.Divider /> 
          <NavDropdown.Item href="/">Popular films</NavDropdown.Item>
          <NavDropdown.Item href="/up">Upcoming films</NavDropdown.Item>
          <NavDropdown.Item href="/top">Top rated action</NavDropdown.Item>
          <NavDropdown.Divider />
        </NavDropdown>
      </Nav>
      <Form className="col-md-6 col-sm-12 col-xs-12">
      <Search></Search>
      </Form>
      <Nav
        className="me-auto my-2 my-lg-0"
        style={{ maxHeight: '100px' }}
        navbarScroll
      >
      {user ? (
                          <span>Logged in as: {user.username}</span>
                      ) : (
                          <Link to='/login'>
                              <Button variant="danger">Log in</Button>
                          </Link>
                      )}
        </Nav>
    </Navbar.Collapse>
  </Container>
</Navbar>
         
      </header>

  );
};

export default Header;