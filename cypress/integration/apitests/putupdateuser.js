/// <reference types ="Cypress" />


describe('Put - Update created user', () => {

    it('Update user test', () => {

        const event = new Date('22 January 2022 11:02 GMT');
        const currentTime = event.toISOString();
        
        cy.request({

            method : 'PUT',
            url : 'https://reqres.in/api/users/2',
            body : {

                "name" : "morpheus",
                "job": "leaderzion resident",
                "id": "591",
                "createdAt": currentTime
            }
        }).then(res =>{
            
            cy.log(JSON.stringify(res))
            expect(res.status).to.eq(200)
            expect(res.body).has.property('name','morpheus')
            expect(res.body).has.property('job','leaderzion resident')
            expect(res.body).has.property('id','591')
        })

    })

})