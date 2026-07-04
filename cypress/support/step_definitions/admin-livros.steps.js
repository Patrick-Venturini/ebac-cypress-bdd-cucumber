import { Given, When, Then, DataTable, Before } from '@badeball/cypress-cucumber-preprocessor';

Before({ tags: '@admin' }, () => {
    cy.login('admin@biblioteca.com', 'admin123', 'h1', 'Painel Administrativo')
})

Given(`que eu estou na página de administrador de livros`, () => {
    cy.visit('/admin-books.html')
    cy.get('h1').should('contain', 'Gerenciar Livros')
});

When(`eu adiciono um livro com os dados obrigatórios`, () => {
    cy.adicionarLivro('Livro teste', 'Autor Teste', 'Aventura', 2)
});

Then(`deve aparecer uma mensagem: {string}`, (mensagem) => {
    cy.get('#alert-container').should('contain', mensagem)
});

Given(`existe um livro listado no catálogo`, () => {
    cy.adicionarLivro('Livro para manipular', 'Autor Teste', 'Aventura', 2)
    cy.get('#search-input').type('Livro para manipular')
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

When("eu adiciono novos livros com os seguintes dados:", (dataTable) => {
    const books = dataTable.hashes()
    books.forEach(book => {
        cy.adicionarLivro(book.titulo, book.autor, book.categoria, book.exemplares)
    })
});

When(`eu adiciono um livro com {string}, {string}, {string} e {string}`, (titulo, autor, categoria, exemplares) => {
    cy.adicionarLivro(titulo, autor, categoria, exemplares)
});
