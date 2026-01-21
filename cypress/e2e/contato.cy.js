/// <reference types="cypress" />

describe('Funcionalidade: Contato', () => {

  beforeEach(() => {
    cy.visit('index.html')
  });

  it('Deve preencher formulário de contato com sucesso', () => {
    cy.get('#name').type('Bruno rafael')
    cy.get('#email').type('Bruno@teste.com')
    cy.get('#subject').select('Parcerias')
    cy.get('#message').type('Mensagem de teste')
    cy.get('#btn-submit').click()
    cy.contains('Contato enviado com sucesso').should('exist')
  })

  it('Deve validar mensagem de erro ao enviar sem preencher o nome', () => {
    cy.get('#name').clear()
    cy.get('#email').type('Bruno@teste.com')
    cy.get('#subject').select('Parcerias')
    cy.get('#message').type('Mensagem de teste')
    cy.get('#btn-submit').click()
    cy.get('#alert-container').should('contain', 'Por favor, preencha o campo Nome.')

  });

  it('Deve validar mensagem de erro ao enviar sem preencher o Email', () => {
    cy.get('#name').type('Bruno rafael')
    cy.get('#email').clear()
    cy.get('#subject').select('Parcerias')
    cy.get('#message').type('Mensagem de teste')
    cy.get('#btn-submit').click()
    cy.get('#alert-container').should('contain', 'Por favor, preencha o campo E-mail')
  });

  it('Deve validar mensagem de erro por não selecionar o assunto', () => {
    cy.get('#name').type('Bruno rafael')
    cy.get('#email').type('Bruno@teste.com')
    //cy.get('#subject').select('Parcerias')
    cy.get('#message').type('Mensagem de teste')
    cy.get('#btn-submit').click()
    cy.get('#alert-container').should('contain', 'Por favor, selecione o Assunto.')
  })

  it.only('Deve validar mensagem de erro por não preencher uma mensagem', () => {
    cy.get('#name').type('Bruno rafael')
    cy.get('#email').type('Bruno@teste.com')
    cy.get('#subject').select('Parcerias')
    cy.get('#message').clear
    cy.get('#btn-submit').click()
    cy.get('#alert-container').should('contain', 'Por favor, escreva sua Mensagem.')
  })
})