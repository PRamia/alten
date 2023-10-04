import googleSearch from '../selectors/googleSearch.sel'
import wikipediaPage from '../selectors/wikipediaPage.sel'

describe('template spec', () => {
  before(() => {
    cy.visit('/?hl=es');
    cy.rejectCookies();
  })
  it('should search on googgle.com for \'automatización\' ', () => {
    cy.get(googleSearch.inputSearch).type('automatización{enter}');
  })
  it('should search for the Wikipedia link', () =>{

  })
  it('should check in which year the first automatic process was made', () =>{

  })
  it('should make a screenshot of the wikipedia site', () =>{

  })
})