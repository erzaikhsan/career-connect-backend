const app = require('../../server');
const request = require('supertest');
const { api } = require('../../config');

let getToken = '';

describe('Login User', () => {
  it('Should return status 200 success & a access Token', (done) => {
    const input = {
      email: 'jobseeker0@gmail.com',
      password: 'password0'
    };

    request(app)
      .post(`/${api}/auth/login`)
      .send(input)
      .expect(200)
      .then((response) => {
        getToken = response.body.data.token;
        done();
      });
  });
  it('Should return status 401 failed', (done) => {
    const input = {
      email: 'jobseeker10@gmail.com',
      password: 'password10'
    };

    request(app).post(`/${api}/auth/login`).send(input).expect(401, done);
  });
  it('Should return status 400 invalid form', (done) => {
    const input = {
      email: 'jobseeker0@gmail.com',
      password: 12345678
    };

    request(app).post(`/${api}/auth/login`).send(input).expect(400, done);
  });
});
