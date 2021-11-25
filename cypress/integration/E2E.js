import "../support/commands"
import { landingPage } from "./PO/LandingPage"
import { registration } from "./PO/Registration"
import { login } from "./PO/Login"
import { shop } from "./PO/Shop"
import { shoppingCart } from "./PO/ShoppingCart"
import { checkout } from "./PO/Checkout"

describe('E2E', function(){

const email = registration.generateRandomEmail()

before('Open Application',function() {   
    cy.visit(Cypress.env('url'))
})

beforeEach(() => {
    cy.fixture('example').then(function(data){
        this.data = data
    })
})

afterEach(() => {
    cy.preserveCookiesForMultipleTest()
    })

it('Successful Registration',function() {
    landingPage.goToRegistrationPage()
    registration.fillInTheRegistrationFormAndClickRegisterButton(this.data.firstName, this.data.lastName, email, this.data.password, this.data.confirmPassword)
    registration.verifyThatRegistrationIsSuccessful()
    registration.clickContinueButton()
})

it('Successful Logout',function() {
    landingPage.clickLogoutLink()
    landingPage.verifyThatUserHasSuccessfullyLoggedOut()
})

it('Successful Login',function() {
    landingPage.goToLoginPage()
    login.fillInTheLoginFormAndClickLoginButton(email, this.data.password)
    landingPage.verifyThatUserHasSuccessfullyLoggedIn(email)
  })

it('Search Product',function() {
    shop.searchProductItem(this.data.product)
})

it('Input Product Details and Add to Cart',function() {
    shop.selectProductImage()
    shop.inputItemQuantity(this.data.itemQuantity)
    shop.clickAddToCartButton()
})

it('Select Product(s) to checkout and Agree to terms and service',function() {
    shoppingCart.clickShoppingCartLink()
    shoppingCart.tickItemCheckbox()
    shoppingCart.tickTermsOfServiceCheckbox()
    shoppingCart.clickCheckoutButton()
})

it('Checkout Product',function() {
    checkout.fillInBillingAddressForm(this.data.country, this.data.countryValue, this.data.city, this.data.address1, this.data.zipCode, this.data.phoneNumber)
    checkout.selectAndAddNewShippingAddress()
    checkout.selectShippingMethod()
    checkout.selectPaymentMethod()
    checkout.reviewPaymentInformation()
    checkout.confirmOrder()
    checkout.verifyThatOrderHasBeenSuccessfullyProcessed() 
})

})