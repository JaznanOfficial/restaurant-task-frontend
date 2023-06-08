import { useSelector, useDispatch } from "react-redux";
import {
    acceptRestaurant,
    rejectRestaurant,
    removeFromRestaurant,
    toggleRestaurantQty,
    getRestaurantTotal,
    clearRestaurant,
} from "../../store/restaurantSlice";
import { useEffect } from "react";

const RestaurantPage = () => {
    const dispatch = useDispatch();

    const {
        totalItems,
        totalAmount,
        accepted,
        rejected,
    } = useSelector((state) => state.restaurant);

    const handleAccept = () => {
        dispatch(acceptRestaurant());
    };

    const handleReject = () => {
        dispatch(rejectRestaurant());
    };

    useEffect(() => {
        let timeoutId = null;
        if (accepted === false && rejected === false) {
            timeoutId = setTimeout(() => {
                dispatch(rejectRestaurant());
            }, 5000);
        }

        return () => {
            clearTimeout(timeoutId);
        };
    }, [accepted, rejected, dispatch]);

    return (
        <div>
            <div className="h-screen flex flex-col gap-4 items-start justify-start section ">
                <div className="w-11/12 md:5/8 mx-auto border-2 border-b-4 border-gray-200 rounded-xl hover:bg-gray-50">
                    <p className="bg-black w-fit px-4 py-1 text-sm font-bold text-white rounded-tl-lg rounded-br-xl">
                        {accepted === true && rejected === false && "Accepted"}
                        {accepted === false && rejected === true && "Rejected"}
                        {accepted === false && rejected === false && "Pending..."}
                    </p>

                    <div className="grid grid-cols-6 p-5 gap-y-2">
                        <div className="col-span-5 md:col-span-4 ml-4">
                            <p className="text-gray-600 font-bold"> Total Items: {totalItems} </p>

                            <p className="text-gray-400"> Location: Gulshan, Dhaka </p>

                            <p className="text-gray-400">
                                Total Price:{" "}
                                <span className="text-black font-bold ">{totalAmount}</span>{" "}
                            </p>
                        </div>

                        <div className="flex col-start-2 ml-4 md:col-start-auto md:ml-0 md:justify-end">
                            {accepted === true ||
                                (accepted === false && rejected === false && (
                                    <button
                                        className="rounded-lg text-green-500 font-bold bg-green-100  py-4 px-6 text-lg w-fit h-fit border-2 border-green-500 mx-2"
                                        onClick={handleAccept}
                                        disabled={accepted === true}
                                    >
                                        Accept
                                    </button>
                                ))}
                            {rejected === true ||
                                (rejected === false && accepted === false && (
                                    <button
                                        className="rounded-lg text-red-500 font-bold bg-red-100  py-4 px-6 text-lg w-fit h-fit border-2 border-red-500 mx-2"
                                        onClick={handleReject}
                                        disabled={rejected === true}
                                    >
                                        Reject
                                    </button>
                                ))}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default RestaurantPage;
