import styles from "./ShopItem.module.css";

function ShopItem({ title }) {
    return (
        <div className={styles.shopItem}>
            <p>{title}</p>
            <input type="text" />
        </div>
    );
}

export default ShopItem;
