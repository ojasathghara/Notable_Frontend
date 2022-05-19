import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navigation from "./Components/Navigation";
import Home from "./Components/Home";
import About from "./Components/Static/About";
import NoteState from "./Context/Notes/NoteState";

function App() {
    return (
        <div>
            <NoteState>
                <Router>
                    <Navigation />
                    <div className="container mt-5">
                        <Routes>
                            <Route path="/" element={<Home />} />
                            <Route path="/about" element={<About />} />
                        </Routes>
                    </div>
                </Router>
            </NoteState>
        </div>
    );
}

export default App;
