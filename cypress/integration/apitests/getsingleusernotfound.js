/// <reference types ="Cypress" />
describe('Get API get single user not found', () => {

    it('GET - Single user not found', () => {
        cy.request({
            method : 'GET',
            url : 'https://reqres.in/api/users/23',
            failOnStatusCode : false,

        }).then(res =>{
            expect(res.status).to.eq(404)
        })

    })
})