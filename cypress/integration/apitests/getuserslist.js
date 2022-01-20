/// <reference types ="Cypress" />
describe('Get API users list test', () => {
    it('GET - Users List', () => {
        cy.request('https://reqres.in/api/users?page=2').as('todoRequest')
        cy.get('@todoRequest').then(res => {
            expect(res.status).to.eq(200)
            expect(res.body.page).to.eq(2)
            expect(res.body.per_page).to.eq(6)
            expect(res.body.total).eq(12)
            expect(res.body.total_pages).eq(2)
        })
    })

 })

 