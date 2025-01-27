import { fireEvent, render, screen } from "@testing-library/react";
import { fetchUsers } from "../services/user-service";
import Home from "./home";

const navigateMock = vi.fn();

const mockFn = vi.fn(fetchUsers);

const mockFetchUsersImplementation = mockFn.mockImplementation(() => {
  return new Promise((resolve) => {
    resolve([
      {
        id: 1,
        name: "John Doe",
        username: "johndoe",
        email: "johndoe@me.com",
      },
    ]);
  });
});

describe("This will test the Home component", () => {
  vi.mock("react-router-dom", () => ({
    useNavigate: () => navigateMock,
  }));

  test("Should have a title", async () => {
    render(<Home fetchUsers={mockFetchUsersImplementation} />);

    const title = await screen.findByRole("heading", { name: "Home" });
    expect(title).toBeInTheDocument();
  });

  test("Should have a sign out button", async () => {
    render(<Home fetchUsers={mockFetchUsersImplementation} />);

    const button = await screen.findByRole("button", { name: "Sign Out" });
    expect(button).toBeInTheDocument();
  });

  test("Should call the navigate function when the button is clicked", async () => {
    render(<Home fetchUsers={mockFetchUsersImplementation} />);

    const button = await screen.findByRole("button", { name: "Sign Out" });
    fireEvent.click(button);

    expect(navigateMock).toHaveBeenCalledTimes(1);
  });

  test("Should have a list of users", async () => {
    render(<Home fetchUsers={mockFetchUsersImplementation} />);

    const userList = await screen.findAllByRole("listitem");
    expect(userList).toHaveLength(1);

    const userName = screen.getByText("Name: John Doe");
    const userEmail = screen.getByText("Email: johndoe@me.com");
    const userUsername = screen.getByText("Username: johndoe");

    expect(userName).toBeInTheDocument();
    expect(userEmail).toBeInTheDocument();
    expect(userUsername).toBeInTheDocument();
  });
});
