import React from 'react';
import { Button, Container, Form, FormControl, Nav, Navbar, NavDropdown, Offcanvas } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import useAuth from '../../../hooks/useAuth';

const Navigation = () => {
  const { user, logout } = useAuth();
  console.log(user);
  return (
    <Navbar bg="light" expand={false}>
      <Container fluid>
        <Navbar.Brand as={Link} to="/home"><img className="w-75 img-fluid" src="https://i.ibb.co/9qDGzMf/Capture.png" alt="" /></Navbar.Brand>
        <Nav.Link className="text-dark" as={Link} to="/home">Home</Nav.Link>
        <Nav.Link className="text-dark" as={Link} to="/exploreMore">Explore More</Nav.Link>
        {
          user?.email ?
            <Button onClick={logout}>Logout</Button>
            :
            <Nav.Link as={Link} to="/login">
              <Button>Login</Button>
            </Nav.Link>
        }
        <Navbar.Text className="text-dark">
          Login As : {user.email}
        </Navbar.Text>
       {
         user?.email ?
         <Navbar.Toggle aria-controls="offcanvasNavbar" />
         :<> </>
       }
        <Navbar.Offcanvas
          id="offcanvasNavbar"
          aria-labelledby="offcanvasNavbarLabel"
          placement="end"
        >
          <Offcanvas.Header closeButton>
            <Offcanvas.Title id="offcanvasNavbarLabel">DashBoard</Offcanvas.Title>
          </Offcanvas.Header>
          <Offcanvas.Body>
            <Nav className="justify-content-end flex-grow-1 pe-3">
              <Nav.Link className="text-dark" as={Link} to="/pay">Pay</Nav.Link>
              <Nav.Link className="text-dark" as={Link} to="/myorders">My Orders</Nav.Link>
              <Nav.Link className="text-dark" as={Link} to="/review">Review</Nav.Link>
              <NavDropdown title="Admin" id="offcanvasNavbarDropdown">
                <NavDropdown.Item as={Link} to="/manageorders">Manage All Orders</NavDropdown.Item>
                <NavDropdown.Item as={Link} to="/makeadmin">Make Admin</NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="#action5">
                  Something else here
                </NavDropdown.Item>
              </NavDropdown>
            </Nav>
            <Form className="d-flex">
              <FormControl
                type="search"
                placeholder="Search"
                className="me-2"
                aria-label="Search"
              />
              <Button variant="outline-success">Search</Button>
            </Form>
          </Offcanvas.Body>
        </Navbar.Offcanvas>
      </Container>
    </Navbar>
  );
};

export default Navigation;