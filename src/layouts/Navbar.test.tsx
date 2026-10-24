import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { describe, expect, it } from "vitest";

import Navbar from "./Navbar";

describe("Navbar", () => {
  it("renders every navigation entry and the sign up button", () => {
    render(<Navbar />);

    for (const label of ["Link 1", "Link 2", "Link 3", "Link 4", "Sign Up"]) {
      expect(screen.getByText(label)).toBeInTheDocument();
    }
  });

  it("toggles the mobile menu when the menu button is clicked", async () => {
    const user = userEvent.setup();
    render(<Navbar />);

    const toggle = screen.getByRole("button", { name: /open main menu/i });
    const menu = screen.getByRole("menu", { hidden: true });

    expect(menu).toHaveClass("hidden");

    await user.click(toggle);
    expect(menu).not.toHaveClass("hidden");

    await user.click(toggle);
    expect(menu).toHaveClass("hidden");
  });
});
