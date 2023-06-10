import { Routes } from "react-router-dom";
import RestaurantHeader from "./RestaurantHeader";
import { Route } from "react-router-dom";
import AllOrders from "./AllOrders";

const Restaurant = () => {
    return (
        <div className="my-5">
        <RestaurantHeader />
            <Routes>
                <Route path="/rs-admin/*" element={''}>
                    <Route path="all-orders" element={<AllOrders />} />
                </Route>
            </Routes>
        </div>
    );
};

export default Restaurant;
