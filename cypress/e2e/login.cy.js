/// <reference types="cypress"/>
import user from "../fixtures/usuario.json"

    describe('Funcionalidade: Massa de dados', () => {
        beforeEach(() => {
            cy.visit('http://localhost:3000/login.html')
        })
        
        it('Deve fazer login usando massa de dados', () => {
            cy.login(user.email, user.senha)
        });

        it('', () => {
            
        });
    });