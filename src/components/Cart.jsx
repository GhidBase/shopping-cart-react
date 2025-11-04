import { Fragment } from "react";
import { Link, useOutletContext } from "react-router";
import styles from "./Cart.module.css";
import CartItem from "./CartItem";

function Cart() {
    const [cartItems, setCartItems] = useOutletContext();

    function parseCart() {
        console.log("cart items");
        return cartItems.map((item) => {
            console.log(item);
            return (
                <CartItem
                    key={item.id}
                    title={item.title}
                    quantity={item.quantity}
                    price={item.price}
                />
            );
        });
    }

    return (
        <Fragment>
            <h1>Cart</h1>
            <div className={styles.cart}>{parseCart()}</div>
        </Fragment>
    );
}

export default Cart;
