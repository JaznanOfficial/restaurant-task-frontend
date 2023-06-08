import { createSlice } from "@reduxjs/toolkit";

const fetchFromLocalStorage = () => {
    const restaurant = localStorage.getItem("restaurant");
    return restaurant
        ? JSON.parse(restaurant)
        : { data: [], totalItems: 0, totalAmount: 0, accepted: false, rejected: false };
};



const storeInLocalStorage = (data) => {
    localStorage.setItem("restaurant", JSON.stringify(data));
};

const restaurantSlice = createSlice({
    name: "restaurant",
    initialState: fetchFromLocalStorage(),
    reducers: {
        addToRestaurant: (state, action) => {
            const { orderedProducts, totalItems, totalAmount } = action.payload;
            state.data = orderedProducts;
            state.totalItems = totalItems;
            state.totalAmount = totalAmount;
            state.accepted = false;
            state.rejected = false;
            storeInLocalStorage(state);
            // setTimeout(() => {
            //     if (!state.accepted) {
            //         state.rejected = true;
            //         storeInLocalStorage(state);
            //     }
            // }, 10000); // 10 seconds
        },
        acceptRestaurant: (state) => {
            state.accepted = true;
            state.rejected = false;
            storeInLocalStorage(state);
        },
        
        rejectRestaurant: (state) => {
            state.accepted = false;
            state.rejected = true;
            storeInLocalStorage(state);
        },
        removeFromRestaurant: (state, action) => {
            const itemId = action.payload;
            state.data = state.data.filter((item) => item.id !== itemId);
            storeInLocalStorage(state);
        },
        toggleRestaurantQty: (state, action) => {
            const { id, type } = action.payload;
            state.data = state.data.map((item) => {
                if (item.id === id) {
                    let tempQty = item.quantity;
                    if (type === "INC") {
                        tempQty++;
                    } else if (type === "DEC") {
                        tempQty = Math.max(tempQty - 1, 1);
                    }
                    const tempTotalPrice = tempQty * item.price;
                    return { ...item, quantity: tempQty, totalPrice: tempTotalPrice };
                }
                return item;
            });
            storeInLocalStorage(state);
        },
        getRestaurantTotal: (state) => {
            state.totalAmount = state.data.reduce(
                (restaurantTotal, restaurantItem) => (restaurantTotal += restaurantItem.totalPrice),
                0
            );
            state.totalItems = state.data.length;
        },
        clearRestaurant: (state) => {
            state.data = [];
            state.totalItems = 0;
            state.totalAmount = 0;
            state.accepted = false;
            state.rejected = false;
            localStorage.removeItem("restaurant");
        },
    },
});

export const {
    addToRestaurant,
    acceptRestaurant,
    rejectRestaurant,
    removeFromRestaurant,
    toggleRestaurantQty,
    getRestaurantTotal,
    clearRestaurant,
} = restaurantSlice.actions;
export default restaurantSlice.reducer;
