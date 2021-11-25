export class Login{
    
    loginEmailField(){
        return cy.get('#Email')
    }   

    loginPasswordField(){
        return cy.get('#Password')
    }

    loginButton(){
        return cy.get('form > .buttons > .button-1')
    }

    fillInTheLoginFormAndClickLoginButton(email, password){
        login.loginEmailField().type(email)
        login.loginPasswordField().type(password)
        login.loginButton().click() 
    }

    verifyThatCorrectErrorMessageIsReceived(expectedErrorMessage){
        cy.get('.returning-wrapper').contains(expectedErrorMessage)
    }
    
}

export const login = new Login()