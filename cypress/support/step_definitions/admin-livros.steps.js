import { Given, When, Then, DataTable } from '@badeball/cypress-cucumber-preprocessor';

Given(`que eu estou na página de administrador de livros`, () => {
    cy.visit('http://localhost:3000/login.html')
    cy.get('#email').type('admin@biblioteca.com')
    cy.get('#password').type('admin123')
    cy.get('#login-btn').click()
    cy.wait(1000)
    cy.visit('http://localhost:3000/admin-books.html')
    cy.wait(3000)
});

When(`eu adiciono um livro com os dados obrigatórios`, () => {
    // [When] Describes the action or event that triggers the scenario.
});

Then(`deve aparecer uma mensagem: {string}`, (mensagem) => {
    // [Then] Describes the expected outcome or result of the scenario.
});

Given(`existe um livro listado no catálogo`, () => {
    // [Given] Sets up the initial state of the system.
});

When(`eu eudito os detalhes do livro`, () => {
    // [When] Describes the action or event that triggers the scenario.
});

Then(`deve aparecer uma mensagem de atualização: {string}`, (mensagem) => {
    // [Then] Describes the expected outcome or result of the scenario.
});

When(`eu removo o livro do catálogo`, () => {
    // [When] Describes the action or event that triggers the scenario.
});

Then(`deve aparecer uma mensagem de exclusão: {string}`, (mensagem) => {
    // [Then] Describes the expected outcome or result of the scenario.
});