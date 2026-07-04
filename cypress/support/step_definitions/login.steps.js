import { Given, When, Then, DataTable } from '@badeball/cypress-cucumber-preprocessor';

Given(`que eu estou na tela de Login`, () => {
    cy.visit('http://localhost:3000/login.html')
});

When(`eu digito o usuario e senha com os seguintes dados:`, (dataTable) => {
    const users = dataTable.hashes()
    users.forEach(user => {
        cy.login(user.usuario, user.senha, '.fw-bold', user.nome)
    })
});

Then(`devo ser redirecionado para o dashboard`, () => {
    cy.url().should('include', '/dashboard.html')
});

When(`eu digito um usuario com {string}, {string}`, (usuario, senha) => {
    cy.login(usuario, senha)
});

Then(`deve aparecer a mensagem de erro: {string}`, (mensagem) => {
    cy.get('#alert-container').should('contain', mensagem)
});

Then(`deve aparecer a mensagem de validação: {string}`, (mensagem) => {
    cy.get(':nth-child(1) > .invalid-feedback').should('contain', mensagem)
});