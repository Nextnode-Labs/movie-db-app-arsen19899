import { Link } from 'react-router-dom'

import {Navbar, Nav,NavDropdown,Container,Form,Button,Dropdown, } from 'react-bootstrap';
import { Context } from '../../context'
import { useContext } from 'react'
import { useNavigate } from 'react-router-dom'
import Search from "../input/search";

const Header = () => {
  const [user, setUser]: any = useContext(Context)
  const navigate = useNavigate()
  const exit = () => {
    setUser(undefined)
    navigate('/')
  }
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
                    <Dropdown>
                      <Dropdown.Toggle variant="success" id="dropdown-basic">
                        Logged in as: {user.username}
                      </Dropdown.Toggle>

                      <Dropdown.Menu>
                        <Dropdown.Item><span onClick={exit} className="text-center text-danger fw-bold">EXIT</span></Dropdown.Item>

                      </Dropdown.Menu>
                    </Dropdown>
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
  )
}

export default Header
