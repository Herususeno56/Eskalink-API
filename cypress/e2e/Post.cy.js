describe("Post Method", function(){
    it("Post", function(){
       cy.request('POST', 'https://reqres.in/api/user', {  
            name: 'morpheus',
            job: 'leader'
       })
    })
 }); 
