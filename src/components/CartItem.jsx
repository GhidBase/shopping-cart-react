import styles from "./CartItem.module.css";

function CartItem({ title, price, quantity }) {
    return (
        <div className={styles.cartItem}>
            <div className={styles.itemDetails}>
                <div id="leftDetails">
                    <div className={styles.title}>{title}</div>
                    <div className={styles.quantity}>
                        <button>-</button>
                        <input
                            className={styles.quantityField}
                            value={quantity}
                        />
                        <button>+</button>
                    </div>
                </div>
                <span>
                    ${price} <button>Remove</button>
                </span>
            </div>
        </div>
    );
}

export default CartItem;
