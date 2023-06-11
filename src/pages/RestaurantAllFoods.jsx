import { useState } from "react";
import Helmet from "../components/Helmet/Helmet";
import CommonSection from "../components/UI/common-section/CommonSection";

import { Container, Row, Col, Modal, ModalHeader, ModalBody } from "reactstrap";

import products from "../assets/fake-data/products";
// import ProductCard from "../components/UI/product-card/ProductCard";
import ReactPaginate from "react-paginate";
// import RestaurantProductCard from "./RestaurantProductCard";

import "../styles/all-foods.css";
import "../styles/pagination.css";
import RestaurantProductCard from "./RestaurantProductCard";

const RestaurantAllFoods = () => {
    const [searchTerm, setSearchTerm] = useState("");

    const [pageNumber, setPageNumber] = useState(0);
    const [modal, setModal] = useState(false);

    const searchedProduct = products.filter((item) => {
        if (searchTerm.value === "") {
            return item;
        }
        if (item.title.toLowerCase().includes(searchTerm.toLowerCase())) {
            return item;
        } else {
            return console.log("not found");
        }
    });

    const productPerPage = 8;
    const visitedPage = pageNumber * productPerPage;
    const displayPage = searchedProduct.slice(visitedPage, visitedPage + productPerPage);

    const pageCount = Math.ceil(searchedProduct.length / productPerPage);

    const changePage = ({ selected }) => {
        setPageNumber(selected);
    };

    const toggle = () => setModal(!modal);

    return (
        <Helmet title="All-Foods">
            <CommonSection title="Restaurant's All Foods" />

            <section>
                <Container>
                    <Row>
                        <Col lg="4" md="4" sm="6" xs="12">
                            <div className="search__widget d-flex align-items-center justify-content-between ">
                                <input
                                    type="text"
                                    placeholder="I'm looking for...."
                                    value={searchTerm}
                                    onChange={(e) => setSearchTerm(e.target.value)}
                                />
                                <span>
                                    <i className="ri-search-line"></i>
                                </span>
                            </div>
                        </Col>
                        <Col lg="4" md="4" sm="6" xs="12" className="mb-5">
                            <div className="sorting__widget text-end">
                                <select className="w-50">
                                    <option>Default</option>
                                    <option value="ascending">Alphabetically, A-Z</option>
                                    <option value="descending">Alphabetically, Z-A</option>
                                    <option value="high-price">High Price</option>
                                    <option value="low-price">Low Price</option>
                                </select>
                            </div>
                        </Col>
                        <Col lg="4" md="4" sm="6" xs="12" className="mb-5">
                            <button className="btn btn-danger mx-2 w-100" onClick={toggle}>
                                Add Item
                            </button>
                        </Col>

                        {displayPage.map((item) => (
                            <Col lg="3" md="4" sm="6" xs="6" key={item.id} className="mb-4">
                                <RestaurantProductCard item={item} />
                            </Col>
                        ))}

                        <div>
                            <ReactPaginate
                                pageCount={pageCount}
                                onPageChange={changePage}
                                previousLabel={"Prev"}
                                nextLabel={"Next"}
                                containerClassName=" paginationBttns "
                            />
                        </div>
                    </Row>
                </Container>
            </section>
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
                                                                />
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="row">
                                                        <div className="col-md-12">
                                                            <div className="form-group">
                                                                <label htmlFor="form_need">
                                                                    Category *
                                                                </label>
                                                                <select
                                                                    id="form_need"
                                                                    name="need"
                                                                    className="form-control"
                                                                    required="required"
                                                                >
                                                                    <option>Burger</option>
                                                                    <option>Bread</option>
                                                                    <option>Pizza</option>
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
        </Helmet>
    );
};

export default RestaurantAllFoods;
