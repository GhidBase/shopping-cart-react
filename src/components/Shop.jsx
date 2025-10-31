import { Link } from "react-router";
import { Fragment } from "react";
import ShopItem from "./ShopItem";
import styles from "./Shop.module.css";

function Shop() {
    return (
        <div className={styles.shop}>
            <h1>Shop</h1>
            <ShopItem title="Item 1" />
            <ShopItem title="Item 2" />
        </div>
    );
}

export default Shop;
