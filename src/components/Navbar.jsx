import { Link } from "react-router";
import styles from "./Navbar.module.css";

function Navbar({ cartItemQuantity }) {
    return (
        <div className={styles.navBar}>
            <Link to="/">Homepage</Link>
            <Link to="shop">Shop</Link>
            <Link to="cart/">Cart</Link>
            <span>{cartItemQuantity}</span>
        </div>
    );
}
export default Navbar;
