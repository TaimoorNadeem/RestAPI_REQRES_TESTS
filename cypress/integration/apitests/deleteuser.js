/// <reference types ="Cypress" />


describe('Post - Post creat user request', () => {

    it('Create user test', () => {

        const event = new Date('22 January 2022 11:02 GMT');
        const currentTime = event.toISOString();
        
        cy.request({

            method : 'POST',
            url : 'https://reqres.in/api/users/2',
            body : {

                "name" : "morpheus",
                "job": "leader",
                "id": "855",
                "createdAt": currentTime
            }
        }).then(res =>{

            cy.request({

                method : 'DELETE',
                url : 'https://reqres.in/api/users/2',
                body : {
    
                    "name" : "morpheus",
                    "job": "leader",
                    "id": "855",
                    "createdAt": currentTime
                }
                }).then(res =>{

                    cy.log(JSON.stringify(res))
                    expect(res.status).to.eq(204)

                })
            
        })

    })

})