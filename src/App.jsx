import "./App.css";
import { Link, Outlet } from "react-router";
import Navbar from "./components/Navbar";
import { useState } from "react";

function App() {
    const [cartItems, setCartItems] = useState([]);
    const cartItemQuantity = cartItems.reduce(
        (accumulator, current) => accumulator + current.quantity,
        0
    );

    return (
        <>
            <Navbar cartItemQuantity={cartItemQuantity} />

            <div className="main-content">
                <Outlet context={[cartItems, setCartItems]} />
            </div>
        </>
    );
}

export default App;
