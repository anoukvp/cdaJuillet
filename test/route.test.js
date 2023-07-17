const { response } = require('express')
const request= require ('supertest')

let server 

describe('Router TEST', () => {

    beforeEach(() => {
        server = require('../server')
    })

    afterEach(() => {
        server.close()
    })

        describe('GET ON/', () =>{
            it('Should return 200 status', async () =>{
                const response = await request(server).get('/')
                expect(response.status).toBe(200)
            })

            it('Should return 501 Status', async () => {
                const response = await request(server).get('/voilaVoila')
                expect(response.status).toBe(501)
            })

        })
})

describe('GET ON MARCEL', () => {

    it('Should return 200 status', async () => {
        const response = await request(server).get('/marcel/12')
        expect(response.status).toBe(200)
    })
    it('Should return 204 status', async () => {
        const response = await request(server).delete('/marcel/6')
        expect(response.status).toBe(204)
    })
})