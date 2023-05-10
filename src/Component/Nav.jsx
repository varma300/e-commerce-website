import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import { Link } from "react-router-dom/";
import { GiShoppingCart } from "react-icons/gi";
import { AiOutlineLogin } from "react-icons/ai";
import { SlUserFollow } from "react-icons/sl";
import { useContext } from "react";
import Context from "../Context";
import '../App.css'

function CollapsibleExample() {
const {login,setLogin} = useContext(Context)
const LogOut= ()=>{
  setLogin('')
}

  return (
    
     <div style={{backgroundColor:'lightgray', color:'gray', textAlign:'center', height:'2rem'}}>
     Free Express Shipping on all orders with all duties included

      <Navbar bg="light" variant="light" style={{height:'5rem', fontSize:'20px', paddingLeft:'8rem', paddingRight:'5rem'}}  >
        
          <Navbar.Brand as={Link} to='/adminLogin'>SHOE</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link as={Link} to="/">Home</Nav.Link>
            <Nav.Link as={Link} to="/men">MEN</Nav.Link>
            <Nav.Link as={Link} to="/women">WOMEN</Nav.Link>
            <Nav.Link as={Link} to="/kid">KIDS</Nav.Link>
            <Nav.Link as={Link} to="/collection">FULL-COLLECTION</Nav.Link>
            <Nav.Link href="#pricing">SALE</Nav.Link>
          </Nav>
          <Nav>
           <Nav.Link as={Link} to="cart">
          <GiShoppingCart />
           </Nav.Link>
           <Nav.Link eventKey={2} as={Link} to="/signin" >
           {login.length > 0 ? <p onClick={LogOut}>{login.map(e => e.loginUserNmae )} <SlUserFollow/></p>:<AiOutlineLogin/>}
              
          </Nav.Link>
       </Nav>
        
      </Navbar>
      </div>
  
  );
}

export default CollapsibleExample;
