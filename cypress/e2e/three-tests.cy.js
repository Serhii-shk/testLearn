/// <reference types="cypress" />

describe('Three tests', () => {

  it('Playwright test', () => {

    cy.visit('https://playwright.dev/')
    cy.contains('Get started').click();
    cy.wait(2000);

  })

  it('Book of the JS test', () => {

    cy.visit('https://learn.javascript.ru/css-selectors')
    cy.get('a[href="https://javascript.ru/forum/"]').click();
    cy.wait(2000);


  })

  it('Google test', () => {

    cy.visit('https://playwright.dev/')
    cy.get('[title="Поиск"]').type('Де знаходиться Україна?')
    cy.contains('Поиск в Google').click();
    cy.wait(2000);

  })

})
