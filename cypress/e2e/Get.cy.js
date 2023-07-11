describe('Testing API Endpoints Using Cypress', () => {
  beforeEach(() => {
    cy.request('https://tokoOnline/qty')
  });
  it('Test GET Request', () => {
    (response) => {
  expect(response.body).to.have.property('status').to.equal(200)};
});
  });


