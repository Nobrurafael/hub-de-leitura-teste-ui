///<reference types="cypress"/>
import loginPage from '../support/login-page';

describe('Funcionalidade: Login', () => {
    beforeEach(() => {
        loginPage.visitarPaginaLogin()
    });

    it('Deve fazer login com sucesso - Usando page objects', () => {
        loginPage.PreencherLogin(
            'usuario@teste.com',
            'user123')
            cy.url().should('include', 'dashboard')
            cy.get('#user-name').should('contain', 'Usuário Padrão')
    })
});