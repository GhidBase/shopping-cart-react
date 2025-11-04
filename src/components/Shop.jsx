import { Link } from "react-router";
import { Fragment, useEffect, useState } from "react";
import ShopItem from "./ShopItem";
import styles from "./Shop.module.css";
import { useOutletContext } from "react-router";

function Shop() {
    const [storeData, setStoreData] = useState([]);
    const [cartItems, setCartItems] = useOutletContext();

    useEffect(() => {
        fetch("https://fakestoreapi.com/products")
            .then((response) => response.json())
            .then((result) => setStoreData(result));
    }, []);

    function handleAddToCart(title, id, price, quantity) {
        // findIndex returns -1 if there's no result
        // I use that to decide whether to push or to update
        const itemIndex = cartItems.findIndex((item) => item.id == id);
        let newCartItems = [...cartItems];
        if (itemIndex > -1) {
            newCartItems[itemIndex].quantity += quantity;
        } else {
            newCartItems.push({
                title: title,
                quantity: quantity,
                id: id,
                price: price,
            });
        }
        console.log(newCartItems);
        setCartItems(newCartItems);
    }

    return (
        <Fragment>
            <h1>Shop</h1>
            <div className={styles.shop}>
                {storeData.length > 0 &&
                    storeData.map((shopItem) => {
                        return (
                            <ShopItem
                                key={shopItem.id}
                                originalItem={shopItem}
                                id={shopItem.id}
                                title={shopItem.title}
                                price={shopItem.price}
                                handleAddToCart={handleAddToCart}
                            />
                        );
                    })}
            </div>
        </Fragment>
    );
}

export default Shop;
