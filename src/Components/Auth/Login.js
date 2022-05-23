import React, { useContext, useState, useEffect } from "react";
import { Form, Button } from "react-bootstrap";
import AuthContext from "../../Context/Auth/AuthContext";
import { useNavigate } from "react-router-dom";

export default function Login() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const { login, authToken } = useContext(AuthContext);

    const navigate = useNavigate();

    const onLogin = () => {
        login(email, password);
    };

    useEffect(() => {
        if (authToken) {
            return navigate("/");
            // eslint-disable-next-line
        }
    }, [authToken]);

    return (
        <div>
            <Form>
                <Form.Group className="mb-3" controlId="email">
                    <Form.Label>Email</Form.Label>
                    <Form.Control
                        type="email"
                        name="email"
                        value={email}
                        onChange={(event) => {
                            setEmail(event.target.value);
                        }}
                        placeholder="Enter email"
                    />
                </Form.Group>

                <Form.Group className="mb-3" controlId="password">
                    <Form.Label>Password</Form.Label>
                    <Form.Control
                        name="password"
                        type="password"
                        value={password}
                        onChange={(event) => {
                            setPassword(event.target.value);
                        }}
                        placeholder="Password"
                    />
                </Form.Group>
                <Button variant="primary" onClick={onLogin}>
                    Login
                </Button>
            </Form>
        </div>
    );
}
