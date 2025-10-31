import { Link } from "react-router";
import styles from "./Navbar.module.css"

function Navbar() {
    return (
        <div className={styles.navBar}>
            <Link to="/">Homepage</Link>
            <Link to="shop">Shop</Link>
            <Link to="cart/">Cart</Link>
        </div>
    );
}

export default Navbar;
