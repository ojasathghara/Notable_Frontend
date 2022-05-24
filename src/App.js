import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navigation from "./Components/Navigation";
import Home from "./Components/Home";
import Login from "./Components/Auth/Login";
import Signup from "./Components/Auth/Signup";
import Logout from "./Components/Auth/Logout";
import About from "./Components/Static/About";
import { Alert } from "react-bootstrap";
import AuthState from "./Context/Auth/AuthState";
import { useState } from "react";
import Notable from "./Components/Notable";

function App() {
    const [alert, setAlert] = useState({});
    const [hasAlert, setHasAlert] = useState(false);

    const createAlert = (type, message) => {
        const newAlert = {
            type: type,
            message: message,
        };

        setAlert(newAlert);
        setHasAlert(true);

        setTimeout(() => {
            setHasAlert(false);
            setAlert({});
        }, 3000);
    };

    return (
        <div>
            <AuthState>
                <Router>
                    <Navigation />

                    {hasAlert && (
                        <Alert variant={alert.type}>{alert.message}</Alert>
                    )}

                    <div className="container mt-5">
                        <Routes>
                            <Route path="/" element={<Notable />} />
                            <Route
                                path="/home"
                                element={<Home showAlert={createAlert} />}
                            />
                            <Route path="/about" element={<About />} />
                            <Route
                                path="/login"
                                element={<Login showAlert={createAlert} />}
                            />
                            <Route
                                path="/signup"
                                element={<Signup showAlert={createAlert} />}
                            />
                            <Route
                                path="/logout"
                                element={<Logout showAlert={createAlert} />}
                            />
                        </Routes>
                    </div>
                </Router>
            </AuthState>
        </div>
    );
}

export default App;
