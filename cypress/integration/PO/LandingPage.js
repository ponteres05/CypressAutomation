export class LandingPage{
    
    registerLink(){
        return cy.get('.ico-register')
    }
    
    accountLink(){
        return cy.get('.header-links > ul > :nth-child(1) > .account')
    }
    
    loginLink(){
        return cy.get('.ico-login')
    }
    
    logoutLink(){
        return cy.get('.ico-logout')
    }

    goToRegistrationPage(){
        landingPage.registerLink().click()
    }

    clickLogoutLink(){
        landingPage.logoutLink().click()
    }

    verifyThatUserHasSuccessfullyLoggedOut(){
        landingPage.loginLink().should('be.visible')
    }

    goToLoginPage(){
        landingPage.loginLink().click()
    }

    verifyThatUserHasSuccessfullyLoggedIn(email){
        landingPage.accountLink().should('contain', email)
    }

}

export const landingPage = new LandingPage()