/// <reference types ="Cypress" />


describe('Post - Post register user un-successful', () => {

    it('Un-successfull register user test', () => {

        const event = new Date('22 January 2022 11:02 GMT');
        const currentTime = event.toISOString();
        
        cy.request({

            method : 'POST',
            url : 'https://reqres.in/api/register',
            failOnStatusCode : false,
            body : {
             "email" : "eve.holt@reqres.in",
            }
        }).then(res =>{
            
            cy.log(JSON.stringify(res))
            expect(res.status).to.eq(400)
            expect(res.body).has.property('error',"Missing password")
        })

    })

})