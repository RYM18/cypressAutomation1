


/// <reference types="cypress" />
 
context('premier test', () => {
 
  it('rechercher un element', () =>{
    cy.visit("https://www.google.com/")
    cy.get("#L2AGLb > .QS5gu").click()
  });
 
  it('rechercher un element2', () =>{
    cy.visit("https://www.google.com/")
    cy.get("#L2AGLb > .QS5gu").click()
  });
 
  it('rechercher un element3', () =>{
    cy.visit("https://www.google.com/")
    cy.get("#L2AGLb > .QS5gu").click()
  });
 
  it('rechercher un element4', () =>{
    cy.visit("https://www.google.com/")
    cy.get("#L2AGLb > .QS5gu").click()
  });
 
  it('rechercher un element5', () =>{
    cy.visit("https://www.google.com/")
  });
 
})
 

 
describe('premier test', () => {
 
  it('rechercher un element', () =>{
    cy.visit("https://www.google.com/")
    cy.get("#L2AGLb > .QS5gu").click()
  });
 
  it('rechercher un element2', () =>{
    cy.visit("https://www.google.com/")
    cy.get("#L2AGLb > .QS5gu").click()
  });
 
  it('rechercher un element3', () =>{
    cy.visit("https://www.google.com/")
    cy.get("#L2AGLb > .QS5gu").click()
  });
 
  it('rechercher un element4', () =>{
    cy.visit("https://www.google.com/")
    cy.get("#L2AGLb > .QS5gu").click()
  });
 
  it('rechercher un element5', () =>{
    cy.visit("https://www.google.com/")
  });
 
})
 
describe('premier test', () => {
 
  // before, after, beforeeach,aftereach
  before(() =>{
    cy.log ("test before");
    cy.visit("https://www.google.com/")
  })
 
 
  it('rechercher un element2', () =>{
    cy.get("#L2AGLb > .QS5gu").click()
    cy.get(".gLFyf").type("Cypress")
    cy.get("body").click()
   // cy.get(".gNO89b").click()
  });
  afterEach(() =>{
    cy.log ("test After");
  })
 
 
})

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

  