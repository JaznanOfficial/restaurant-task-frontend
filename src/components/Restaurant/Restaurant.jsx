import { Routes } from "react-router-dom";
import RestaurantHeader from "./RestaurantHeader";
import { Route } from "react-router-dom";
import AllOrders from "./AllOrders";

const Restaurant = () => {
    return (
        <div className="my-5">
        <RestaurantHeader />
            <Routes>
               
                    <Route path="/" element={<AllOrders />} />
               
            </Routes>
        </div>
    );
};

export default Restaurant;
