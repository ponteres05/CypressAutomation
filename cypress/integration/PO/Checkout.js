export class Checkout{
    
    billingAddressCountryDropdown(){
        return cy.get('#BillingNewAddress_CountryId')
    }   
    
    cityField(){
        return cy.get('#BillingNewAddress_City')
    }
    
    address1Field(){
        return cy.get('#BillingNewAddress_Address1')
    }
    
    zipPostalCodeField(){
        return cy.get('#BillingNewAddress_ZipPostalCode')
    }
    
    phoneNumberField(){
        return cy.get('#BillingNewAddress_PhoneNumber')
    }
    
    billingAddressContinueButton(){
        return cy.get('#billing-buttons-container > .button-1')
    }
    
    shippingAddressContinueButton(){
        return cy.get('#shipping-buttons-container > .button-1')
    }
    
    shippingMethodContinueButton(){
        return cy.get('#shipping-method-buttons-container > .button-1')
    }
    
    paymentMethodContinueButton(){
        return cy.get('#payment-method-buttons-container > .button-1')
    }
    
    paymentInformationContinueButton(){
        return cy.get('#payment-info-buttons-container > .button-1')
    }
    
    confirmButton(){
        return cy.get('#confirm-order-buttons-container > .button-1')
    }
    
    successfulOrderTransactionText(){
        return cy.get('strong')
    }

    fillInBillingAddressForm(country, countryValue, city, address1, zipCode, phoneNumber){
        checkout.billingAddressCountryDropdown().select(country).should('have.value', countryValue)
        checkout.cityField().type(city)
        checkout.address1Field().type(address1)
        checkout.zipPostalCodeField().type(zipCode)
        checkout.phoneNumberField().type(phoneNumber)
        checkout.billingAddressContinueButton().click()
    }

    selectAndAddNewShippingAddress(){
        checkout.shippingAddressContinueButton().click()
    }
    
    selectShippingMethod(){
        checkout.shippingMethodContinueButton().click()
    }

    selectPaymentMethod(){
        checkout.paymentMethodContinueButton().click()
    }

    reviewPaymentInformation(){
        checkout.paymentInformationContinueButton().click()
    }

    confirmOrder(){
        checkout.confirmButton().click()
    }

    verifyThatOrderHasBeenSuccessfullyProcessed(){
        checkout.successfulOrderTransactionText().should('contain','Your order has been successfully processed!')
    }
}

export const checkout = new Checkout()