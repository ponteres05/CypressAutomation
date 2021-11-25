import { landingPage } from "./PO/LandingPage"
import { registration } from "./PO/Registration"

export class Webshop{
    
    goToRegisterPage(){
        return landingPage.registerLink().click()
    }
    
    fillInTheRegistrationFormAndClickRegisterButton(firstName, lastName, email, password, confirmPassword){
        return registration.maleRadioButton().click()
        return registration.firstNameField().type(firstName)
        return registration.lastNameField().type(lastName)
        return registration.registrationEmailField().type(email)
        return registration.registrationPasswordField().type(password)
        return registration.confirmPasswordField().type(confirmPassword)
        return registration.registerButton().click()    
    }
    
    verifyThatRegistrationIsSuccessful(){
        return registration.successfulRegistrationText().should('contain','Your registration completed')
    }
    
    clickContinueButton(){
        return registration.continueButton().click()
    }

}

export const webShop = new Webshop()