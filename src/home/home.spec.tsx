import { fireEvent, render, screen } from "@testing-library/react";
import Home from "./home";

const navigateMock = vi.fn();

describe("This will test the Home component", () => {
  vi.mock("react-router-dom", () => ({
    useNavigate: () => navigateMock,
  }));

  test("Should have a title", async () => {
    render(<Home />);

    const title = await screen.findByRole("heading", { name: "Home" });
    expect(title).toBeInTheDocument();
  });

  test("Should have a sign out button", async () => {
    render(<Home />);

    const button = await screen.findByRole("button", { name: "Sign Out" });
    expect(button).toBeInTheDocument();
  });

  test("Should call the navigate function when the button is clicked", async () => {
    render(<Home />);

    const button = await screen.findByRole("button", { name: "Sign Out" });
    fireEvent.click(button);

    expect(navigateMock).toHaveBeenCalledTimes(1);
  });
});
