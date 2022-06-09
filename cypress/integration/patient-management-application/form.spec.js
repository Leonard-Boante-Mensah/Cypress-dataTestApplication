/// <reference types="cypress" />
describe('patient-management-application', () => {
    beforeEach(() => {
      cy.visit('/')
    })
    it ("inputs form values, submits forms and displays card", () => {
        cy.get("[data-cy='firstname-field']")
            .type("Charles")
            .should("have.value", "Charles");

        cy.get("[data-cy='middle-name-field']")
            .type("Kofi")
            .should("have.value", "Kofi");
        
        cy.get("[data-cy='lastname-field']")
            .type("Nuamah")
            .should("have.value", "Nuamah");

        cy.get("[data-cy='phone-number-field']")
            .type("0207654661")
            .should("have.value", "0207654661");
        
        cy.get("[data-cy='date-of-birth-field']").click()
            .type('1998-07-23')
            .should("have.value", "1998-07-23");
        
        cy.get("[data-cy='address-input-field']")
            .type('AS-985-7867')
            .should("have.value", "AS-985-7867");
        
        cy.get("[data-cy='submit-button']").click()

        cy.get("[data-test-id='all-user-cards']")
            .should("be.visible")
            .should("contain", "Charles Kofi Nuamah")
            .should("contain", "ADDRESS: AS-985-7867")
            .should("contain", "DOB: 23rd July 1998")
    })
})

//data-cy