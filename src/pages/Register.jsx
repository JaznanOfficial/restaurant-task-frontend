import { useRef } from "react";
import Helmet from "../components/Helmet/Helmet";
import CommonSection from "../components/UI/common-section/CommonSection";
import { Container, Row, Col } from "reactstrap";
import { Link } from "react-router-dom";
import { useState } from "react";

const Register = () => {
    const [image, setImage] = useState(null);
    const [imagePreview, setImagePreview] = useState(null);

    const nameRef = useRef();
    const emailRef = useRef();
    const passwordRef = useRef();

    const imageHandler = (e) => {
        const file = e.target.files[0];
        if (file) {
            setImage(file);
            setImagePreview(URL.createObjectURL(file));
        }
    };

    const submitHandler = (e) => {
        e.preventDefault();
        const name = nameRef.current.value;
        const email = emailRef.current.value;
        const password = passwordRef.current.value;
        // const image = image;
        const registerData = { name, email, password, image }
        console.log(registerData)
    };

    return (
        <Helmet title="Signup">
            <CommonSection title="Signup" />
            <section>
                <Container>
                    <Row>
                        <Col lg="6" md="6" sm="12" className="m-auto text-center">
                            <form className="form mb-5" onSubmit={submitHandler}>
                                <div className="flex my-10 justify-center items-center">
                                    <div className="flex items-center shadow-md space-x-6 bg-white p-3 rounded-md">
                                        <div className="shrink-0">
                                            <img
                                                className="h-16 w-16 object-cover rounded-full"
                                                src={`${
                                                    imagePreview
                                                        ? imagePreview
                                                        : "https://img.freepik.com/free-icon/user_318-159711.jpg"
                                                }`}
                                                alt="user"
                                            />
                                        </div>
                                        <label className="block">
                                            <span className="sr-only">Choose profile photo</span>
                                            <input
                                                type="file"
                                                className="block w-full text-sm text-slate-500
                                                            file:mr-4 file:py-2 file:px-4
                                                            file:rounded-full file:border-0
                                                             file:text-sm file:font-semibold
                                                             file:bg-violet-50 file:text-violet-7 hover:file:bg-violet-100"
                                                onChange={imageHandler}
                                                required
                                                accept=".png,.jpg,.jpeg"
                                            />
                                        </label>
                                    </div>
                                </div>
                                <div className="form__group">
                                    <input
                                        type="text"
                                        placeholder="Full name"
                                        required
                                        ref={nameRef}
                                    />
                                </div>
                                <div className="form__group">
                                    <input
                                        type="email"
                                        placeholder="Email"
                                        required
                                        ref={emailRef}
                                    />
                                </div>
                                <div className="form__group">
                                    <input
                                        type="password"
                                        placeholder="Password"
                                        required
                                        ref={passwordRef}
                                    />
                                </div>
                                <button type="submit" className="btn bg-danger text-white">
                                    Sign Up
                                </button>
                            </form>
                            <Link to="/login">Already have an account? Login</Link>
                        </Col>
                    </Row>
                </Container>
            </section>
        </Helmet>
    );
};

export default Register;
