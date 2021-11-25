export class Shop{
    
    searchField(){
        return cy.get('#small-searchterms')
    }   
    
    searchButton(){
        return cy.get('.search-box-button')
    }
    
    itemImage(){
        return cy.get('.picture > a > img')
    }
    
    quantityInputBox(){
        return cy.get('.qty-input')
    }
    
    addToCartButton(){
        return cy.get('#add-to-cart-button-31')
    }

    searchProductItem(product){
        shop.searchField().type(product)
        shop.searchButton().click()
    }

    selectProductImage(){
        shop.itemImage().click()
    }

    inputItemQuantity(itemQuantity){
        shop.quantityInputBox().clear().type(itemQuantity)
    }

    clickAddToCartButton(){
        shop.addToCartButton().click()
    }



}

export const shop = new Shop()