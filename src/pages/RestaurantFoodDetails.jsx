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
    // const [enteredName, setEnteredName] = useState("");
    // const [enteredEmail, setEnteredEmail] = useState("");
    // const [reviewMsg, setReviewMsg] = useState("");
    const [modal, setModal] = useState(false);
    const [image, setImage] = useState(null);
    const [imagePreview, setImagePreview] = useState(null);

    const { id } = useParams();
    const dispatch = useDispatch();

    const product = products.find((product) => product.id === id);
    const [previewImg, setPreviewImg] = useState(product.image01);
    const { title, price, category, desc, image01 } = product;

    const toggle = () => setModal(!modal);

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

    const imageHandler = (e) => {
        const file = e.target.files[0];
        if (file) {
            setImage(file);
            setImagePreview(URL.createObjectURL(file));
        }
    };

    return (
        <Helmet title="Product-details">
            <CommonSection title={title} />

            <section>
                <Container>
                    <Row className="justify-content-center align-items-center">
                        {/*  <Col lg="2" md="2">
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
                        </Col> */}

                        <Col lg="6" md="6">
                            <div className="product__main-img">
                                <img src={image01} alt="" className="w-100" />
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
                    <Modal isOpen={modal} toggle={toggle} centered>
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
                                                                <div className="my-5 flex items-center shadow-md space-x-6 bg-white p-3 rounded-md">
                                                                    <div className="shrink-0">
                                                                        <img
                                                                            className="h-16 w-16 object-cover rounded-full"
                                                                            src={`${
                                                                                imagePreview
                                                                                    ? imagePreview
                                                                                    : image01
                                                                            }`}
                                                                            alt="food"
                                                                        />
                                                                    </div>
                                                                    <label className="block">
                                                                        <span className="sr-only">
                                                                            Choose profile photo
                                                                        </span>
                                                                        <input
                                                                            type="file"
                                                                            className="block w-full text-sm text-slate-500
                             file:mr-4 file:py-2 file:px-4
                             file:rounded-full file:border-0
                             file:text-sm file:font-semibold
                             file:bg-violet-50 file:text-violet-700
                             hover:file:bg-violet-100
                           "
                                                                            onChange={imageHandler}
                                                                            required
                                                                        />
                                                                    </label>
                                                                </div>
                                                                <div className="col-md-12 my-2">
                                                                    <div className="form-group">
                                                                        <label htmlFor="form_name">
                                                                            Food Name
                                                                        </label>
                                                                        <input
                                                                            defaultValue={title}
                                                                            id="form_name"
                                                                            type="text"
                                                                            name="name"
                                                                            className="form-control"
                                                                            placeholder="Food Name *"
                                                                            required
                                                                        />
                                                                    </div>
                                                                </div>
                                                                <div className="col-md-12  my-2">
                                                                    <div className="form-group">
                                                                        <label htmlFor="form_lastname">
                                                                            Price *
                                                                        </label>
                                                                        <input
                                                                            defaultValue={price}
                                                                            id="form_lastname"
                                                                            type="number"
                                                                            name="surname"
                                                                            className="form-control"
                                                                            placeholder="Food Price *"
                                                                            required
                                                                        />
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            <div className="row">
                                                                <div className="col-md-12  my-2">
                                                                    <div className="form-group">
                                                                        <label htmlFor="form_need">
                                                                            Category *
                                                                        </label>
                                                                        <select
                                                                            id="form_need"
                                                                            name="need"
                                                                            className="form-control"
                                                                            required
                                                                        >
                                                                            <option
                                                                                disabled
                                                                                defaultChecked={
                                                                                    category
                                                                                }
                                                                            >
                                                                                {category}
                                                                            </option>
                                                                            <option>Burger</option>
                                                                            <option>Bread</option>
                                                                            <option>Pizza</option>
                                                                            <option>Other</option>
                                                                        </select>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            <div className="row">
                                                                <div className="col-md-12  my-2">
                                                                    <div className="form-group">
                                                                        <label htmlFor="form_message">
                                                                            Message *
                                                                        </label>
                                                                        <textarea
                                                                            defaultValue={desc}
                                                                            id="form_message"
                                                                            name="message"
                                                                            className="form-control"
                                                                            placeholder="Write description here."
                                                                            rows="8"
                                                                            required
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
