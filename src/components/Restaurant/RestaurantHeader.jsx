import { Container, Row, Col } from "reactstrap";

import "../../styles/category.css";
import "./Restaurant.css";
import { Link } from "react-router-dom";

const categoryData = [
    {
        display: "All Orders",
        fsClass: "fa-solid fa-rectangle-list",
        link: "all-orders",
    },
    {
        display: "All foods",
        fsClass: "fa-solid fa-burger",
        link: "all-foods",
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
                {categoryData.map((item, index) => (
                    <Col lg="6" md="6" sm="6" xs="6" className="mb-4" key={index}>
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
