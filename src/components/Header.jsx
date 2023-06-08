import { useEffect } from "react";
import { useState } from "react";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { GoSignIn, GoSignOut } from "react-icons/go";
import { FaUserAlt } from "react-icons/fa";
import { BiRestaurant } from "react-icons/bi";
import { FaDotCircle } from "react-icons/fa";
import { Link } from "react-router-dom";
import { BsFillBellFill } from "react-icons/bs";
import { useDispatch, useSelector } from "react-redux";
import { toast } from "react-toastify";
import { notifyRestaurant } from "../store/restaurantSlice";

const Header = () => {
    const { totalItems } = useSelector((state) => state.cart);
    const { notified } = useSelector((state) => state.restaurant);
    const dispatch = useDispatch();
    const [scroll, setScroll] = useState(false);

    useEffect(() => {
        window.addEventListener("scroll", () => {
            setScroll(window.scrollY > 20);
        });
    }, []);

    const notificationHandler = () => {
        if (notified === false) {
            dispatch(notifyRestaurant());
            toast.success("You have an order. please check your restaurant page");
        }
        if (notified === true) {
            toast.success("You haven't any notification right now");
        }
    };
    return (
        <div className={`${scroll ? " bg-back shadow-sm" : ""} fixed top-0 left-0 w-full z-20`}>
            <nav className="relative container mx-auto flex items-center justify-between py-4 px-2">
                <div className="">
                    <h4 className="text-xl font-semibold">
                        <Link to="/">Taste</Link>
                    </h4>
                    <span className="text-[0.65rem] font-bold opacity-70">Restaurant && BBQ</span>
                </div>
                <div
                    className="cursor-pointer flex items-center justify-center w-10 h-12 bg-black rounded-xl relative"
                    onClick={notificationHandler}
                >
                    <BsFillBellFill className="text-xl text-white" />
                    {notified === false && (
                        <div className="absolute bg-red-500 text-[0.65rem] w-4 h-4 right-1 top-2 flex items-center justify-center rounded-full">
                            <FaDotCircle />
                        </div>
                    )}
                </div>
                <div className="flex flex-row gap-3">
                    <Link
                        to="/cart"
                        className="cursor-pointer flex items-center justify-center w-10 h-12 bg-black rounded-t-xl rounded-bl-3xl relative"
                    >
                        <AiOutlineShoppingCart className="text-xl text-white" />
                        <div className="absolute bg-red-500 text-[0.65rem] w-4 h-4 right-1 top-2 flex items-center justify-center rounded-full">
                            {totalItems}
                        </div>
                    </Link>
                    <Link
                        to="/restaurant"
                        className="cursor-pointer flex items-center justify-center w-10 h-12 bg-black rounded-t-xl rounded-br-3xl relative"
                    >
                        <BiRestaurant className="text-xl text-white" />
                    </Link>
                    <Link
                        to="/user"
                        className="cursor-pointer flex items-center justify-center w-10 h-12 bg-black rounded-t-xl rounded-bl-3xl relative"
                    >
                        <FaUserAlt className="text-xl text-white" />
                    </Link>
                    <button className="cursor-pointer flex items-center justify-center w-10 h-12 bg-black rounded-t-xl rounded-br-3xl relative">
                        <GoSignOut className="text-xl text-white" />
                    </button>
                </div>
            </nav>
        </div>
    );
};

export default Header;
