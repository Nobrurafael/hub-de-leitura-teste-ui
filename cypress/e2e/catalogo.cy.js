/// <reference types="cypress"/>
import { faker } from '@faker-js/faker';

describe('Funcionalidade: Massa de dados com fixture', () => {
    beforeEach(() => {
        cy.visit('http://localhost:3000/login.html')
    });
    
    it.only('Deve buscar um ou mais livros na lista', () => {
        cy.Login('usuario@teste.com', 'user123')
    });
});