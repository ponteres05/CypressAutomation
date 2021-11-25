// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })

Cypress.Commands.add('preserveCookiesForMultipleTest', () => {
    //Code to Handle the Sesssion cookie in cypress.
    //Keep the Session alive when you jump to another test
    let str= [];
    cy.getCookies().then((cook) => {
        cy.log(cook);
        for (let l = 0; l < cook.length; l++)
        {
            if(cook.length>0&&l==0){
                str[l] = cook[l].name;
                Cypress.Cookies.preserveOnce(str[l]);
            }
            else if(cook.length>1&&l>1){
                str[l] = cook[l].name;
                Cypress.Cookies.preserveOnce(str[l]);
            }
        }
    })
})

Cypress.Commands.add('generateRandomEmail', () => {
    var text = "";
    var possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";

    for (var i = 0; i < 7; i++)
      text += possible.charAt(Math.floor(Math.random() * possible.length));

    var username = "isaac_ponteres_"
    var emailUsername = String(username.concat(text))
    var email = String(emailUsername.concat("@yahoo.com"))

    return email;
})