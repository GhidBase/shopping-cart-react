import { useState } from "react";
import styles from "./ShopItem.module.css";

function ShopItem({ title, price, handleAddToCart, id, image }) {
    const [quantity, setQuantity] = useState(0);
    if (quantity < 0) {
        setQuantity(0);
    }

    return (
        <div className={styles.shopItem}>
            <div className={styles.imgContainer}>
                <img src={image} alt="" />
            </div>
            <div className={styles.itemDetails}>
                <span>{title}</span>
                <span>${price}</span>
            </div>
            <div className={styles.quantities}>
                <button onClick={() => setQuantity(Number(quantity) - 1)}>
                    -
                </button>
                <input
                    type="number"
                    onChange={(e) => setQuantity(+e.target.value)}
                    value={quantity}
                />
                <button onClick={() => setQuantity(Number(quantity) + 1)}>
                    +
                </button>
            </div>

            <button onClick={() => handleAddToCart(title, id, price, quantity)}>
                Add to Cart
            </button>
        </div>
    );
}

export default ShopItem;
