import { describe, it, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import App from "../App.jsx";
import { MemoryRouter } from "react-router";
import "@testing-library/jest-dom";
import Shop from "../components/Shop.jsx";

describe("something truthy and falsy", () => {
    it("true to be true", () => {
        expect(true).toBe(true);
    });

    it("false to be false", () => {
        expect(false).toBe(false);
    });
});

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
});
