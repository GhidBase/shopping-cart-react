import "./App.css";
import { Link, Outlet } from "react-router";
import Navbar from "./components/Navbar";
import { useState } from "react";

function App() {
    const [cartItems, setCartItems] = useState([]);

    return (
        <>
            <Navbar />

            <div className="main-content">
                <Outlet context={[cartItems, setCartItems]} />
            </div>
        </>
    );
}

export default App;
