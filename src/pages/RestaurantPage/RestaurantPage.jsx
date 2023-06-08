import { useSelector } from "react-redux";

const RestaurantPage = () => {
    // const {
    //     data: restaurantData,
    //     totalItems,
    //     totalAmount,
    //     accepted,
    //     rejected,
    //     notified,
    // } = useSelector((state) => state.restaurant);

    const data = JSON.parse(localStorage.getItem("restaurant")) || {};

    console.log(data);

    const {
        data: restaurantData,
        totalItems,
        totalAmount,
        accepted,
        rejected,
        notified,
    } = data || {};

    return (
        <div>
            <div className="h-screen flex flex-col gap-4 items-start justify-start section ">
                <div className="w-11/12 md:5/8 mx-auto border-2 border-b-4 border-gray-200 rounded-xl hover:bg-gray-50">
                    <p className="bg-black w-fit px-4 py-1 text-sm font-bold text-white rounded-tl-lg rounded-br-xl">
                        {" "}
                        {accepted === true && rejected === false ? "Accepted" : "Rejected"}
                    </p>

                    <div className="grid grid-cols-6 p-5 gap-y-2">
                        <div className="col-span-5 md:col-span-4 ml-4">
                            {/* <p className="text-sky-500 font-bold text-xs"> 20+ SPOTS LEFT </p> */}

                            <p className="text-gray-600 font-bold"> Total Items: {totalItems} </p>

                            <p className="text-gray-400"> Location: Gulshan, Dhaka </p>

                            <p className="text-gray-400">
                                {" "}
                                Total Price:{" "}
                                <span className="text-black font-bold ">{totalAmount}</span>{" "}
                            </p>
                        </div>

                        <div className="flex col-start-2 ml-4 md:col-start-auto md:ml-0 md:justify-end">
                            <button className="rounded-lg text-green-500 font-bold bg-green-100  py-4 px-6 text-lg w-fit h-fit border-2 border-green-500 mx-2">
                                {" "}
                                Accept
                            </button>
                            <button className="rounded-lg text-red-500 font-bold bg-red-100  py-4 px-6 text-lg w-fit h-fit border-2 border-red-500 mx-2">
                                {" "}
                                Reject
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default RestaurantPage;
