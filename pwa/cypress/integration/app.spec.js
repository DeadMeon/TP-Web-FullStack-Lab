describe('Navigation', () => {
  it('should navigate to the main page ', () => {
    cy.visit('https://localhost')
    cy.get('.nav-link').its("length").should("eq", 3)
  })

  it('should have charts', () => {
    cy.get('svg').should('have.length.greaterThan', 1)
  });

  it("number of circle on line_chart", () => {
    cy.get('circle').should('have.length', 4 * 12)
  })


  it(" display Bar_chart by month", () => {
    cy.get('rect').should('have.length', 4)
    cy.get('.bar-chart select').select('Month')
    cy.get('.btn-outline-info').click()
    cy.get('rect').should('have.length', 12 * 4)
  })

  it('Change year in donut_chart', () => {

    cy.get('#displayed_year').should('have.text', "2020")
    cy.get('#donut select').select("2019")
    cy.get('.btn-outline-secondary').click()
    cy.get('#displayed_year').should('have.text', "2019")

    cy.get('#donut select').select("2018")
    cy.get('.btn-outline-secondary').click()
    cy.get('#displayed_year').should('have.text', "2018")

  })


})
