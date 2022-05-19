import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navigation from "./Components/Navigation";
import Home from "./Components/Home";
import About from "./Components/Static/About";
import { Alert } from "react-bootstrap";

function App() {
    let message = "This is a nice alert";
    return (
        <div>
            <Router>
                <Navigation />
                <Alert variant="primary">{message}</Alert>
                <div className="container mt-5">
                    <Routes>
                        <Route path="/" element={<Home />} />
                        <Route path="/about" element={<About />} />
                    </Routes>
                </div>
            </Router>
        </div>
    );
}

export default App;
