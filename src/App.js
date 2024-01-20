import "./App.css";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/home";
import Cart from "./pages/cart";
import Navbar from "./components/navbar";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="">
      <Navbar />
       <Routes>
          <Route exact path="/" element={<Home/>}  />
          <Route  path="/cart" element={<Cart/>}  />

       </Routes>
     {/*  <h1>Footer</h1> */}
      <Footer />
    </div>
  );
}

export default App;
