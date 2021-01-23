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

 it('gets the endpoint /geonames with Bielefeld city', async done => {
  const response = await request.get('/geonames?city=bielefeld')
  expect(response.status).toBe(200)
  console.log(response.body.totalResultsCount > 0);
  expect(response.body.totalResultsCount > 0).toBe(true)
  done()
 })

 it('gets the endpoint /geonames with non-existed city', async done => {
  const response = await request.get('/geonames?city=non-existed')
  expect(response.status).toBe(200)
  console.log(response.body.totalResultsCount > 0);
  expect(response.body.totalResultsCount > 0).toBe(false)
  done()
 })
})








