import { Routes } from "react-router-dom";
import RestaurantHeader from "./RestaurantHeader";
import { Route } from "react-router-dom";
import AllOrders from "./AllOrders";
import RestaurantAllFoods from "../../pages/RestaurantAllFoods";

const Restaurant = () => {
    return (
        <div className="my-5">
        <RestaurantHeader />
            <Routes>
               
                    <Route path="/" element={<AllOrders />} />
                    <Route path="/rs-all-foods" element={<RestaurantAllFoods />} />
               
            </Routes>
        </div>
    );
};

export default Restaurant;
