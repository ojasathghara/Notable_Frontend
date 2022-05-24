import React, { useContext, useState, useEffect } from "react";
import { Form, Button } from "react-bootstrap";
import AuthContext from "../../Context/Auth/AuthContext";
import { useNavigate } from "react-router-dom";

export default function Signup({ showAlert }) {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [signState, setSignState] = useState(false);

    const { signup } = useContext(AuthContext);
    const navigate = useNavigate();

    const onSignup = async () => {
        let response = await signup(name, email, password);

        if (response.status && response.status === 200) {
            showAlert("success", response.msg + ". Please login");
            setSignState(true);
        } else {
            showAlert("danger", response.errors[0].msg);
        }
    };

    useEffect(() => {
        if (signState) {
            return navigate("/login");
        }
        // eslint-disable-next-line
    }, [signState]);

    return (
        <div>
            <h3>Signup</h3>
            <hr />
            <Form>
                <Form.Group className="mb-3" controlId="name">
                    <Form.Label>Name</Form.Label>
                    <Form.Control
                        type="text"
                        name="name"
                        value={name}
                        onChange={(event) => {
                            setName(event.target.value);
                        }}
                        placeholder="Enter your name"
                    />
                </Form.Group>
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
                    <Form.Text className="text-muted">
                        We'll never share your email with anyone else.
                    </Form.Text>
                </Form.Group>

                <Form.Group className="mb-3" controlId="password">
                    <Form.Label>Password</Form.Label>
                    <Form.Control
                        type="password"
                        name="password"
                        value={password}
                        onChange={(event) => {
                            setPassword(event.target.value);
                        }}
                        placeholder="Password"
                    />
                </Form.Group>
                <Button variant="primary" onClick={onSignup}>
                    Signup
                </Button>
            </Form>
        </div>
    );
}
