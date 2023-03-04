describe('Recipe tests', () => {

  it('opens the site', () => {
    cy.visit('localhost:3000')
  })

  it(`Given I have a new recipe
      When I add the new recipe name
      And ingredients
      And measurements
      And cooking method
      Then the new recipe is saved for later`, () => {
        cy.visit('localhost:3000')


  })

  it(`Given I want to look for a recipe
      When I search by the name of the recipe
      Then I find the recipe
      And I can see the ingredients
      And I can see the cooking methods`, () => {
        cy.visit('localhost:3000')
        cy.get('[type=\'radio\']').check('recipe')
        cy.get('[data-cy=home-searchbar-btn]').type('tea')
        cy.get('[data-cy=home-searchbar-btn]').click()

  })

  it(`Given I want to look for a recipe by ingredients
      When I search by the ingredient of the recipe
      Then I find the recipe
      And I can see the ingredients
      And I can see the cooking methods`, () => {
        cy.visit('localhost:3000')
        cy.get('[type=\'radio\']').check('ingredients')
        cy.get('[data-cy=home-searchbar-btn]').type('bread')
        cy.get('[data-cy=home-searchbar-btn]').click()
  })

  it(`Given I want to look for a recipe by ingredients
      When I select all recipes
      Then select search button
      And I can see all recipes`, () => {
        cy.visit('localhost:3000')
        cy.get('[type=\'radio\']').check('all')
        cy.get('[data-cy=home-searchbar-btn]').click()
  })
})
