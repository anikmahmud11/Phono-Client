import React from 'react';
import { Button, Container, Form, FormControl, Nav, Navbar, NavDropdown, Offcanvas } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import useAuth from '../../../hooks/useAuth';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHome,faFire,faSignInAlt,faSignOutAlt } from '@fortawesome/free-solid-svg-icons'

const Navigation = () => {
  const homeIcon = <FontAwesomeIcon icon={faHome} />
  const exploreIcon = <FontAwesomeIcon icon={faFire} />
  const loginIcon = <FontAwesomeIcon icon={faSignInAlt} />
  const logoutIcon = <FontAwesomeIcon icon={faSignOutAlt} />
  const { user, logout, admin } = useAuth();
  console.log(user);
  return (
    <Navbar bg="primary bg-opacity-75" expand={false} sticky="top">
      <Container fluid>
        <Navbar.Brand as={Link} to="/home"><img className="w-75 img-fluid" src="https://i.ibb.co/9qDGzMf/Capture.png" alt="" /></Navbar.Brand>
        
      <Nav.Link className=" text-light btn btn-warning btn-sm fw-bolder" as={Link} to="/home"><span className="text-success p-1">{homeIcon} </span> Home</Nav.Link>
        <Nav.Link className="text-light  btn btn-warning btn-sm fw-bolder" as={Link} to="/exploreMore"><span className="text-danger p-1">{exploreIcon}</span> Explore More</Nav.Link>
        {
          user?.email ?
            <Button variant="warning text-light fw-bolder" onClick={logout}><span className="text-success p-1">{logoutIcon}</span>Logout</Button>
            :
            <Nav.Link 
          
            as={Link} to="/login"
            >
              <Button   className="text-light  btn btn-warning fw-bolder"><span className="text-success p-1">{loginIcon}</span> Login</Button>
            </Nav.Link>
        }
        <Navbar.Text className="text-danger border rounded  bg-warning  fw-bolder">
          Login As : {user?.displayName}
        </Navbar.Text>
       
       {
         user?.email ?
         <Navbar.Toggle aria-controls="offcanvasNavbar" />
         :<> </>
       }
      
        <Navbar.Offcanvas
          id="offcanvasNavbar"
          aria-labelledby="offcanvasNavbarLabel"
          placement="start"
        >
          <Offcanvas.Header closeButton className="">
            <Offcanvas.Title id="offcanvasNavbarLabel">DashBoard</Offcanvas.Title>
          </Offcanvas.Header>
          <Offcanvas.Body>
            <Nav className="justify-content-end flex-grow-1 pe-3">
              <Nav.Link className="text-dark" as={Link} to="/pay">Pay</Nav.Link>
              <Nav.Link className="text-dark" as={Link} to="/myorders">My Orders</Nav.Link>
              <Nav.Link className="text-dark" as={Link} to="/review">Review</Nav.Link>
             {admin &&  <NavDropdown title="Admin" id="offcanvasNavbarDropdown">
                <NavDropdown.Item as={Link} to="/manageorders">Manage All Orders</NavDropdown.Item>
                <NavDropdown.Item as={Link} to="/manageproduct">Manage Products</NavDropdown.Item>
                <NavDropdown.Item as={Link} to="/addproduct">Add Product</NavDropdown.Item>
                <NavDropdown.Item as={Link} to="/makeadmin">Make Admin</NavDropdown.Item>
                
              </NavDropdown>}
            </Nav>
          </Offcanvas.Body>
        </Navbar.Offcanvas>
        
      </Container>
    </Navbar>
  );
};

export default Navigation;