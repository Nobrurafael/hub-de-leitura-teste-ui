/// <reference types="cypress"/>
import { faker } from '@faker-js/faker';

describe('', () => {
    beforeEach(() => {
        cy.visit('http://localhost:3000/login.html')
    });

    it('Deve fazer login usando comandos customizados (Custom-comands)', () => {
        cy.Login('usuario@teste.com', 'user123')
    });

    it.only('Deve preencher cadastro usando comandos customizados (Custom-comands', () => {
        const usuario = {
            nome: faker.internet.displayName(),
            email: faker.internet.email(),
            telefone: `${Date.now()}`,
            senha: faker.internet.password()
        }
        cy.preencherCadastro(usuario)
        cy.get('#user-name').should('exist')
        cy.url().should('include', 'dashboard')
    });
});