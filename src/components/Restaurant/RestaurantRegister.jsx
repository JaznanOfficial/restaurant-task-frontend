import { useRef } from "react";
import Helmet from "../Helmet/Helmet";
import CommonSection from "../UI/common-section/CommonSection";
import { Container, Row, Col } from "reactstrap";
import "../../styles/all-foods.css";

const RestaurantRegister = () => {
    const nameRef = useRef();

    const submitHandler = (e) => {
        e.preventDefault();
    };

    return (
        <Helmet title="Signup">
            <CommonSection title="Register Your Restaurant" />
            <section>
                <Container>
                    <Row>
                        <Col lg="6" md="6" sm="12" className="m-auto text-center">
                            <form className="form mb-5" onSubmit={submitHandler}>
                                <div className="form__group">
                                    <input
                                        type="text"
                                        placeholder="Restaurant Name"
                                        required
                                        ref={nameRef}
                                    />
                                </div>

                                <button type="submit" className="addTOCart__btn">
                                    Register
                                </button>
                            </form>
                            {/*               <Link to="/login">Already have an account? Login</Link>
                             */}{" "}
                        </Col>
                    </Row>
                </Container>
            </section>
        </Helmet>
    );
};

export default RestaurantRegister;
