import { describe, it, expect, beforeAll } from "vitest";
import { render, screen } from "@testing-library/react";
import App from "../App.jsx";
import { MemoryRouter, RouterProvider, createMemoryRouter } from "react-router";
import "@testing-library/jest-dom";
import Shop from "../components/Shop.jsx";
import userEvent from "@testing-library/user-event";
import routes from "../routes.jsx";

describe("Webpages", () => {
    it("Navigation bar is always visible", async () => {
        const router = createMemoryRouter(routes, {
            initialEntries: ["/"],
        });
        render(<RouterProvider router={router} />);
        const user = userEvent.setup();
        const shopLink = screen.getByText("Shop");

        expect(shopLink).toBeInTheDocument();
        await user.click(shopLink);
        expect(shopLink).toBeInTheDocument();
    });
});

describe("Shop cards", () => {
    let router;
    let user;
    let shopLink;
    let shopItemInputs;
    let shopItemDecrements;
    let shopItemincrements;
    let storeAddToCartButtons;

    beforeAll(async () => {
        router = createMemoryRouter(routes, {
            initialEntries: ["/"],
        });
        render(<RouterProvider router={router} />);
        user = userEvent.setup();
        shopLink = screen.getByText("Shop");
        await user.click(shopLink);
        shopItemInputs = await screen.findAllByRole("spinbutton");
        shopItemDecrements = await screen.findAllByText("-");
        shopItemincrements = await screen.findAllByText("+");
        storeAddToCartButtons = await screen.findAllByText("Add to Cart");
    });

    it("Incrementing/decrementing works", async () => {
        const input1 = shopItemInputs[0];
        const input1StartingValue = input1.value;

        await user.click(shopItemincrements[0]);
        expect(+input1.value).toBe(+input1StartingValue + 1);
        await user.click(shopItemDecrements[0]);
        expect(+input1.value).toBe(+input1StartingValue);
    });

    it("Decrementing can't take the number below 0", async () => {
        const input1 = shopItemInputs[0];

        expect(+input1.value).toBe(0);
        await user.click(shopItemDecrements[0]);
        expect(+input1.value).toBe(0);
    });

    it("FakeStoreAPI renders more than 5 items in the shop", async () => {
        expect(storeAddToCartButtons.length).toBeGreaterThan(5);
    });
});

describe("Shop items can be added to the cart", () => {
    let router;
    let user;
    let shopLink;
    // let shopItemInputs;
    // let shopItemDecrements;
    // let shopItemincrements;
    // let storeAddToCartButtons;

    beforeAll(async () => {
        router = createMemoryRouter(routes, {
            initialEntries: ["/"],
        });
        render(<RouterProvider router={router} />);
        user = userEvent.setup();
        shopLink = screen.getByText("Shop");
        await user.click(shopLink);
        // shopItemInputs = await screen.findAllByRole("spinbutton");
        // shopItemDecrements = await screen.findAllByText("-");
        // shopItemincrements = await screen.findAllByText("+");
        // storeAddToCartButtons = await screen.findAllByText("Add to Cart");
    });

    it("Selected items show up in the cart", async () => {
        const cartItems = await screen.findAllByText("Remove");
        expect(cartItems.length).toBe(2);
    });
});
 