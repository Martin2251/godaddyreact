/// <reference types="cypress" />

context("Actions", () => {
  beforeEach(() => {
    cy.visit("http://localhost:3000");
  });

  // https://on.cypress.io/interacting-with-elements

  it(".type() - type into a DOM element", () => {
    // https://on.cypress.io/type
    cy.wait(3000);
    cy.get("[data-cy=gdapi-php]").click();
    cy.location().should((location) => {
      expect(location.pathname).to.eq("/api/gdapi-php");
    });
  });
});
