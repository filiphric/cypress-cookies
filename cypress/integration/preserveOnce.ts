/// <reference types="cypress" />

before(() => {
  cy.setCookie('authentication', 'top_secret');
});

beforeEach(() => {
  Cypress.Cookies.preserveOnce('authentication')
});

it('first test', () => {
  cy.visit('../../app/index.html');
});

it('second test', () => {
  cy.visit('../../app/index.html');
});