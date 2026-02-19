class LoginPage {
    campoEmail() {return cy.get('#email')} 
    campoSenha() {return cy.get('#password')}
    botaoEntrar() {return cy.get('#login-btn')}

    visitarPaginaLogin() {
        cy.visit('http://localhost:3000/login.html')
    }

    PreencherLogin(email,senha) {
        this.campoEmail().clear().type(email)
        this.campoSenha().clear().type(senha)
        this.botaoEntrar().click()
    }
}
export default new LoginPage()