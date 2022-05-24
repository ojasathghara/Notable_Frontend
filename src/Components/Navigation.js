import React, { useContext } from "react";
import { Navbar, Nav, Container } from "react-bootstrap"; // user as={Link} when for rendering react-bootstrap items as react router dom items.
import { Link } from "react-router-dom";
import AuthContext from "../Context/Auth/AuthContext";

function Navigation(props) {
    const { authToken } = useContext(AuthContext);
    return (
        <Navbar
            collapseOnSelect
            expand="lg"
            bg="dark"
            variant="dark"
            sticky="top"
        >
            <Container>
                <Navbar.Brand as={Link} to="/">
                    Notable
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="me-auto">
                        <Nav.Link eventKey={1} as={Link} to="/home">
                            Home
                        </Nav.Link>
                        <Nav.Link eventKey={2} as={Link} to="/about">
                            About
                        </Nav.Link>
                    </Nav>
                    {!authToken && (
                        <Nav className="ml-auto">
                            <Nav.Link as={Link} to="/login">
                                Login
                            </Nav.Link>
                            <Nav.Link as={Link} to="/signup">
                                Signup
                            </Nav.Link>
                        </Nav>
                    )}
                    {authToken && (
                        <Nav className="ml-auto">
                            <Nav.Link as={Link} to="/logout">
                                Logout
                            </Nav.Link>
                        </Nav>
                    )}
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}

export default Navigation;
