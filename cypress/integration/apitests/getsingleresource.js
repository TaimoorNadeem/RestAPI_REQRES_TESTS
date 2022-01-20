/// <reference types ="Cypress" />
describe('Get API get single resource', () => {
    it('GET - Single resource', () => {
        cy.request('https://reqres.in/api/unknown/2').as('todoRequest')
        cy.get('@todoRequest').then(res => {
            expect(res.status).to.eq(200)
            expect(res.body.data.id).to.eq(2)
            expect(res.body.data.name).to.eq('fuchsia rose')
            expect(res.body.data.year).eq(2001)
            expect(res.body.data.color).eq('#C74375')
            expect(res.body.data.pantone_value).eq('17-2031')
            expect(res.body.support.url).eq('https://reqres.in/#support-heading')
            expect(res.body.support.text).eq('To keep ReqRes free, contributions towards server costs are appreciated!')
        })
    })
})