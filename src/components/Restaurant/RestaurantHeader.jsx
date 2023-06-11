import { Container, Row, Col, Modal, ModalHeader, ModalBody, Alert, ModalFooter } from "reactstrap";

import "../../styles/category.css";
import "./Restaurant.css";
import { Link } from "react-router-dom";
import { useState } from "react";

const categoryData = [
    {
        display: "All Orders",
        fsClass: "fa-solid fa-rectangle-list",
        link: "",
    },
    {
        display: "All foods",
        fsClass: "fa-solid fa-burger",
        link: "rs-all-foods",
    },

    // {
    //     display: "Asian Food",
    //     imgUrl: categoryImg03,
    // },

    // {
    //     display: "Row Meat",
    //     imgUrl: categoryImg04,
    // },
];

const RestaurantHeader = () => {
    const [modal, setModal] = useState(false);

    const toggle = () => setModal(!modal);

    return (
        <Container>
            <Row>
                <Col lg="4" md="4" sm="12" xs="12" className="mb-4" onClick={toggle}>
                    <div className="category__item d-flex align-items-center gap-3 justify-content-center">
                        <div className="category__img">
                            <i className={`fa-solid fa-bell icons text-5xl`}></i>
                        </div>
                        <h6>Notification</h6>
                        <span className="badge bg-success"> 3</span>
                    </div>
                </Col>
                {categoryData.map((item, index) => (
                    <Col lg="4" md="4" sm="6" xs="6" className="mb-4" key={index}>
                        <Link
                            to={item.link}
                            className="category__item d-flex align-items-center gap-3 justify-content-center"
                        >
                            <div className="category__img">
                                <i className={`${item.fsClass} icons text-5xl`}></i>
                            </div>
                            <h6>{item.display}</h6>
                        </Link>
                    </Col>
                ))}
            </Row>

            <Modal isOpen={modal} toggle={toggle} centered >
                <ModalHeader toggle={toggle}>
                    {" "}
                    <div className="d-flex justify-content-center">
                        <h1 className="text-center">Notification</h1>
                    </div>
                </ModalHeader>
                <ModalBody>
                    <div className="container">
                        <div className="row ">
                            <div className=" mx-auto">
                                <div className="card mt-2 mx-auto p-1 bg-light">
                                    <div className="card-body bg-light">
                                        <div>
                                            <Alert><strong>You have a new order please check your order page!</strong></Alert>
                                            <Alert color="danger">
                                                This is a primary alert — check it out!
                                            </Alert>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </ModalBody>
                <ModalFooter>
                    <button className="btn btn-danger mx-2">Remove All Notification</button>
                </ModalFooter>
            </Modal>
        </Container>
    );
};

export default RestaurantHeader;
