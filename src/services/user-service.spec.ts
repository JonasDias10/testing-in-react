import { Mock } from "vitest";
import { User } from "../types/user";

globalThis.fetch = vi.fn();

function createFetchResponse(data: any) {
  return { json: () => new Promise((resolve) => resolve(data)) };
}

describe("This will test the user service", () => {
  test("Should return a list of users", async () => {
    const users: User[] = [
      {
        id: 1,
        name: "John Doe",
        username: "johndoe",
        email: "johndoe@me.com",
      },
      {
        id: 2,
        name: "Jane Doe",
        username: "janedoe",
        email: "janedoe@me.com",
      },
    ];

    (fetch as Mock).mockResolvedValue(createFetchResponse(users));

    const response = await fetch("https://jsonplaceholder.typicode.com/users");

    const data = await response.json();

    expect(fetch).toHaveBeenCalledWith(
      "https://jsonplaceholder.typicode.com/users"
    );

    expect(data).toStrictEqual(users);
  });
});
