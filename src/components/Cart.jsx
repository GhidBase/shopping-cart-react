import { Fragment } from "react";
import { Link, useOutletContext } from "react-router";
import styles from "./Cart.module.css";
import CartItem from "./CartItem";

function Cart() {
    const [cartItems, setCartItems] = useOutletContext();

    function removeCartItem(id) {
        const itemIndex = cartItems.findIndex((item) => item.id == id);
        let newItems = [...cartItems];
        if (itemIndex != -1) {
            newItems.splice(itemIndex, 1);
        }
        setCartItems(newItems);
    }

    function setCartItemQuantity(newQuantity, id) {
        if (newQuantity < 0) {
            newQuantity = 0;
        }
        const itemIndex = cartItems.findIndex((item) => item.id == id);
        let newItems = [...cartItems];
        if (itemIndex != -1) {
            newItems[itemIndex].quantity = newQuantity;
        } else {
            console.log("Item not found????");
        }
        setCartItems(newItems);
    }

    function parseCart() {
        return cartItems.map((item) => {
            return (
                <CartItem
                    key={item.id}
                    id={item.id}
                    title={item.title}
                    quantity={item.quantity}
                    price={item.price}
                    removeCartItem={removeCartItem}
                    setCartItemQuantity={setCartItemQuantity}
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
