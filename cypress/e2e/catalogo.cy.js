/// <reference types="cypress"/>

describe('Funcionalidade: catalogo de livros', () => {
    beforeEach(() => {
        cy.visit('http://localhost:3000/catalog.html')
    })

    it('Deve colocar todos os itens do catalogo na lista', () => {
        cy.get('.btn-primary').click({ multiple: true })
        cy.get('#cart-count').should('exist')
    });

    it('Deve adicionar o primeiro livro da lista no', () => {
        cy.get('.btn-primary').first().click()
        cy.get('#global-alert-container').should('contain', 'foi adicionado à cesta!')
    });

    it('Deve adicionar o ultimo livro da lista no', () => {
        cy.get('.btn-primary').last().click()
        cy.get('#global-alert-container').should('contain', 'foi adicionado à cesta!')
    })

    it('Deve buscar livro por nome e adiciona-lo a cesta',() => {
        cy.contains('1984').click()
        cy.get('#add-to-cart-btn').click()
        cy.get(':nth-child(2) > .nav-link').should('exist')
        cy.get('#alert-container').should('contain', ' Livro adicionado à cesta com sucesso!')
    })

    it('Deve buscar livro por posição', () => {
        cy.get('.btn-primary').eq(2).click()
        cy.get(':nth-child(2) > .nav-link').should('exist')
        cy.get('#global-alert-container').should('contain', ' "A Divina Comédia" foi adicionado à cesta!')
    });
})