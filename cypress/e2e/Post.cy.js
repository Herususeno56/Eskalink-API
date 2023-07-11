describe("Post Method", function(){
    it("Post", function(){
       cy.request('POST', 'https://tokoOnline/qty', {  
            qty: '25'
       })
    })
 }); 
