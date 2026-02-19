/// <reference types="cypress" />
import { faker } from '@faker-js/faker';
import cadastroPage from '../support/cadastro-page';

describe('Funcionalidade: Cadastro no hub de leitura', () => {

    beforeEach(() => {
        cadastroPage.visitarPaginaCadastro()
    });

    it('Deve criar cadastro com sucesso', () => {
        let email = `teste${Date.now()}@teste.com`

        cy.get('#name').type('Bruno')
        cy.get('#email').type(email)
        cy.get('#phone').type('1199585858')
        cy.get('#password').type('123456789..')
        cy.get('#confirm-password').type('123456789..')
        cy.get('#terms-agreement').check()
        cy.get('#register-btn').click()
        cy.get('#alert-container').should('contain', ' Conta criada com sucesso! Fazendo login...')
    })

    it('Deve valiar mensagem de erro ao enviar sem preencher o nome', () => {
        let nome = faker.internet.username()
        let email = faker.internet.email()
        let numero = `${Date.now()}`
        let senha = faker.internet.password()

        cy.get('#name').type(nome)
        cy.get('#email').type(email)
        cy.get('#phone').type(numero)
        cy.get('#password').type(senha)
        cy.get('#confirm-password').type(senha)
        cy.get('#terms-agreement').check()
        cy.get('#register-btn').click()
        cy.get('#user-name').should('contain', nome)

    })

    it('Deve fazer login usando comandos customizados', () => {
        let nome = faker.person.fullName()
        let email = faker.internet.email()
        let senha = faker.internet.password()
        cy.Login(
            nome,
            email,
            '11942033859',
            senha,
            senha
        )
        cy.url().should('include', 'dashboard')
    });

    it.only('Deve criar cadastro com sucesso - Usando page objects', () => {

        const nome = faker.person.fullName()
        const email = faker.internet.email()
        const telefone = faker.phone.number('11########')
        const senha = 'senha123'

       cadastroPage.preencherCadastroPage(
            nome,
            email,
            telefone,
            senha,
            senha)
        cy.url().should('include', 'dashboard')
    });
});

