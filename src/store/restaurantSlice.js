import { createSlice } from "@reduxjs/toolkit";

const fetchFromLocalStorage = () => {
    let restaurant = localStorage.getItem("restaurant");
    if (restaurant) {
        return JSON.parse(localStorage.getItem("restaurant"));
    } else {
        return [];
    }
};

const storeInLocalStorage = (data) => {
    localStorage.setItem("restaurant", JSON.stringify(data));
};

const restaurantSlice = createSlice({
    name: "restaurant",
    initialState: {
        data: fetchFromLocalStorage(),
        totalItems: 0,
        totalAmount: 0,
        accepted: false,
        rejected: false,
        notified: true,

        // deliveryCharge: 1000,
    },
    reducers: {
        addToRestaurant(state, action) {
            console.log(state);
            const tempRestaurant = {
                data: action.payload.orderedProducts,
                totalItems: action.payload.totalItems,
                totalAmount: action.payload.totalAmount,
                accepted: false,
                rejected: false,
                notified: true,
            };
            storeInLocalStorage(tempRestaurant);
            return {
                ...state,
                data: action.payload.orderedProducts,
                totalItems: action.payload.totalItems,
                totalAmount: action.payload.totalAmount,
            };

            // if (Array.isArray(state.data)) {
            //     const tempItem = state.data.find((item) => item.id === action.payload.id);
            //     if (tempItem) {
            //         const tempRestaurant = state.data.map((item) => {
            //             if (item.id === action.payload.id) {
            //                 let newQty = item.quantity + action.payload.quantity;
            //                 let newTotalPrice = newQty * item.price;
            //                 return { ...item, quantity: newQty, totalPrice: newTotalPrice };
            //             } else {
            //                 return item;
            //             }
            //         });
            //         state.data = tempRestaurant;
            //         storeInLocalStorage(state.data);
            //     } else {
            //         state.data.push(action.payload);
            //         storeInLocalStorage(state.data);
            //     }
            // } else {
            //     // Handle the case when state.data is not an array
            //     console.error("state.data is not an array");
            // }
        },

        removeFromRestaurant(state, action) {
            const tempCart = state.data.filter((item) => item.id !== action.payload);
            state.data = tempCart;
            storeInLocalStorage(state.data);
        },
        clearRestaurant: (state) => {
            // Clear the cart items
            state.data = [];
            state.totalItems = 0;
            state.totalAmount = 0;
            state.deliveryCharge = 0;
        },
        toggleRestaurantQty(state, action) {
            const tempRestaurant = state.data.map((item) => {
                if (item.id === action.payload.id) {
                    let tempQty = item.quantity;
                    let tempTotalPrice = item.totalPrice;
                    if (action.payload.type === "INC") {
                        tempQty++;
                        tempTotalPrice = tempQty * item.price;
                    }
                    if (action.payload.type === "DEC") {
                        tempQty--;
                        if (tempQty < 1) tempQty = 1;
                        tempTotalPrice = tempQty * item.price;
                    }
                    return { ...item, quantity: tempQty, totalPrice: tempTotalPrice };
                } else {
                    return item;
                }
            });
            state.data = tempRestaurant;
            storeInLocalStorage(state.data);
        },
        getRestaurantTotal(state) {
            if (Array.isArray(state.data)) {
                state.totalAmount = state.data.reduce((restaurantTotal, restaurantItem) => {
                    return (restaurantTotal += restaurantItem.totalPrice);
                }, 0);
                state.totalItems = state.data.length;
            } else {
                console.error("state.data is not an array");
            }
        },
    },
});

export const {
    addToRestaurant,
    removeFromRestaurant,
    toggleRestaurantQty,
    getRestaurantTotal,
    clearRestaurant,
} = restaurantSlice.actions;
export default restaurantSlice.reducer;
