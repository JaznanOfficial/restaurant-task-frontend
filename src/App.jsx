import { Routes } from "react-router-dom";
import "./App.css";
import HomePage from "./pages/HomePage/HomePage";
import { Route } from "react-router-dom";
import CartPage from "./pages/CartPage/CartPage";

function App() {
    return (
        <div className="font-poppins bg-back">
            <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/cart" element={<CartPage />} />
            </Routes>
        </div>
    );
}

export default App;
