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
    <Navbar.Brand><Link className='text-decoration-none text-dark' to='/'>Arsens MovieBD1</Link></Navbar.Brand>
    <Navbar.Toggle aria-controls="navbarScroll" />
    <Navbar.Collapse id="navbarScroll">
      <Nav
        className="me-auto my-2 my-lg-0"
        style={{ maxHeight: '100px' }}
        navbarScroll
      >
        <Nav.Link><Link className='text-decoration-none text-dark' to='/'>Home</Link></Nav.Link>
        <NavDropdown title="Selection of films" id="navbarScrollingDropdown">
        <NavDropdown.Divider /> 
          <NavDropdown.Item><Link className='text-decoration-none text-dark' to='/'>Popular films</Link></NavDropdown.Item>
          <NavDropdown.Item><Link className='text-decoration-none text-dark' to='/up'>Upcoming films</Link></NavDropdown.Item>
          <NavDropdown.Item><Link className='text-decoration-none text-dark' to='/top'>Top rated action</Link></NavDropdown.Item>
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
<div className="dropdown">
  <button className="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
  Logged in as: {user.username}
  </button>
  <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton1">
    <li><a className="dropdown-item" href="/">Exit</a></li>
    <li><Link className="dropdown-item" to="/">Другое действие</Link></li>
    <li><Link  className="dropdown-item" to="/">Что-то еще здесь</Link></li>
  </ul>
</div>   
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
