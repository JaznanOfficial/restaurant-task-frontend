import Header from "../../components/Header";
import NavIcon from "../../components/NavIcon";
import Home from "../../components/Home";
import About from "../../components/About";
import Recipe from "../../components/Recipe";
import Contact from "../../components/Contact";
import Footer from "../../components/Footer";

const HomePage = () => {
    return (
        <div >
            <Header />
            <NavIcon />
            <Home />
            <About />
            <Recipe />
            <Contact />
            <Footer />
        </div>
    );
};

export default HomePage;
