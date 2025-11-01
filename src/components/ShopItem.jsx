import styles from "./ShopItem.module.css";

function ShopItem({ title, price }) {
    return (
        <div className={styles.shopItem}>
            <div className={styles.itemDetails}>
                <span>{title}</span>
                <span>${price}</span>
            </div>
            <div className={styles.quantities}>
                <input type="text" />
                <button>Add to Cart</button>
            </div>
        </div>
    );
}

export default ShopItem;
