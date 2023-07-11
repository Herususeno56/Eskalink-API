describe('Testing API Endpoints Using Cypress', () => {
  beforeEach(() => {
    cy.request('https://mocki.io/v1/d4867d8b-b5d5-4a48-a4ab-79131b5809b8')
  });
  it('Test GET Request', () => {
    (response) => {
  expect(response.body).to.have.property('status').to.equal(200)};
});
  });


