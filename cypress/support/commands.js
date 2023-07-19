import { firstNameInput, lastNameInput, addressInput, cityInput, stateInput, zipInput, tlfInput, ssnInput, userInput, passInput, pass2Input } from "../support/pageObject/register"


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

Cypress.Commands.add('register_User',(fname, lname, address, city, state, zip, tlf, ssn, user, pass, confirmpass)=>{

    cy.get(firstNameInput).should('be.visible').type(fname)

    cy.get(lastNameInput).should('be.visible').type(lname)

    cy.get(addressInput).should('be.visible').type(address)

    cy.get(cityInput).should('be.visible').type(city)

    cy.get(stateInput).should('be.visible').type(state)

    cy.get(zipInput).should('be.visible').type(zip)

    cy.get(tlfInput).should('be.visible').type(tlf)

    cy.get(ssnInput).should('be.visible').type(ssn)

    cy.get(userInput).should('be.visible').type(user)

    cy.get(passInput).should('be.visible').type(pass)

    cy.get(pass2Input).should('be.visible').type(confirmpass)

})