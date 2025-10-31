import { Link } from "react-router";

function Navbar() {
    return (
        <div className="nav-bar">
            <Link to="/">Homepage</Link>
            <Link to="shop">Shop</Link>
            <Link to="cart/">Cart</Link>
        </div>
    );
}

export default Navbar;
