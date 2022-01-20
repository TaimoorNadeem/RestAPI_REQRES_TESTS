/// <reference types ="Cypress" />


describe('Post - Post login user successful', () => {

    it('Successfully login user test', () => {

        const event = new Date('22 January 2022 11:02 GMT');
        const currentTime = event.toISOString();
        
        cy.request({

            method : 'POST',
            url : 'https://reqres.in/api/login',
            body : {

                "email" : "eve.holt@reqres.in",
                "password": "cityslicka",
            }
        }).then(res =>{
            
            cy.log(JSON.stringify(res))
            expect(res.status).to.eq(200)
            expect(res.body).has.property('token','QpwL5tke4Pnpja7X4')
        })

    })

})