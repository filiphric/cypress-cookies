/// <reference types="cypress" />

it('should show cookie', () => {
  cy.setCookie('authentication', 'top_secret');
  cy.visit('../../app/index.html');
});

it('opens a page', () => {
  cy.visit('../../app/index.html');
});