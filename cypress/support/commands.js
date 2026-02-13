// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })

Cypress.Commands.add('Login',(email, senha) =>{
    cy.get('#email').type(email)
    cy.get('#password').type(senha)
    cy.get('#login-btn').click()
    cy.url().should('include', 'dashboard')
});

Cypress.Commands.add('preencherCadastro', (usuario) => {
    cy.get('[href="/register.html"]').click()
    cy.url().should('include', 'register')
    cy.get('#name').type(usuario.nome)
    cy.get('#email').type(usuario.email)
    cy.get('#phone').type(usuario.telefone)
    cy.get('#password').type(usuario.senha)
    cy.get('#confirm-password').type(usuario.senha)
    cy.get('#terms-agreement').check()
    cy.get('#register-btn').click()
});
