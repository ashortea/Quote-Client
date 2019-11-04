import React, {useState} from 'react';
import{
  Router,
  Route,
  Link,
  Switch
} from 'react-router-dom' 
import {
    Collapse,
    Navbar,
    NavbarToggler,
    NavbarBrand,
    Nav,
    NavItem,
    NavLink,
    UncontrolledDropdown,
    DropdownToggle,
    DropdownMenu,
    DropdownItem } from 'reactstrap';
import Logout from './Logout'; 
// import CreateQotes from '../Quotes/CreateQotes'


const NavBar = (props) => {
    const [isOpen, setIsOpen] = useState(false);

    const toggle = () => setIsOpen(!isOpen);
  
    return (
      <div>

        <Navbar color="light" light expand="md">
          <NavbarBrand href="/">Cat-Box Quotes</NavbarBrand>
          <NavbarToggler onClick={toggle} />
          <Collapse isOpen={isOpen} navbar>
            <Nav className="ml-auto" navbar>
              <NavItem>
               
              </NavItem>
              <NavItem>
               
              </NavItem>
              <UncontrolledDropdown nav inNavbar>
                <DropdownToggle nav caret>
                  Options
                </DropdownToggle>
                <DropdownMenu right>
                  <DropdownItem divider />
                  <DropdownItem>
                  <Logout setSession={props.setSession}/>
                  </DropdownItem>
                </DropdownMenu>
              </UncontrolledDropdown>
            </Nav>
          </Collapse>
        </Navbar>
        
      </div>
    );
}

export default NavBar;