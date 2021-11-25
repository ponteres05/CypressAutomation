export class Registration{
    
    maleRadioButton(){
        return cy.get('#gender-male')
    }   
    
    firstNameField(){
        return cy.get('#FirstName')
    }
    
    lastNameField(){
        return cy.get('#LastName')
    }
    
    registrationEmailField(){
        return cy.get('#Email')
    }

    registrationPasswordField(){
        return cy.get('#Password')
    }
    
    confirmPasswordField(){
        return cy.get('#ConfirmPassword')
    }
    
    registerButton(){
        return cy.get('#register-button')
    }
    
    successfulRegistrationText(){
        return cy.get('.result')
    }

    continueButton(){
        return cy.get('.page-body > .buttons > .button-1')
    }
    
    generateRandomString(length){
            var result           = '';
            var characters       = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
            var charactersLength = characters.length;
            for ( var i = 0; i < length; i++ ) {
              result += characters.charAt(Math.floor(Math.random() * 
         charactersLength));
           }
           return result;
    }

    generateRandomEmail(){
        let randomString = registration.generateRandomString(6)
        let text1 = "isaac_stephen"
        let emailUsername = text1.concat("_", randomString);
        let emailValue = emailUsername.concat("@", "yahoo.com")

        return emailValue
    }

    fillInTheRegistrationFormAndClickRegisterButton(firstName, lastName, email, password, confirmPassword){
        registration.maleRadioButton().click()
        registration.firstNameField().type(firstName)
        registration.lastNameField().type(lastName)
        registration.registrationEmailField().type(email)
        registration.registrationPasswordField().type(password)
        registration.confirmPasswordField().type(confirmPassword)
        registration.registerButton().click()
    }
    
    verifyThatRegistrationIsSuccessful(){
        registration.successfulRegistrationText().should('contain','Your registration completed')
    }
    
    clickContinueButton(){
        registration.continueButton().click()
    }

}

export const registration = new Registration()