import styles from "./CartItem.module.css";

function CartItem({
    title,
    price,
    quantity,
    setCartItemQuantity,
    removeCartItem,
    id,
}) {
    return (
        <div className={styles.cartItem}>
            <div className={styles.itemDetails}>
                <div id="leftDetails">
                    <div className={styles.title}>{title}</div>
                    <div className={styles.quantity}>
                        <button
                            onClick={() =>
                                setCartItemQuantity(quantity - 1, id)
                            }
                        >
                            -
                        </button>
                        <input
                            className={styles.quantityField}
                            onChange={(e) =>
                                setCartItemQuantity(e.target.value, id)
                            }
                            value={quantity}
                        />
                        <button
                            onClick={() =>
                                setCartItemQuantity(quantity + 1, id)
                            }
                        >
                            +
                        </button>
                    </div>
                </div>
                <span>
                    ${price}{" "}
                    <button onClick={() => removeCartItem(id)}>Remove</button>
                </span>
            </div>
        </div>
    );
}

export default CartItem;
