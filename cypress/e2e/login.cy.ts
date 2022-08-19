describe('My Login Test', () => {
    it('Visits the facebook page', () => {
      
    //   cy.contains('Login').click()
      // cy.contains('phatakapp')


      // Locators in cypress
      // locate a web element by
      // 1. Name
      // 2. Tag
      // 3. Id
      // 4. CSS
      // 5. Xpath


      cy.visit('https://www.facebook.com/')
      cy.get("#email").type("john@example.com")
      cy.get("#pass").type("john123456")
      cy.get("#loginbutton").click()
      cy.contains("ਤੁਹਾਡੀ ਗੁਜਾਰਿਸ਼ ਦੀ ਪ੍ਰਕਿਰਿਆ ਨਹੀਂ ਕੀਤੀ ਜਾ ਸਕਦੀ")

      
    })
  })