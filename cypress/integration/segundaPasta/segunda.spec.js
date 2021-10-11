///<reference types="cypress" />

/* Por favor, antes de rodar os testes, mude o email nos dois it*/



describe("testar página", () => {


    beforeEach(() => {
        cy.visit("http://automationpractice.com/index.php");
    });
    
   it("fazer cadastro do usuario de depois fazer logout", () => {

    cy.get('.login').click()
    cy.get('#create-account_form > .form_content > .form-group').type('alguem95143219@mail.com')
    cy.get('#SubmitCreate > span').click()
    cy.get('#id_gender2').click()
    cy.get('#customer_firstname').should('be.visible')
    cy.get('#customer_firstname').type('Priscylla')
    cy.get('#customer_lastname').type('Amaral')
    cy.get('#passwd').should('be.visible')
    cy.get('#passwd').type('12345')
    cy.get('#days').select('13')
    cy.get('#months').select('8')
    cy.get('#years').select('1991')
    cy.get('#address1').type('Street Avenue Alabama, numer 77')
    cy.get('#city').should('be.visible')
    cy.get('#city').type('Winscosin')
    cy.get('#id_state').select('Alabama')
    cy.get('#postcode').should('be.visible')
    cy.get('#postcode').type('00000')
    cy.get('#phone_mobile').type('5581995143219')
    cy.get('#alias').type('Meu Endereço')
    cy.get('#submitAccount > span').click()
    cy.get('.logout').should('be.visible')
    cy.get('.logout').click()
        
    }); 

});