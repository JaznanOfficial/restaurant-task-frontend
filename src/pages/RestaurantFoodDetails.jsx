import { useState, useEffect } from "react";

import products from "../assets/fake-data/products";
import { useParams } from "react-router-dom";
import Helmet from "../components/Helmet/Helmet";
import CommonSection from "../components/UI/common-section/CommonSection";
import { Container, Row, Col } from "reactstrap";

import { useDispatch } from "react-redux";
import { cartActions } from "../store/shopping-cart/cartSlice";
import { Modal, ModalHeader, ModalBody, ModalFooter } from "reactstrap";

import "../styles/product-details.css";

const RestaurantFoodDetails = () => {
    const [tab, setTab] = useState("desc");
    const [enteredName, setEnteredName] = useState("");
    const [enteredEmail, setEnteredEmail] = useState("");
    const [reviewMsg, setReviewMsg] = useState("");
    const [modal, setModal] = useState(false);

    const { id } = useParams();
    const dispatch = useDispatch();

    const product = products.find((product) => product.id === id);
    const [previewImg, setPreviewImg] = useState(product.image01);
    const { title, price, category, desc, image01 } = product;

    const toggle = () => setModal(!modal);
    const relatedProduct = products.filter((item) => category === item.category);

    const addItem = () => {
        dispatch(
            cartActions.addItem({
                id,
                title,
                price,
                image01,
            })
        );
    };

    const submitHandler = (e) => {
        e.preventDefault();

        console.log(enteredName, enteredEmail, reviewMsg);
    };

    useEffect(() => {
        setPreviewImg(product.image01);
    }, [product]);

    useEffect(() => {
        window.scrollTo(0, 0);
    }, [product]);

    return (
        <Helmet title="Product-details">
            <CommonSection title={title} />

            <section>
                <Container>
                    <Row>
                        <Col lg="2" md="2">
                            <div className="product__images ">
                                <div
                                    className="img__item mb-3"
                                    onClick={() => setPreviewImg(product.image01)}
                                >
                                    <img src={product.image01} alt="" className="w-50" />
                                </div>
                                <div
                                    className="img__item mb-3"
                                    onClick={() => setPreviewImg(product.image02)}
                                >
                                    <img src={product.image02} alt="" className="w-50" />
                                </div>

                                <div
                                    className="img__item"
                                    onClick={() => setPreviewImg(product.image03)}
                                >
                                    <img src={product.image03} alt="" className="w-50" />
                                </div>
                            </div>
                        </Col>

                        <Col lg="4" md="4">
                            <div className="product__main-img">
                                <img src={previewImg} alt="" className="w-100" />
                            </div>
                        </Col>

                        <Col lg="6" md="6">
                            <div className="single__product-content">
                                <h2 className="product__title mb-3">{title}</h2>
                                <p className="product__price">
                                    {" "}
                                    Price: <span>${price}</span>
                                </p>
                                <p className="category mb-5">
                                    Category: <span>{category}</span>
                                </p>

                                <button onClick={toggle} className="btn btn-success mx-2">
                                    Edit Item
                                </button>
                                
                            </div>
                        </Col>

                        <Col lg="12">
                            <div className="tabs d-flex align-items-center gap-5 py-3">
                                <h6
                                    className={` ${tab === "desc" ? "tab__active" : ""}`}
                                    onClick={() => setTab("desc")}
                                >
                                    Description
                                </h6>
                            </div>

                            <div className="tab__content">
                                <p>{desc}</p>
                            </div>
                        </Col>
                    </Row>
                    <Modal isOpen={modal} toggle={toggle}>
                        <ModalHeader toggle={toggle}>
                            {" "}
                            <div className="d-flex justify-content-center">
                                <h1 className="text-center">Update Food Item</h1>
                            </div>
                        </ModalHeader>
                        <ModalBody>
                            <div className="container">
                                <div className="row ">
                                    <div className=" mx-auto">
                                        <div className="card mt-2 mx-auto p-1 bg-light">
                                            <div className="card-body bg-light">
                                                <div>
                                                    <form id="contact-form" role="form">
                                                        <div className="controls">
                                                            <div className="row">
                                                                <div className="col-md-12">
                                                                    <div className="form-group">
                                                                        <label htmlFor="form_name">
                                                                            Food Name
                                                                        </label>
                                                                        <input
                                                                            id="form_name"
                                                                            type="text"
                                                                            name="name"
                                                                            className="form-control"
                                                                            placeholder="Food Name *"
                                                                            required="required"
                                                                            defaultValue={title}
                                                                        />
                                                                    </div>
                                                                </div>
                                                                <div className="col-md-12">
                                                                    <div className="form-group">
                                                                        <label htmlFor="form_lastname">
                                                                            Lastname *
                                                                        </label>
                                                                        <input
                                                                            id="form_lastname"
                                                                            type="number"
                                                                            name="surname"
                                                                            className="form-control"
                                                                            placeholder="Food Price *"
                                                                            required="required"
                                                                            defaultValue={price}
                                                                        />
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            <div className="row">
                                                               {/*  <div className="col-md-12">
                                                                    <div className="form-group">
                                                                        <label htmlFor="form_email">
                                                                            Email *
                                                                        </label>
                                                                        <input
                                                                            id="form_email"
                                                                            type="email"
                                                                            name="email"
                                                                            className="form-control"
                                                                            placeholder="Please enter your email *"
                                                                            required="required"
                                                                            data-error="Valid email is required."
                                                                        />
                                                                    </div>
                                                                </div> */}
                                                                <div className="col-md-12">
                                                                    <div className="form-group">
                                                                        <label htmlFor="form_need">
                                                                            Category
                                                                            *
                                                                        </label>
                                                                        <select
                                                                            id="form_need"
                                                                            name="need"
                                                                            className="form-control"
                                                                            required="required"
                                                                            
                                                                        >
                                                                            <option
                                                                                defaultValue={category}
                                                                                selected
                                                                                disabled
                                                                            >
                                                                                {category}
                                                                            </option>
                                                                            <option>
                                                                                Burger
                                                                            </option>
                                                                            <option>
                                                                                Bread
                                                                            </option>
                                                                            <option>
                                                                                Pizza
                                                                            </option>
                                                                            <option>Other</option>
                                                                        </select>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            <div className="row">
                                                                <div className="col-md-12">
                                                                    <div className="form-group">
                                                                        <label htmlFor="form_message">
                                                                            Message *
                                                                        </label>
                                                                        <textarea
                                                                            id="form_message"
                                                                            name="message"
                                                                            className="form-control"
                                                                            placeholder="Write description here."
                                                                            rows="8"
                                                                            required="required"
                                                                            defaultValue={desc}
                                                                        ></textarea>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            <button
                                                                className="btn btn-success mt-3"
                                                                onClick={toggle}
                                                            >
                                                                Confirm Update
                                                            </button>{" "}
                                                            <button
                                                                className="btn btn-secondary mt-3"
                                                                onClick={toggle}
                                                            >
                                                                Cancel
                                                            </button>
                                                        </div>
                                                    </form>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </ModalBody>
                       
                    </Modal>
                </Container>
            </section>
        </Helmet>
    );
};

export default RestaurantFoodDetails;
