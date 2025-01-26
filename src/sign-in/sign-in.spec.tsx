import { fireEvent, render, screen } from "@testing-library/react";
import SignIn from "./sign-in";

const navigateMock = vi.fn();

describe("This will test the SignIn component", () => {
  vi.mock("react-router-dom", () => ({
    useNavigate: () => navigateMock,
  }));

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

  test("Should call the navigate function when the button is clicked", async () => {
    render(<SignIn />);

    const button = await screen.findByRole("button", { name: "Sign In" });

    fireEvent.click(button);

    expect(navigateMock).toHaveBeenCalledTimes(1);
  });
});
