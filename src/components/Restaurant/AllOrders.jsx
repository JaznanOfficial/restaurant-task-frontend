import { Col, Row } from "reactstrap";

import '../../styles/cart-page.css'
// import './AllOrders.css'

const AllOrders = () => {
    return (
        <div className="my-5">
            <div className="container d-flex justify-content-center align-items-center mt-50 mb-50">
                <div className="row">
                    <div className="col-md-12 w-100">
                        <div className="card card-body">
                            <div className="w-100 media align-items-center align-items-lg-start text-center text-lg-left d-flex flex-column flex-lg-row">
                                <div className="mr-2 mb-3 mb-lg-0 ">
                                    <img
                                        src="https://i.imgur.com/5Aqgz7o.jpg"
                                        width="150"
                                        height="150"
                                        alt=""
                                        className="rounded-circle"
                                    />
                                </div>

                                <div className="media-body text-center text-md-start mx-3 p-3">
                                    <h6 className="media-title font-weight-semibold">
                                        <h1 >Md Abdur rahman</h1>
                                    </h6>

                                    <div className="mb-3 mb-lg-2 w-100">
                                        <div>
                                            <address className="text-muted w-100 address" data-abc="true">
                                                ABCD Road, Eiffel Tower, 25th Floor Khulna-9000
                                            </address>
                                        </div>
                                    </div>

                                    {<Row>
                                        <Col>
                                            
                                            <table className="table table-bordered">
                                                <thead>
                                                    <tr>
                                                        <th>Image</th>
                                                        <th>Product Title</th>
                                                        <th>Price</th>
                                                        <th>Quantity</th>
                                                        
                                                    </tr>
                                                </thead>
                                                <tbody>
                                                    <tr>
                                                        <td className="text-center cart__img-box">
                                                            <img src="https://i.imgur.com/5Aqgz7o.jpg" alt="" />
                                                        </td>
                                                        <td className="text-center">{'Double Cheese Margherita'}</td>
                                                        <td className="text-center">${'price'}</td>
                                                        <td className="text-center">
                                                            {'quantity'}px
                                                        </td>
                                                        
                                                    </tr>
                                                </tbody>
                                            </table>
                                            
                                        </Col>
                                    </Row>}
                                </div>

                                <div className="mt-3 mt-lg-0 ml-lg-3 text-center">
                                    <h3 className="mb-0 font-weight-semibold">$459.99</h3>

                                    <div>
                                        <i className="fa fa-star"></i>
                                        <i className="fa fa-star"></i>
                                        <i className="fa fa-star"></i>
                                        <i className="fa fa-star"></i>
                                    </div>

                                    <div className="text-muted">1985 reviews</div>

                                    <button
                                        type="button"
                                        className="btn btn-warning mt-4 text-white"
                                    >
                                        <i className="icon-cart-add mr-2"></i> Add to cart
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
