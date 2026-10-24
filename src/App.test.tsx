import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";

import App from "./App";

describe("App", () => {
  it("renders the landing page sections", () => {
    render(<App />);

    expect(
      screen.getByRole("heading", { name: /best value position/i })
    ).toBeInTheDocument();
    expect(
      screen.getByRole("button", { name: /start free trial/i })
    ).toBeInTheDocument();
    expect(screen.getByText(/some world's best companies/i)).toBeInTheDocument();
    expect(screen.getByText(/legend 1/i)).toBeInTheDocument();
    expect(screen.getByText(/© 2022 jason company/i)).toBeInTheDocument();
  });
});
