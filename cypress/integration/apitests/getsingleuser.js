/// <reference types ="Cypress" />
describe('Get API get single user', () => {

    it('GET - Get single user', () => {
        cy.request('https://reqres.in/api/users/2').as('todoRequest')
        cy.get('@todoRequest').then(res => {
            expect(res.status).to.eq(200)
            expect(res.body.data.id).to.eq(2)
            expect(res.body.data.email).to.eq('janet.weaver@reqres.in')
            expect(res.body.data.first_name).eq('Janet')
            expect(res.body.data.last_name).eq('Weaver')
            expect(res.body.data.avatar).eq('https://reqres.in/img/faces/2-image.jpg')
            expect(res.body.support.url).eq('https://reqres.in/#support-heading')
            expect(res.body.support.text).eq('To keep ReqRes free, contributions towards server costs are appreciated!')
        })
    })
})