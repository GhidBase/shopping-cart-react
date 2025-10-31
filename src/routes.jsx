import App from "./App";
import Cart from "./components/Cart";
import Shop from "./components/Shop";

const routes = [
    {
        path: "/",
        element: <App />,
        errorElement: <App />,
    },
    {
        path: "shop/",
        element: <Shop />,
    },
    {
        path: "cart/",
        element: <Cart />,
    },
];

export default routes;
