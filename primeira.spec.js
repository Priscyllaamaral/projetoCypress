///<reference types="cypress" />


describe("testar página", () => {


    beforeEach(() => {
        cy.visit("http://automationpractice.com/index.php");
    });

    it('fazer login e adicionar uma roupa nos favoritos e depois visualizar a lista de favoritos', () => {
        cy.get('.login').click()
        cy.get('#email').type('alguem9@mail.com')
        cy.get('#passwd').type('12345')
        cy.get('#SubmitLogin > span').click()
        cy.get('.sf-menu > :nth-child(2) > .sf-with-ul').should('be.visible')
        cy.get('.sf-menu > :nth-child(2) > .sf-with-ul').click()
        cy.get('.first-in-line.first-item-of-tablet-line > .product-container > .right-block > .button-container > .lnk_view > span').click()
        cy.get('#wishlist_button').should('be.visible')
        cy.get('#wishlist_button').click()
        cy.get('.fancybox-item').should('be.visible')
        cy.get('.fancybox-item').click()
        cy.get('.account > span').click()
        cy.get('.lnk_wishlist > a > span').click()
        cy.get('[style="width:200px;"] > a').should('be.visible')
        cy.get('[style="width:200px;"] > a').click()
    })

    

    it('fazer login e excluir a lista de favoritos e verificar que ela não existe mais', () => {
        cy.get('.login').click()
        cy.get('#email').type('alguem9@mail.com')
        cy.get('#passwd').type('12345')
        cy.get('#SubmitLogin > span').click()
        cy.get('.lnk_wishlist > a > span').click()
        cy.get('.icon-remove').click()
        cy.get('[style="width:200px;"] > a').click().should('not.exist')
    
    })

    it('fazer login e adicionar uma roupa nos favoritos e depois visualizar a lista de favoritos', () => {
        cy.get('.login').click()
        cy.get('#email').should('be.visible')
        cy.get('#email').type('alguem9@mail.com')
        cy.get('#passwd').should('be.visible')
        cy.get('#passwd').type('12345')
        cy.get('#SubmitLogin > span').click()
        cy.get('.sf-menu > :nth-child(2) > .sf-with-ul').click()
        cy.get('.first-in-line.first-item-of-tablet-line > .product-container > .right-block > .button-container > .lnk_view > span').click()
        cy.get('#wishlist_button').click()
        cy.get('.fancybox-item').click()
        cy.get('.account > span').click()
        cy.get('.lnk_wishlist > a > span').click()
        cy.get('[style="width:200px;"] > a').click()
    })



    it('fazer login e editar perfil (sobrenome)', () => {
        cy.get('.login').click()
        cy.get('#email').type('alguem9@mail.com')
        cy.get('#passwd').type('12345')
        cy.get('#SubmitLogin > span').click()
        cy.get('.myaccount-link-list > :nth-child(4) > a > span').click()
        cy.get('#lastname').should('be.visible')
        cy.get('#lastname').clear()
        cy.get('#lastname').type('França')
        cy.get('#lastname').should('have.value', 'França')
        cy.get('#old_passwd').should('be.visible')
        cy.get('#old_passwd').type('12345')
        cy.get(':nth-child(11) > .btn > span').click()


    })

    it('fazer login e editar perfil (sobrenome)', () => {
        cy.get('.login').click()
        cy.get('#email').type('alguem9@mail.com')
        cy.get('#passwd').type('12345')
        cy.get('#SubmitLogin > span').click()
        cy.get('.myaccount-link-list > :nth-child(4) > a > span').should('be.visible')
        cy.get('.myaccount-link-list > :nth-child(4) > a > span').click()
        cy.get('#lastname').clear()
        cy.get('#lastname').type('Amaral')
        cy.get('#lastname').should('have.value', 'Amaral')
        cy.get('#old_passwd').type('12345')
        cy.get(':nth-child(11) > .btn > span').click()


    })

   

    it('fazer login e editar perfil (senha) ', () => {
        cy.get('.login').click()
        cy.get('#email').type('alguem9@mail.com')
        cy.get('#passwd').type('12345')
        cy.get('#SubmitLogin > span').click()
        cy.get('.myaccount-link-list > :nth-child(4) > a > span').click()
        cy.get('#old_passwd').should('be.visible')
        cy.get('#old_passwd').type('12345')
        cy.get('#passwd').should('be.visible')
        cy.get('#passwd').type('54321')
        cy.get('#confirmation').type('54321')
        cy.get(':nth-child(11) > .btn > span').click()


    })

    it('fazer login e editar perfil (senha) ', () => {
        cy.get('.login').click()
        cy.get('#email').type('alguem9@mail.com')
        cy.get('#passwd').type('54321')
        cy.get('#SubmitLogin > span').click()
        cy.get('.myaccount-link-list > :nth-child(4) > a > span').click()
        cy.get('#old_passwd').should('be.visible')
        cy.get('#old_passwd').type('54321')
        cy.get('#passwd').should('be.visible')
        cy.get('#passwd').type('12345')
        cy.get('#confirmation').type('12345')
        cy.get(':nth-child(11) > .btn > span').click()


    })

    
     
    
    it('fazer login e visualizar vestidos', () => {
        cy.get('.login').click()
        cy.get('#email').type('alguem9@mail.com')
        cy.get('#passwd').type('12345')
        cy.get('#SubmitLogin > span').click()
        cy.get('.sf-menu > :nth-child(2) > .sf-with-ul').click()
        cy.get('.first-in-line.first-item-of-tablet-line > .product-container').should('be.visible')
    })
     

    it('fazer login e fazer um review de uma roupa', () => {
        cy.get('.login').click()
        cy.get('#email').type('alguem9@mail.com')
        cy.get('#passwd').type('12345')
        cy.get('#SubmitLogin > span').click()
        cy.get('.sf-menu > :nth-child(2) > .sf-with-ul').should('be.visible')
        cy.get('.sf-menu > :nth-child(2) > .sf-with-ul').click()
        cy.get('.first-in-line.first-item-of-tablet-line > .product-container > .right-block > .button-container > .lnk_view > span').click()
        cy.get('li > .open-comment-form').click()
        cy.get('#comment_title').should('be.visible')
        cy.get('#comment_title').type('Muito bom')
        cy.get('#content').should('be.visible')
        cy.get('#content').type('Veste muito bem')
        cy.get('#submitNewMessage > span').click()
        cy.get('.fancybox-inner > .submit > .button > span').click()


    })

    

    it('fazer login e confirmar que o botão para aceitar os termos de serviços está escondido ', () => {
        cy.get('.login').click()
        cy.get('#email').type('alguem9@mail.com')
        cy.get('#passwd').type('12345')
        cy.get('#SubmitLogin > span').click()
        cy.get('.sf-menu > :nth-child(1) > [href="http://automationpractice.com/index.php?id_category=3&controller=category"]').click()
        cy.get(':nth-child(1) > .product-container > .right-block > .button-container > .ajax_add_to_cart_button > span').click()
        cy.get('.button-container > .button-medium > span').click()
        cy.get('.cart_navigation > .button > span').click()
        cy.get('.cart_navigation > .button > span').click()
        cy.get('.cart_navigation > .button > span').click()
        cy.get('#cgv').should('be.hidden')


    })

    

    it('fazer login e ver a quantidade de itens que tem na lista de desejos', () => {
        cy.get('.login').click()
        cy.get('#email').type('alguem9@mail.com')
        cy.get('#passwd').type('12345')
        cy.get('#SubmitLogin > span').click()
        cy.get('.lnk_wishlist > a > span').click()
        cy.get('.bold').should('have.length',1)

    })
});
