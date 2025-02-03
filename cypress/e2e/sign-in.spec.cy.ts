describe("This will test the SignIn component", () => {
  it("This will test the SignIn button", () => {
    cy.visit("http://localhost:3000/sign-in");

    cy.get("button").should("have.text", "Sign In");

    cy.get("button").click();

    cy.url().should("eq", "http://localhost:3000/");
  });
});
