import { configureStore } from "@reduxjs/toolkit";
import productReducer from "./productSlice";
import categoryReducer from "./categorySlice";
import modalReducer from "./modalSlice";
import cartReducer from "./cartSlice";
import restaurantReducer, { addToRestaurant, clearRestaurant } from "./restaurantSlice";

const store = configureStore({
    reducer: {
        product: productReducer,
        category: categoryReducer,
        modal: modalReducer,
        cart: cartReducer,
        restaurant: restaurantReducer,
    },
});

// Load data from localStorage for restaurant slice
const storedData = JSON.parse(localStorage.getItem("restaurant"));
if (storedData) {
    store.dispatch(addToRestaurant(storedData));
} else {
    store.dispatch(clearRestaurant());
}

export default store;
