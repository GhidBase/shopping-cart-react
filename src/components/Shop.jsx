import { Link } from "react-router";
import { Fragment } from "react";
import ShopItem from "./ShopItem";
import styles from "./Shop.module.css";

function Shop() {
    return (
        <Fragment>
            <h1>Shop</h1>
            <div className={styles.shop}>
                <ShopItem title="Item 1" price={20} />
                <ShopItem title="Item 2" price={35} />
                <ShopItem title="Item something" price={100} />
            </div>
        </Fragment>
    );
}

export default Shop;
