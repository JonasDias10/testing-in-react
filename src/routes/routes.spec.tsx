import { render, screen } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import AppRoutes from "./routes";

describe("This will test the routes component", () => {
  test("Should render the Home component", async () => {
    render(
      <MemoryRouter initialEntries={["/"]}>
        <AppRoutes />
      </MemoryRouter>
    );

    const home = screen.getByRole("heading", { name: "Home" });
    expect(home).toBeInTheDocument();
  });

  test("Should render the SignIn component", async () => {
    render(
      <MemoryRouter initialEntries={["/sign-in"]}>
        <AppRoutes />
      </MemoryRouter>
    );

    const signIn = screen.getByRole("heading", { name: "Sign In" });
    expect(signIn).toBeInTheDocument();
  });
});
