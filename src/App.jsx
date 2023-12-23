import NavBar from "./components/NavBar";
import ItemListContainer from "./components/Item/ItemListContainer";
import ItemDetailContainer from "./components//Item/ItemDetailContainer";
import Cart from "./components/cart/cart.jsx";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Contact from "./components/Contact/contact.jsx"
import { useState } from "react";
import { CartProvider } from "./context/CartContext"

console.log(Contact)


function App() {


  return (
    <div>

      <CartProvider>
        <BrowserRouter>

          <NavBar />

          <Routes>
            <Route path="/" element={<ItemListContainer />} />
            <Route path="/item/:id" element={<ItemDetailContainer />} />
            <Route path="/productos/:category" element={<ItemListContainer />} />
            <Route path="/contacto" element={<Contact />} />
            <Route path="/carrito" element={<Cart />} />



          </Routes>






        </BrowserRouter>

      </CartProvider>






    </div>
  );
}

export default App;
