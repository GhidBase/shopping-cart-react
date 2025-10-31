import App from "./App";
import Cart from "./components/Cart";
import Shop from "./components/Shop";
import Home from "./components/Home";

const routes = [
    {
        path: "/",
        element: <App />,
        errorElement: <App />,
        children: [
            { path: "shop/", element: <Shop /> },
            { path: "cart/", element: <Cart /> },
            { path: "/", element: <Home /> },
        ],
    },
];

export default routes;
