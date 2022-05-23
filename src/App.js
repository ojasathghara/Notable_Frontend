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

function App() {
    let message = "This is a nice alert";
    return (
        <div>
            <AuthState>
                <Router>
                    <Navigation />
                    <Alert variant="primary">{message}</Alert>
                    <div className="container mt-5">
                        <Routes>
                            <Route path="/" element={<Home />} />
                            <Route path="/about" element={<About />} />
                            <Route path="/login" element={<Login />} />
                            <Route path="/signup" element={<Signup />} />
                            <Route path="/logout" element={<Logout />} />
                        </Routes>
                    </div>
                </Router>
            </AuthState>
        </div>
    );
}

export default App;
