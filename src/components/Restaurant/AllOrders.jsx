import { Col, Row } from "reactstrap";
import "../../styles/cart-page.css";
import "./AllOrders.css";

const AllOrders = () => {
    return (
        <div>
            <div className="container mt-5 mb-5">
                <div className="d-flex justify-content-center row">
                    <div className="col-md-12">
                        <div className="row p-2 bg-white border rounded">
                            <div className="col-md-3 mt-1">
                                <img
                                    className="img-fluid img-responsive rounded product-image "
                                    src="https://i.imgur.com/QpjAiHq.jpg"
                                />
                            </div>
                            <div className="col-md-6 mt-1">
                                <h3 className="text-center text-md-start">Md Abdur Rahman</h3>

                                <p className="text-justify text-truncate para mb-0">
                                    There are many variations of passages of Lorem Ipsum available,
                                    <br />
                                    <br />
                                </p>
                                {
                                    <Row>
                                        <Col className="w-100">
                                            <table className="table table-bordered">
                                                <thead>
                                                    <tr>
                                                        <th className="text-center">Image</th>
                                                        <th className="text-center">
                                                            Product Title
                                                        </th>
                                                        <th className="text-center">Price</th>
                                                        <th className="text-center">Quantity</th>
                                                    </tr>
                                                </thead>
                                                <tbody>
                                                    <tr>
                                                        <td className="text-center cart__img-box">
                                                            <img
                                                                src="https://i.imgur.com/5Aqgz7o.jpg"
                                                                alt=""
                                                                className="order_image"
                                                            />
                                                        </td>
                                                        <td className="text-center">
                                                            {"Double Cheese Margherita"}
                                                        </td>
                                                        <td className="text-center">${"120"}</td>
                                                        <td className="text-center">{"3"}</td>
                                                    </tr>
                                                </tbody>
                                            </table>
                                        </Col>
                                    </Row>
                                }
                            </div>
                            <div className="align-items-center align-content-center col-md-3 border-left mt-1">
                                <h4 className="badge text-bg-info text-white fs-6 text-center text-md-start">
                                    Pending...
                                </h4>

                                <h2 className="mr-1 text-center text-md-start">$13.99</h2>

                                <h6 className="text-success text-center text-md-start">
                                    Free shipping
                                </h6>
                                <div className="d-flex flex-column mt-4 text-center text-md-start">
                                    <button className="btn btn-success btn-sm" type="button">
                                        Accept
                                    </button>
                                    <button className="addTOCart__btn btn-sm mt-2" type="button">
                                        Reject
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AllOrders;
