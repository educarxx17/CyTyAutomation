describe('My First Test', () => {
  it('Does not do much!', () => {
    expect(true).to.equal(true)
  });

  
  it('demoblaze Test', () => {
    cy.clearCookies();
    
    cy.visit('https://www.demoblaze.com/index.html')
    cy.get('#login2').click().wait(200)
    cy.get('#loginusername').wait(200).type('ss')
    cy.get('#loginpassword', { timeout: 100 }).type('ss')
    cy.get('.modal-footer button.btn.btn-primary').last().click({force:true})
    cy.get('#logout2').should('be.visible')

  });

  it.skip('saucedemo Test', () => {
    //not working time to time
    cy.clearCookies();
    cy.visit('https://www.saucedemo.com')
    cy.get('#user-name').type('standard_user')
    cy.get('#password').type('secret_sauce')
    cy.get('#login-button').click()
    //cy.url().should('eq', 'https://www.saucedemo.com/inventory.html')
  });


})