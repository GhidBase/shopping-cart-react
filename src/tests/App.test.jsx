import { describe, it, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import App from "../App.jsx";
import { MemoryRouter, RouterProvider, createMemoryRouter } from "react-router";
import "@testing-library/jest-dom";
import Shop from "../components/Shop.jsx";
import userEvent from "@testing-library/user-event";
import routes from "../routes.jsx";

describe("Webpages", () => {
    it("Homepage shows menu options", () => {
        render(
            <MemoryRouter initialEntries={["/"]}>
                <App title="React" />
            </MemoryRouter>
        );
        expect(screen.getByText("Go to shop")).toBeInTheDocument();
    });
    it('Shop shows "Back to main"', () => {
        render(
            <MemoryRouter initialEntries={["/"]}>
                <Shop />
            </MemoryRouter>
        );
        expect(screen.getByText("Back to main")).toBeInTheDocument();
    });

    it("Clicking link to shop navigates there", async () => {
        const router = createMemoryRouter(routes, {
            initialEntries: ["/"],
        });
        render(<RouterProvider router={router} />);
        const user = userEvent.setup();
        const shopLink = screen.getByText("Go to shop");
        expect(shopLink).toBeInTheDocument();
        await user.click(shopLink);
        const shop = await screen.findByText("Shop");
        expect(shop).toBeInTheDocument();
    });
});
