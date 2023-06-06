import { Routes } from "react-router-dom";
import "./App.css";
import HomePage from "./pages/HomePage/HomePage";
import { Route } from "react-router-dom";

function App() {
    return (
        <div className="font-poppins bg-back">
            <Routes>
                <Route path="/" element={<HomePage />} />
            </Routes>
        </div>
    );
}

export default App;
