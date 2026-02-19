class CadastroPage {
    //seletores
    campoNome() { return cy.get('#name') }
    campoEmail() { return cy.get('#email') }
    campoTelefone() { return cy.get('#phone') }
    campoSenha() { return cy.get('#password') }
    confirmaSenha() { return cy.get('#confirm-password') }
    botaoCheck() { return cy.get('#terms-agreement') }
    botaoCriarConta() { return cy.get('#register-btn') }

    visitarPaginaCadastro() {
        cy.visit('http://localhost:3000/register.html')
    }

    preencherCadastroPage(nome, email, telefone, senha, confirmaSenha) {
        this.campoNome().clear().type(nome)
        this.campoEmail().clear().type(email)
        this.campoTelefone().clear().type(telefone)
        this.campoSenha().clear().type(senha)
        this.confirmaSenha().clear().type(confirmaSenha)
        this.botaoCheck().check()
        this.botaoCriarConta().click()
    }

}
export default new CadastroPage()