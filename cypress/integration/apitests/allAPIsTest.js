/// <reference types ="Cypress" />
describe('All APIs Tests', () => {
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

    it('GET - Single user not found', () => {
        cy.request({
            method : 'GET',
            url : 'https://reqres.in/api/users/23',
            failOnStatusCode : false,

        }).then(res =>{
            expect(res.status).to.eq(404)
        })

    })

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

    it('GET - Single resource not found', () => {
        cy.request({
            method : 'GET',
            url : 'https://reqres.in/api/unknown/23',
            failOnStatusCode : false,

        }).then(res =>{
            expect(res.status).to.eq(404)
        })

    })

    it('Create user test', () => {

        const event = new Date('22 January 2022 11:02 GMT');
        const currentTime = event.toISOString();
        
        cy.request({

            method : 'POST',
            url : 'https://reqres.in/api/users',
            body : {

                "name" : "morpheus",
                "job": "leader",
                "id": "591",
                "createdAt": currentTime
            }
        }).then(res =>{
            
            cy.log(JSON.stringify(res))
            expect(res.status).to.eq(201)
            expect(res.body).has.property('name','morpheus')
            expect(res.body).has.property('job','leader')
            expect(res.body).has.property('id','591')
        })

    })

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

    it('Update user test', () => {

        const event = new Date('22 January 2022 11:02 GMT');
        const currentTime = event.toISOString();
        
        cy.request({

            method : 'PATCH',
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

    it('Successfully register user test', () => {

        const event = new Date('22 January 2022 11:02 GMT');
        const currentTime = event.toISOString();
        
        cy.request({

            method : 'POST',
            url : 'https://reqres.in/api/register',
            body : {

                "email" : "eve.holt@reqres.in",
                "password": "pistol",
            }
        }).then(res =>{
            
            cy.log(JSON.stringify(res))
            expect(res.status).to.eq(200)
            expect(res.body).has.property('id',4)
            expect(res.body).has.property('token','QpwL5tke4Pnpja7X4')
        })

    })

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

    it('Un-successfull register user test', () => {

        const event = new Date('22 January 2022 11:02 GMT');
        const currentTime = event.toISOString();
        
        cy.request({

            method : 'POST',
            url : 'https://reqres.in/api/login',
            failOnStatusCode : false,
            body : {
             "email" : "peter@klaven",
            }
        }).then(res =>{
            
            cy.log(JSON.stringify(res))
            expect(res.status).to.eq(400)
            expect(res.body).has.property('error',"Missing password")
        })

    })

    it('GET - Delayed Response', () => {
        cy.request('https://reqres.in/api/users?delay=3').as('todoRequest')
        cy.get('@todoRequest').then(res => {
            expect(res.status).to.eq(200)
            expect(res.body.page).to.eq(1)
            expect(res.body.per_page).to.eq(6)
            expect(res.body.total).eq(12)
            expect(res.body.total_pages).eq(2)
        })
    })

 })