import { BrowserRouter, Link, Route, Routes } from "react-router-dom";
import Home from "./Home";
import Veg from "./Veg";
import Cart from "./Cart";
import PurchaseHistory from "./PurchaseHistory";
import AboutUs from "./AboutUs";
import ContactUs from "./ContactUs";
import './App.css';
import { useSelector } from "react-redux";
import Nonveg from "./Nonveg";
import GoogleLoginComp from "./GoogleLoginComp";
import { GoogleOAuthProvider } from "@react-oauth/google";

function App() {
  const cart = useSelector((state) => state.cart);
  const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0)

  return (
    <>
      <h1 style={{ color: 'orange' }}>This is Main Page</h1>
      <GoogleOAuthProvider clientId="134471366672-11okmhefqe2lkokls79eqo1m7n509n0h.apps.googleusercontent.com">
      <GoogleLoginComp />
      </GoogleOAuthProvider>

      <BrowserRouter>
        <nav>
          <Link to='/'>Home</Link>
          <Link to='/Veg'>Veg Items</Link>
          <Link to='/Nonveg'>Non-veg Items</Link>
          <Link to='/Cart'>Cart {totalItems}</Link>
          <Link to='/PurchaseHistory'>Purchase History</Link>
          <Link to='/AboutUs'>About Us</Link>
          <Link to='/ContactUs'>Contact Us</Link>
        </nav>

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Veg" element={<Veg />} />
          <Route path="/Nonveg" element={<Nonveg/>} />
          <Route path="/Cart" element={<Cart />} />
          <Route path="/PurchaseHistory" element={<PurchaseHistory />} />
          <Route path="/AboutUs" element={<AboutUs />} />
          <Route path="/ContactUs" element={<ContactUs />} />
        </Routes>
      </BrowserRouter>
      
    </>
  );
}

export default App;
