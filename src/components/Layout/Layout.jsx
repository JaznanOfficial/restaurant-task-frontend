
import Header from "../Header/Header.jsx";
import Footer from "../Footer/Footer.jsx";

import Carts from "../UI/cart/Carts.jsx";
import { useSelector } from "react-redux";
import Routers from "../../routes/Routers.jsx";

const Layout = () => {
  const showCart = useSelector((state) => state.cartUi.cartIsVisible);
  return (
    <div>
      <Header />

      {showCart && <Carts />}

      <div>
        <Routers />
      </div>
      <Footer />
    </div>
  );
};

export default Layout;
