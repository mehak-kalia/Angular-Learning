describe('My First Test', () => {
  it('Visits the initial project page', () => {
    cy.visit('/home')
    cy.contains('Application Name')
    // cy.contains('phatakapp')
  })
})
