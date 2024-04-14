describe('premier test', () => {
 

   
  
  
  beforeEach( () =>{
    cy.visit("cypress/index.html")
   
  });
  it.only('chercher un element ', () =>{
    // first()
    cy.get('h1').first()
    cy.get('h1').last()
    cy.get('h1').eq(2)
    cy.get('h1').contains('Drag')
    cy.get('li').filter('.web')
    cy.get('ul.course-list').contains('Cypress')
    cy.get('ul.course-list li').filter('.list1.web')
    cy.get('.course-list').children('.mobile').eq(0)
    cy.get('.mobile').parent()
    cy.get('.mobile').parents().filter('body')
    cy.get('body').find('.trigger')
    cy.get('.course-list .list1').siblings()
   cy.get('.course-list .list1').siblings(':nth-child(3)')
});

it.only('chercher un element ', () =>{
    cy.xpath(' //*[@id="courses"]').contains('cypress')
  });
  require(
    'cypress-xpath'
    )

});