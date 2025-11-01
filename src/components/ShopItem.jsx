import styles from "./ShopItem.module.css";

function ShopItem({ title, price }) {
    return (
        <div className={styles.shopItem}>
            <div className={styles.itemDetails}>
                <span>{title}</span><span>${price}</span>
            </div>
            <input type="text" />
        </div>
    );
}

export default ShopItem;
