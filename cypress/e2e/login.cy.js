/// <reference types="cypress"/>

describe('Funcionalidade: Login', () => {
    beforeEach(() => {
        cy.visit('http://localhost:3000/login.html')
    });
    
    it('Deve fazer login', () => {
        cy.get('#email').type('usuario@teste.com')
        cy.get('#password').type('user123')
        cy.get('#login-btn').click()
        cy.url().should('include', 'dashboard')
});

    it('Deve validar mensagem de erro para email ou senha incorreto', () => {
        cy.get('#email').type('teste@teste.com.br')
        cy.get('#password').type('user123')
        cy.get('#login-btn').click()
        cy.get('#alert-container').should('contain', ' Email ou senha incorretos.')
    });
});