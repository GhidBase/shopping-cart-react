import { Fragment } from "react";
import { Link } from "react-router";
import styles from "./Cart.module.css";
import CartItem from "./CartItem";

function Cart() {
    return (
        <Fragment>
            <h1>Cart</h1>
            <div className={styles.cart}>
                <CartItem title="Test Item" price={20} quantity={2} />
                <CartItem title="Test Item" price={20} quantity={2} />
            </div>
        </Fragment>
    );
}

export default Cart;
