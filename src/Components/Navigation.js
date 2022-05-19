import React from "react";
import { Navbar, NavDropdown, Nav, Container } from "react-bootstrap"; // user as={Link} when for rendering react-bootstrap items as react router dom items.
import { Link } from "react-router-dom";

import PropTypes from "prop-types";

function Navigation(props) {
    return (
        <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
            <Container>
                <Navbar.Brand as={Link} to="/">
                    Notable
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="me-auto">
                        <Nav.Link as={Link} to="/">
                            Home
                        </Nav.Link>
                        <Nav.Link eventKey={2} as={Link} to="/">
                            About
                        </Nav.Link>
                    </Nav>
                    <Nav className="ml-auto">
                        <Nav.Link as={Link} to="/">
                            Login
                        </Nav.Link>
                        <Nav.Link eventKey={2} as={Link} to="/">
                            Signup
                        </Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}

Navbar.propTypes = {};

export default Navigation;
