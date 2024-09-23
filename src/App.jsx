import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./component/Navbar";
import Footer from "./component/Footer";
import Home from "./pages/Home"
import Shop from "./component/Shop"
import Cart from "./pages/Cart";
import Checkout from "./pages/Checkout";
import { useState } from "react";
import Order from "./pages/Order";
import FilterData from "./pages/FilterData"
import ProductData from "./pages/ProductData";

function App() {
  
  const[order, setOrder] = useState(null)
  return ( 
    <BrowserRouter>
    <Navbar />
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/shop" element={<Shop />} />
      <Route path="/cart" element={<Cart />} />
      <Route path="/checkout" element={<Checkout setOrder={setOrder} />} />
      <Route path="/order-confirmation" element={<Order order={order} />} />
      <Route path="/filter-data" element={<FilterData />} />
      <Route path="/product/:id" element={<ProductData />} />
    </Routes>
    <Footer />
    </BrowserRouter>
    
   )
}

export default App;