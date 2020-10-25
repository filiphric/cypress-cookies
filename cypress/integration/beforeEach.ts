/// <reference types="cypress" />

beforeEach(() => {
  cy.setCookie('authentication', 'top_secret');
});

it('first test', () => {
  cy.visit('../../app/index.html');
});

it('second test', () => {
  cy.visit('../../app/index.html');
});