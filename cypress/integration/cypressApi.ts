/// <reference types="cypress" />

// Cypress.Cookies.defaults({
//   preserve: 'authentication'
// })

it('first test', () => {
  cy.setCookie('authentication', 'top_secret');
  cy.visit('../../app/index.html');
});

it('second test', () => {
  cy.visit('../../app/index.html');
});