import { Container, Row, Col } from "reactstrap";

import "../../styles/category.css";
import "./Restaurant.css";
import { Link } from "react-router-dom";

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
    return (
        <Container>
            <Row>
                <Col lg="4" md="4" sm="12" xs="12" className="mb-4">
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
        </Container>
    );
};

export default RestaurantHeader;
