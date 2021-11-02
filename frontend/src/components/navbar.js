import React from 'react';
import {
  Nav,
  NavLink,
  Bars,
  NavMenu,
  NavBtn,
  NavBtnLink,
} from './navbar-elements';

const Navbar = () => {
  return (
    <>
      <Nav>
        <NavMenu>
          <NavLink to='/about' >
            About
          </NavLink>
          <NavLink to='/appointment' >
            Appointment
          </NavLink>
          <NavLink to='/contact' >
            Contact
          </NavLink>
          <NavLink to='/faq' >
            FAQ
          </NavLink>
          <NavLink to='/home' >
            Home
          </NavLink>
          <NavLink to='/services' >
            Services
          </NavLink>
        </NavMenu>
        {/* <NavBtn>
          <NavBtnLink to='/signin'>Sign In</NavBtnLink>
        </NavBtn> */}
      </Nav>
    </>
  );
};

export default Navbar;
