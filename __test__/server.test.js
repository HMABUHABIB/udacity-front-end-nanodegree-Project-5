const app = require('../src/server/server')
const supertest = require('supertest')
const request = supertest(app)



describe('check the endpoint', () => {

 it('gets the test endpoint', async done => {
  const response = await request.get('/test2')
  expect(response.status).toBe(200)
  expect(response.body.message).toBe('pass!')
  done()
 })

 it('gets the test endpoint', async done => {
  const response = await request.post('/test2?zip=33615')
  expect(response.status).toBe(200)
  expect(response.body.zip).toBe('33615')
  done()
 })
})








