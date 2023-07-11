describe('Testing API Endpoints Using Cypress', () => {
    beforeEach(() => {
      cy.request('https://tokoOnline/login')
    });
    it('Login', () => {
      (response) => {
    expect(response.body).to.have.property('status').to.equal(200)};
  });
    });
  
  
  