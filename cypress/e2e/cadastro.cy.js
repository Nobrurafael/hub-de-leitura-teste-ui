/// <reference types="cypress"/>
import { faker } from '@faker-js/faker';

describe('Funcionalidade: Cadastro', () => {
    beforeEach(() => {
        cy.visit('http://localhost:3000/register.html')
    });

    it('Deve preencher cadastro completo', () => {
        let email = faker.internet.email()
        let nome = faker.internet.displayName()

        cy.get('#name').type(nome)
        cy.get('#email').type(email)
        cy.get('#phone').type('1194203859')
        cy.get('#password').type('123456', {log: false})
        cy.get('#confirm-password').type('123456', {log: false})
        cy.get('#terms-agreement').check()
        cy.get('#register-btn').click()
        cy.url().should('include', 'dashboard')
        cy.get('.text-xl > .text-muted').should('exist')
    });

    it('Deve exibir mensagem de erro para email invalido ou ja exixtente', () => {
        let nome = faker.internet.displayName()

        cy.get('#name').type(nome)
        cy.get('#email').type('emailteste@teste.com')
        cy.get('#phone').type('1194203859')
        cy.get('#password').type('123456', {log: false})
        cy.get('#confirm-password').type('123456', {log: false})
        cy.get('#terms-agreement').check()
        cy.get('#register-btn').click()
        cy.get('#alert-container').should('contain', ' Erro ao criar conta. Tente novamente.')
    });

});