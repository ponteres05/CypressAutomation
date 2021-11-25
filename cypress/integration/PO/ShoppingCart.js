export class ShoppingCart{
    
    shoppingCartLink(){
        return cy.get('.ico-cart > .cart-label')
    }   
    
    itemCheckbox(){
        return cy.get('.remove-from-cart > input')
    }
    
    termsOfServiceCheckbox(){
        return cy.get('#termsofservice')
    }

    checkOutButton(){
        return cy.get('#checkout')
    }

    clickShoppingCartLink(){
        cy.wait(5000)
        shoppingCart.shoppingCartLink().click()
    }

    tickItemCheckbox(){
        shoppingCart.itemCheckbox().click()
    }

    tickTermsOfServiceCheckbox(){
        shoppingCart.termsOfServiceCheckbox().click()
    }

    clickCheckoutButton(){
        shoppingCart.checkOutButton().click()
    }

}

export const shoppingCart = new ShoppingCart()