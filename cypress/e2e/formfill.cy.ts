describe('My Form Filling Test', () => {
    it('Visits the form page', () => {



      cy.visit('https://test.qatechhub.com/form-elements/')
      cy.get("#wpforms-49-field_1").type("John")
      cy.get("#wpforms-49-field_1-last").type("Watson")
      cy.get("#wpforms-49-field_2").type("john@example.com")
      cy.get("#wpforms-49-field_4").type("9999911111")
      cy.get("#wpforms-49-field_3_1").click()
      cy.get("#wpforms-49-field_5").select("Cypress")
      
      cy.get("#wpforms-submit-49").click()
      cy.contains("You have successfully filled in the form!")

      
    })
  })