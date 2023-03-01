import { Routes, Route } from "react-router-dom";
import Header from "../components/header/Header";
import Search from "../components/search/Search";
import Basket from "./basket/Basket";
import Home from "./home/Home";
import SignIn from "./login/SignIn"
import Register from "./register/Register"
import Footer from "../components/footer/Footer";
import SingleProduct from "../pages/singleProduct/SingleProduct";
import CategoryProducts from "../pages/categoryProducts/CategoryProducts";

const AllRoutes = () => {
  return (
    <>

      <Header />
      <Search />
      <Routes>
        <Route path="/" element={<Home />} /> 
          <Route path="signIn" element={<SignIn />} />
          <Route path="register" element={<Register />} />
        <Route path="/basket" element={<Basket />} />
        <Route path="/product/:id" element={<SingleProduct/>}/>
        <Route path="/category/:id" element={<CategoryProducts/>}/>
      </Routes>
      <Footer />
    </>
  );
};

export default AllRoutes;
