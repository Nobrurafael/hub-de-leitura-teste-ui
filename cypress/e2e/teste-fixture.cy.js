/// <reference types="cypress" />


describe('Funcionalidade: Busca com fixture', () => {
    beforeEach(() => {
        cy.visit('http://localhost:3000/catalog.html')
    });

    it('Deve fazer a busca de um livro usando fixture', () => {
        cy.fixture('livros').then((catalogo) => {
            cy.get('#search-input').type(catalogo[2].livro)
            cy.get('.card-title').should('contain', catalogo[2].livro)
        })
    });

    it('Deve validar todos os itens da lista', () => {
        cy.fixture('livros').then((cat) => {
            cat.forEach((itens) => {
                cy.get('#search-input').clear().type(itens.livro)
                cy.get('.card-title').should('contain', itens.livro)
            })
        })
    })

    it('Deve fazer login usando dados da fixture', () => {
        cy.get('#account-link').click()
        cy.url().should('include', 'login')
        cy.fixture('usuario').then((user) => {
            cy.get('#email').type(user[2].email)
            cy.get('#password').type(user[2].senha)
            cy.get('#login-btn').click()
            cy.get('#user-name').should('have.text', user[2].usuarios)
        })
    });

    it.only('Deve validar todos os usuarios', () => {
        cy.get('#account-link').click()
        cy.url().should('include', 'login')
        cy.fixture('usuario').then((user) => {
            cy.visit('http://localhost:3000/login.html')
           user.forEach((login) => {
           cy.get('#email').clear().type(login.email)
            cy.get('#password').clear().type(login.senha)
          cy.get('#login-btn').click()
          cy.get('.user-actions > .btn-outline-danger').click()
           })
        })
    });


});