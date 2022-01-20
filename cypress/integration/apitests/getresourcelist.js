/// <reference types ="Cypress" />
describe('Get API get resource list', () => {
    it('GET - Resource List', () => {
        cy.request('https://reqres.in/api/unknown').as('todoRequest')
        cy.get('@todoRequest').then(res => {
            expect(res.status).to.eq(200)
            expect(res.body.page).to.eq(1)
            expect(res.body.per_page).to.eq(6)
            expect(res.body.total).eq(12)
            expect(res.body.total_pages).eq(2)
        })
    })
})