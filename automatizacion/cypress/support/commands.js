
Cypress.Commands.add('rejectCookies', () => { 
    cy.get('button').find('div').contains('Rechazar todo').click();
 });
