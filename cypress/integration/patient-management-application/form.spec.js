/// <reference types="cypress" />
describe('patient-management-application', () => {
    beforeEach(() => {
      cy.visit('http://localhost:3000/')
    })
    it ("inputs form values, submits forms and displays card", () => {
        // Check first name can be exists and can be typed
        cy.get("[data-test-id='first-name']")
            .type("Charles")
            .should("have.value", "Charles");

        // Check middle exists and can be typed
        cy.get("[data-test-id='middle-name']")
            .type("Kofi")
            .should("have.value", "Kofi");
        
        // Check last name exits and can be typed 
        cy.get("[data-test-id='last-name']")
            .type("Nuamah")
            .should("have.value", "Nuamah");

        // Check phone number exists and can be typed
        cy.get("[data-test-id='phone-number']")
            .type("0207654661")
            .should("have.value", "0207654661");
        
        // Check date of birth input exists and can be typed 
        cy.get("[data-test-id='dob']").click()
            .type('1998-07-23')
            .should("have.value", "1998-07-23");
        
        // Check address field exists and can be typed
        cy.get("[data-test-id='address']")
            .type('AS-985-7867')
            .should("have.value", "AS-985-7867");
        
        // Check submit button exists and can be clicked
        cy.get("[data-test-id='submit-btn']").click()


        // Check a card appears after submission and 
        // Check the display of full name on card
        cy.get('.sc-htoDjs > :nth-child(1)')
            .should("be.visible")
            .should("contain", "Charles Kofi Nuamah")

        // Check the display of address on card
        cy.get('.sc-htoDjs > :nth-child(2)')
            .should("be.visible")
            .should("contain", "ADDRESS: AS-985-7867")
        
        // Check the display of date of birth on card
        cy.get('.sc-htoDjs > :nth-child(3)')
            .should("be.visible")
            .should("contain", "DOB: 23rd July 1998")
    })
})