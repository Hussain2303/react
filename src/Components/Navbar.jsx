import React from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { NavLink } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCartShopping, faUserPlus } from '@fortawesome/free-solid-svg-icons';
import { useSelector } from 'react-redux';


function Navbarcomponent() {
    const cartItems = useSelector((state) => state.cart.items);
    return (
        <Navbar expand="lg" className="text-light bg-dark">
            <Container>
                <Navbar.Brand href="#home" className="d-flex align-items-center bg-light">
                    <img
                        src="https://zerolifestyle.co/cdn/shop/files/logo.png?v=1676901766&width=500"
                        style={{ height: 30, width: 100 }}
                        alt="Logo"
                    />
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" className="bg-light" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="mx-auto">
                        <NavLink
                            to="/"
                            className="text-light text-decoration-none p-2 font-bold text-lg ml-20 transition-transform duration-300 transform hover:scale-90"
                        >
                            Home
                        </NavLink>
                        <NavLink
                            to="/link"
                            className="text-green-900 text-decoration-none p-2 font-bold text-lg transition-transform duration-300 transform hover:scale-90"
                        >
                            Save-Tember Fest
                        </NavLink>
                        <NavLink
                            to="/Card"
                            className="text-light text-decoration-none p-2 font-bold text-lg transition-transform duration-300 transform hover:scale-90"
                        >
                            Cards
                        </NavLink>
                        <NavLink
                            to="/Card"
                            className="text-light text-decoration-none p-2 font-bold text-lg transition-transform duration-300 transform hover:scale-90"
                        >
                            Earbuds
                        </NavLink>
                        <NavLink
                            to="/Card"
                            className="text-light text-decoration-none p-2 font-bold text-lg transition-transform duration-300 transform hover:scale-90"
                        >
                            Support
                        </NavLink>
                        <NavLink
                            to="/Sirforms"
                            className="text-light text-decoration-none p-2 font-bold text-lg transition-transform duration-300 transform hover:scale-90"
                        >
                            Forms
                        </NavLink>
                    </Nav>
                    <Nav className="ms-auto"> {/* Right aligned icons */}
                        <NavLink
                            to="/Login"
                            className="text-light text-decoration-none p-2 transition-transform duration-300 transform hover:scale-90"
                        >
                            <FontAwesomeIcon icon={faUserPlus} beatFade />
                        </NavLink>
                        <NavLink
                            to="/Cart"
                            className="text-light text-decoration-none p-2 transition-transform duration-300 transform hover:scale-90"
                        >
                            <FontAwesomeIcon icon={faCartShopping} shake  /><span>{cartItems.length}</span>
                        </NavLink>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}

export default Navbarcomponent;
