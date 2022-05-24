import React from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "react-bootstrap";

export default function Notable() {
    const navigate = useNavigate();
    const loginButton = () => {
        navigate("/login");
    };
    const signupButton = () => {
        navigate("/signup");
    };
    return (
        <div>
            <header className="bg-dark py-5">
                <div className="container px-5">
                    <div className="row gx-5 justify-content-center">
                        <div className="col-lg-6">
                            <div className="text-center my-5">
                                <h1 className="display-5 fw-bolder text-white mb-2">
                                    Notable
                                </h1>
                                <p className="lead text-white-50 mb-4">
                                    Notable is a smart and simplified way to
                                    create and store your notes on the cloud.
                                </p>
                                <div className="d-grid gap-3 d-sm-flex justify-content-sm-center">
                                    <Button
                                        variant="primary"
                                        onClick={loginButton}
                                    >
                                        Login
                                    </Button>
                                    <span style={{ color: "white" }}>or</span>
                                    <Button
                                        variant="secondary"
                                        onClick={signupButton}
                                    >
                                        Signup
                                    </Button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </header>
        </div>
    );
}
