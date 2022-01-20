/// <reference types ="Cypress" />
describe('Get API single resource not found', () => {
    it('GET - Single resource not found', () => {
        cy.request({
            method : 'GET',
            url : 'https://reqres.in/api/unknown/23',
            failOnStatusCode : false,

        }).then(res =>{
            expect(res.status).to.eq(404)
        })

    })
})