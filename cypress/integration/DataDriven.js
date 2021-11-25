import "../support/commands"
import { landingPage } from "./PO/LandingPage"
import { login } from "./PO/Login"

describe('Validate Unsuccessful Login', function(){

beforeEach(() => {
    cy.fixture('invalidLoginCredentials').then(function(data){
        this.data = data
    })

    cy.visit(Cypress.env('url'))
})

let testcases = ["Invalid Username", "Invalid Password", "Blank Username and Password"]

testcases.forEach(element => {
let i = 0
it(element,function() {
    landingPage.goToLoginPage()
    login.fillInTheLoginFormAndClickLoginButton(this.data.username[i], this.data.password[i])
    login.verifyThatCorrectErrorMessageIsReceived(this.data.expectedErrorMessage[i])
                
    i = i + 1
    });
})
   
})

// it('Validate Unsuccessful Login',function() {
//     let i = 0

//     this.data.username.forEach(element => {
//         cy.log(this.data.scenario[i])
//         landingPage.goToLoginPage()
//         login.fillInTheLoginFormAndClickLoginButton(element, this.data.password[i])
//         login.verifyThatCorrectErrorMessageIsReceived(this.data.expectedErrorMessage[i])
        
//         i = i + 1
//     });
// })

// })