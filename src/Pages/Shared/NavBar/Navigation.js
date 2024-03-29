import React from 'react';
import { Button, Container,  Nav, Navbar, NavDropdown, Offcanvas } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import useAuth from '../../../hooks/useAuth';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHome,faFire,faSignInAlt,faSignOutAlt,faClipboard, faCreditCard,faShoppingCart,faComments,faUserShield } from '@fortawesome/free-solid-svg-icons'

const Navigation = () => {
  const homeIcon = <FontAwesomeIcon icon={faHome} />
  const exploreIcon = <FontAwesomeIcon icon={faFire} />
  const loginIcon = <FontAwesomeIcon icon={faSignInAlt} />
  const logoutIcon = <FontAwesomeIcon icon={faSignOutAlt} />
  const clipIcon = <FontAwesomeIcon icon={faClipboard} />
  const creditIcon = <FontAwesomeIcon icon={faCreditCard} />
  const shopIcon = <FontAwesomeIcon icon={faShoppingCart} />
  const commentsIcon = <FontAwesomeIcon icon={faComments} />
  const adminIcon = <FontAwesomeIcon icon={faUserShield} />
  const { user, logout, admin } = useAuth();
  console.log(user);
  return (
    <Navbar bg="danger bg-opacity-75" expand={false} sticky="top">
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
         <Navbar.Toggle className="bg-warning" aria-controls="offcanvasNavbar" />
         :<> </>
       }
      
        <Navbar.Offcanvas
          id="offcanvasNavbar"
          aria-labelledby="offcanvasNavbarLabel"
          placement="start"
        >
          <Offcanvas.Header closeButton className="bg-danger bg-opacity-50 text-light ">
            <Offcanvas.Title id="offcanvasNavbarLabel"><span className="text-light p-1 ">{clipIcon}</span>DashBoard</Offcanvas.Title>
          </Offcanvas.Header>
          <Offcanvas.Body  className="bg-danger bg-opacity-25 ">
            <Nav className="justify-content-end flex-grow-1 pe-3">
              <Nav.Link className="text-danger fw-bold" as={Link} to="/pay"><span className="text-secondary p-1 ">{creditIcon}</span>Pay</Nav.Link>
              <Nav.Link className="text-danger fw-bold" as={Link} to="/myorders"><span className="text-secondary p-1 ">{shopIcon}</span>My Orders</Nav.Link>
              <Nav.Link className="text-danger fw-bold" as={Link} to="/review"><span className="text-secondary p-1">{commentsIcon}</span>Review</Nav.Link>
             {admin &&  <div className="d-flex"><span className="text-danger p-1">{adminIcon}</span>
              <NavDropdown className="fw-bolder" title="Admin" id="offcanvasNavbarDropdown">
                <NavDropdown.Item className="text-danger  fw-bold"   as={Link} to="/manageorders">Manage All Orders</NavDropdown.Item>
                <NavDropdown.Item className="text-danger fw-bold" as={Link} to="/manageproduct">Manage Products</NavDropdown.Item>
                <NavDropdown.Item className="text-danger fw-bold" as={Link} to="/addproduct">Add Product</NavDropdown.Item>
                <NavDropdown.Item className="text-danger fw-bold" as={Link} to="/makeadmin">Make Admin</NavDropdown.Item>
                
              </NavDropdown>
               </div>}
            </Nav>
          </Offcanvas.Body>
        </Navbar.Offcanvas>
        
      </Container>
    </Navbar>
    
  );
};

export default Navigation;