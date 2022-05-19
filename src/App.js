import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navigation from "./Components/Navigation";

function App() {
    return (
        <div>
            <Router>
                <Navigation />
            </Router>
        </div>
    );
}

export default App;
