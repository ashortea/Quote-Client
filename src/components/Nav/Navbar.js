import React, {useState} from 'react';
import Cat from '../../assets/paw.jpg'
import './Navbar.css'
import {
    Collapse,
    Navbar,
    NavbarToggler,
    NavbarBrand,
    Nav,
    NavItem,

    } from 'reactstrap';
import Logout from './Logout'; 



const NavBar = (props) => {
    const [isOpen, setIsOpen] = useState(false);

    const toggle = () => setIsOpen(!isOpen);
  
    return (
      <div>

        <Navbar >
         <img src={Cat} className="cat"/>
            <Nav className="ml-auto" navbar>
              <NavItem>
               <Logout setSession={props.setSession}/>
              </NavItem>
              
            </Nav>
       
        </Navbar>
        
      </div>
    );
}

export default NavBar;