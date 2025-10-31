import { describe, it, expect } from "vitest";
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
