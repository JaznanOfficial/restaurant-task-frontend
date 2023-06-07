import { useEffect, useState } from "react";
import "./CartPage.scss";
import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { removeFromCart, toggleCartQty, getCartTotal, clearCart } from "../../store/cartSlice";
import { formatPrice } from "../../utils/helpers";
import { loadStripe } from "@stripe/stripe-js";
import CheckoutLoader from "../../components/Loader/CheckoutLoader";

const CartPage = () => {
    const [loading, setLoading] = useState(false);
    const dispatch = useDispatch();
    const {
        data: cartProducts,
        totalItems,
        totalAmount,
        deliveryCharge,
    } = useSelector((state) => state.cart);
    const grandTotal = totalAmount + deliveryCharge;
    console.log(grandTotal);

    useEffect(() => {
        dispatch(getCartTotal());
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [useSelector((state) => state.cart)]);

    const emptyCartMsg = <h4 className="text-red fw-6">No items found!</h4>;

    const stripePromise = loadStripe(
        "pk_test_51LRzbYAMDIcwcvPooBdPWBaZ09NRclivm40bZVDjlz3zUiUcDhrHYQ5FDHSZm3XGiQuoEW4bVjVycNAwqJQXyHhC00sWaceOkD"
    );

    const payToStripe = async () => {
        setLoading(true);
        const stripe = await stripePromise;
        const response = await fetch("https://blogs-server-ms.onrender.com/create-payment-page", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                amount: grandTotal, // Pass the total amount from your state
                currency: "usd", // Specify the currency code
                // name: cartProducts.title,
                // quantity:cartProducts.quantity
            }),
        });
        const { sessionId } = await response.json();
        const result = await stripe.redirectToCheckout({
            sessionId: sessionId,
        });

        setLoading(false);

        if (result.error) {
            console.error(result.error.message);
        }
        // Clear the cart after successful checkout
        else {
            console.log(result);
            dispatch(clearCart());
        }
    };

    return (
        <div className="cart-page">
            <div className="container">
                <div className="breadcrumb">
                    <ul className="breadcrumb-items flex">
                        <li className="breadcrumb-item">
                            <Link to="/">
                                <i className="fas fa-home"></i>
                                <span className="breadcrumb-separator">
                                    <i className="fas fa-chevron-right"></i>
                                </span>
                            </Link>
                        </li>
                        <Link to={"/"}>Home</Link>
                    </ul>
                </div>
            </div>
            <div className="bg-ghost-white py-5">
                <div className="container">
                    <div className="section-title bg-ghost-white">
                        <h3 className="text-uppercase fw-7 text-regal-blue ls-1">My Cart</h3>
                    </div>
                    {Array.isArray(cartProducts) && cartProducts.length === 0 ? (
                        emptyCartMsg
                    ) : (
                        <div className="cart-content grid">
                            <div className="cart-left">
                                <div className="cart-items grid">
                                    {Array.isArray(cartProducts) &&
                                        cartProducts?.map((cartProduct) => (
                                            <div className="cart-item grid" key={cartProduct.id}>
                                                <div className="cart-item-img flex flex-column bg-white">
                                                    <img
                                                        src={cartProduct.images[0]}
                                                        alt={cartProduct.title}
                                                    />
                                                    <button
                                                        type="button"
                                                        className="btn-square rmv-from-cart-btn"
                                                        onClick={() =>
                                                            dispatch(removeFromCart(cartProduct.id))
                                                        }
                                                    >
                                                        <span className="btn-square-icon">
                                                            <i className="fas fa-trash"></i>
                                                        </span>
                                                    </button>
                                                </div>

                                                <div className="cart-item-info">
                                                    <h6 className="fs-16 fw-5 text-light-blue">
                                                        {cartProduct.title}
                                                    </h6>
                                                    <div className="qty flex">
                                                        <span className="text-light-blue qty-text">
                                                            Qty:{" "}
                                                        </span>
                                                        <div className="qty-change flex">
                                                            <button
                                                                type="button"
                                                                className="qty-dec fs-14"
                                                                onClick={() =>
                                                                    dispatch(
                                                                        toggleCartQty({
                                                                            id: cartProduct.id,
                                                                            type: "DEC",
                                                                        })
                                                                    )
                                                                }
                                                            >
                                                                <i className="fas fa-minus text-light-blue"></i>
                                                            </button>
                                                            <span className="qty-value flex flex-center">
                                                                {cartProduct.quantity}
                                                            </span>
                                                            <button
                                                                type="button"
                                                                className="qty-inc fs-14 text-light-blue"
                                                                onClick={() =>
                                                                    dispatch(
                                                                        toggleCartQty({
                                                                            id: cartProduct.id,
                                                                            type: "INC",
                                                                        })
                                                                    )
                                                                }
                                                            >
                                                                <i className="fas fa-plus"></i>
                                                            </button>
                                                        </div>
                                                    </div>
                                                    <div className="flex flex-between">
                                                        <div className="text-pine-green fw-4 fs-15 price">
                                                            Price : {formatPrice(cartProduct.price)}
                                                            .00
                                                        </div>
                                                        <div className="sub-total fw-6 fs-18 text-regal-blue">
                                                            <span>Sub Total: </span>
                                                            <span className="">
                                                                {formatPrice(
                                                                    cartProduct.totalPrice
                                                                )}
                                                            </span>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        ))}
                                </div>
                                <button
                                    type="button"
                                    className="btn-danger"
                                    onClick={() => dispatch(clearCart())}
                                >
                                    <span className="fs-16">Clear Cart</span>
                                </button>
                            </div>
                            <div className="cart-right bg-white">
                                <div className="cart-summary text-light-blue">
                                    <div className="cart-summary-title">
                                        <h6 className="fs-20 fw-5">Order Summary</h6>
                                    </div>
                                    <ul className="cart-summary-info">
                                        <li className="flex flex-between">
                                            <span className="fw-4">
                                                Selected {totalItems} items(s) Price
                                            </span>
                                            <span className="fw-7">{formatPrice(totalAmount)}</span>
                                        </li>
                                        <li className="flex flex-between">
                                            <span className="fw-4">Discount</span>
                                            <span className="fw-7">
                                                <span className="fw-5 text-red">-&nbsp;</span>
                                                {formatPrice(0)}
                                            </span>
                                        </li>
                                        <li className="flex flex-between">
                                            <span className="fw-4">Delivery Cost</span>
                                            <span className="fw-7">
                                                <span className="fw-5 text-gold">+&nbsp;</span>
                                                {formatPrice(deliveryCharge)}
                                            </span>
                                        </li>
                                    </ul>
                                    <div className="cart-summary-total flex flex-between fs-18">
                                        <span className="fw-6">Grand Total: </span>
                                        <span className="fw-6">
                                            {formatPrice(totalAmount + deliveryCharge)}
                                        </span>
                                    </div>
                                    <div className="cart-summary-btn">
                                        <button
                                            type="button"
                                            className="btn-secondary"
                                            onClick={payToStripe}
                                            disabled={loading}
                                        >
                                            {loading ? <CheckoutLoader /> : "Checkout"}
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
};

export default CartPage;
