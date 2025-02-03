describe("Home Page", () => {
  beforeEach(() => {
    cy.intercept("GET", "https://jsonplaceholder.typicode.com/users", {
      fixture: "users.json",
    }).as("fetchUsers");

    cy.visit("/");
  });

  it("should display the list of users", () => {
    cy.wait("@fetchUsers");

    cy.get("li").should("have.length", 3);
    cy.contains("Name: John Doe").should("be.visible");
    cy.contains("Email: johndoe@example.com").should("be.visible");
  });

  it("should navigate to sign-in page on sign out", () => {
    cy.get("button").contains("Sign Out").click();
    cy.url().should("include", "/sign-in");
  });
});
