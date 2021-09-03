it('assertion', () => {
    cy.visit('https://example.cypress.io/')

    cy.contains('get').click()
    cy.get('#query-btn')
        // implicit assertion
        .should('contain', 'Button')
        .should('have.class', 'query-btn', { timeout: 5000 })
        .should('be.enabled')
        .should('be.visible')

    cy.get('#query-btn')
        .should('contain', 'Button')
        .and('have.class', 'query-btn')


    // explicit assertion
    // expect
    let name = 'ram'
    expect(name).to.be.equal('ram')


    // assertion
    assert.equal(4, 4)
    assert.equal(4, '4', 'strictly not equal')



})