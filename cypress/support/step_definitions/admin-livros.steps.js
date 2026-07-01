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
    cy.get('.btn-success').click()
    cy.get('#book-title').type('Livro teste')
    cy.get('#book-author').type('Autor teste', { force: true })
    cy.get('#book-category').select('Infantil')
    cy.get('#book-copies').type(2)
    cy.get('#save-book-btn').click()
    cy.wait(3000)
});

Then(`deve aparecer uma mensagem: {string}`, (mensagem) => {
    cy.get('#alert-container').should('contain', mensagem)
});

Given(`existe um livro listado no catálogo`, () => {
    cy.get('#search-input').type('Livro para deletar')
    cy.wait(2000)
});

When(`eu eudito os detalhes do livro`, () => {
    cy.get(':nth-child(7) > .btn-outline-primary').click()
    cy.wait(1000)
    cy.get('#book-category').select('Aventura')
    cy.get('#save-book-btn').click()
});

Then(`deve aparecer uma mensagem de atualização: {string}`, (mensagem) => {
    cy.get('#alert-container').should('contain', mensagem)
});

When(`eu removo o livro do catálogo`, () => {
    cy.get(':nth-child(7) > .btn-outline-danger').click()
    cy.get('#confirm-delete-btn').click()
});

Then(`deve aparecer uma mensagem de exclusão: {string}`, (mensagem) => {
    cy.get('#alert-container').should('contain', mensagem)
});