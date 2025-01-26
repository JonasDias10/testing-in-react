import { render, screen } from "@testing-library/react";
import SignIn from "./sign-in";

describe("This will test the SignIn component", () => {
  test("Should have a title", async () => {
    render(<SignIn />);

    const title = await screen.findByRole("heading", { name: "Sign In" });
    expect(title).toBeInTheDocument();
  });

  test("Should have an email input", async () => {
    render(<SignIn />);

    const email = await screen.findByPlaceholderText("Email");

    expect(email).toBeInTheDocument();
  });

  test("Should have a password input", async () => {
    render(<SignIn />);

    const password = await screen.findByPlaceholderText("Password");
    expect(password).toBeInTheDocument();
  });

  test("Should have a button", async () => {
    render(<SignIn />);

    const button = await screen.findByRole("button", { name: "Sign In" });
    expect(button).toBeInTheDocument();
  });
});
