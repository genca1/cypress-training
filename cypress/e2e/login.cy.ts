describe('testing login page', () => {
  it('should visit site and register', () => {
    cy.visit('https://practicesoftwaretesting.com/');
    cy.get('[data-test="nav-sign-in"]').click();
    cy.get('[data-test="email"]').type('aytac@aytac.com');
    cy.get('[data-test="password"]').type('$implePass1');
    cy.get('[data-test="login-submit"]').click();

    cy.get('[data-test="nav-menu"]').contains('Aytac Genc');
  })
})