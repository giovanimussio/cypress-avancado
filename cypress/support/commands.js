import 'cypress-localstorage-commands'

Cypress.Commands.add('assertLoadingIsShownAndHidden', () => {
  cy.contains('Loading ...').should('be.visible')
  cy.contains('Loading ...').should('not.exist')
})

Cypress.Commands.add('assertApidataInPosition',(position)=>{
  const stories = require('../fixtures/stories.json')
  cy.get('.item')
    .should('contain',stories.hits[position].title)
    .and('contain',stories.hits[position].author)
    .and('contain',stories.hits[position].num_comments)
    .and('contain',stories.hits[position].points)
  cy.get(`.item a:contains(${stories.hits[position].title})`)
    .should('have.attr', 'href',stories.hits[position].url)
})
