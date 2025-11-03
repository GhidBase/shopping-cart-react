import { Link } from "react-router";
import { Fragment, useEffect, useState } from "react";
import ShopItem from "./ShopItem";
import styles from "./Shop.module.css";

function Shop() {
    const [storeData, setStoreData] = useState([]);

    useEffect(() => {
        fetch("https://fakestoreapi.com/products")
            .then((response) => response.json())
            .then((result) => setStoreData(result));
    }, []);

    return (
        <Fragment>
            <h1>Shop</h1>
            <div className={styles.shop}>
                {storeData.length > 0 && storeData.map((shopItem) => {
                    return (
                        <ShopItem
                            key={shopItem.id}
                            title={shopItem.title}
                            price={shopItem.price}
                        />
                    );
                })}
            </div>
        </Fragment>
    );
}

export default Shop;
