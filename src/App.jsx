import { Routes } from "react-router-dom";
import "./App.css";
import HomePage from "./pages/HomePage/HomePage";
import { Route } from "react-router-dom";
import CartPage from "./pages/CartPage/CartPage";
import RestaurantPage from "./pages/RestaurantPage/RestaurantPage";
import Header from "./components/Header";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function App() {
    return (
        <div className="font-poppins bg-back">
            <Header />
            <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/cart" element={<CartPage />} />
                <Route path="/restaurant" element={<RestaurantPage />} />
            </Routes>
            <ToastContainer />
        </div>
    );
}

export default App;
