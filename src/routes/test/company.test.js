const {
  removeCompany,
  createCompany,
  getCompany,
  createUser,
  removeUsers
} = require('./company.utils');
const supertest = require('supertest');
const jwt = require('jsonwebtoken');
const app = require('../../server');
const path = require('path');
require('dotenv').config();

const payload = {
  id: 1,
  email: 'test'
};
const key = process.env.JWT_SECRET;
const aksesToken = jwt.sign(payload, key, { expiresIn: '2h' });

describe('GET /company/:id', function () {
  beforeEach(async () => {
    await createUser();
    await createCompany();
  });

  afterEach(async () => {
    await removeCompany();
    await removeUsers();
  });
  it('should can get Company by id', async () => {
    const company = await getCompany();
    const result = await supertest(app)
      .get(`/api/v1/company/` + company.id)
      .set('Authorization', `Bearer ${aksesToken}`);

    expect(result.status).toBe(200);
    expect(result.body.message).toBe('Success');
    expect(result.body.data).toBeDefined;
  });
  it('should reject if id not found', async () => {
    const result = await supertest(app)
      .get(`/api/v1/company/` + 99999)
      .set('Authorization', `Bearer ${aksesToken}`);

    expect(result.status).toBe(404);
    expect(result.body.message).toBe('Company not found');
    expect(result.body.data).toBeUndefined;
  });

  it('should reject if id not be number', async () => {
    const result = await supertest(app)
      .get(`/api/v1/company/` + 'asdf')
      .set('Authorization', `Bearer ${aksesToken}`);

    expect(result.status).toBe(400);
    expect(result.body.message).toBe('Invalid input');
    expect(result.body.data).toBeUndefined;
  });
  it('should reject if not have token ', async () => {
    const company = await getCompany();
    const result = await supertest(app).get(`/api/v1/company/` + company.id);

    expect(result.status).toBe(400);
    expect(result.body.message).toBe('Silahkan login terlebih dahulu');
  });

  it('should reject if token expired or not verify', async () => {
    const company = await getCompany();
    const result = await supertest(app)
      .get(`/api/v1/company/` + company.id)
      .set('Authorization', `Bearer ${aksesToken}+asdwq`);

    expect(result.status).toBe(401);
    expect(result.body.message).toBe(
      'Token akses tidak valid atau kedaluwarsa.'
    );
  });
});

describe('PUT /company/:id', function () {
  beforeEach(async () => {
    await createUser();
    await createCompany();
  });

  afterEach(async () => {
    await removeCompany();
    await removeUsers();
  });

  it('should can update Company by id', async () => {
    const company = await getCompany();
    const result = await supertest(app)
      .put(`/api/v1/company/` + company.id)
      .set('Authorization', `Bearer ${aksesToken}`)
      .attach(
        'file',
        path.join(__dirname, '../public/uploads/file-1699930997393.png')
      )
      .field('name', 'inal')
      .field('type', 'Technology')
      .field('description', 'this description tes')
      .field('website', 'example.com')
      .field('email', 'example@mail.com')
      .field('phone_number', '0098651239')
      .field('address', 'Jl soekarno hatta');
  });

  // it('should can update Company by id', async () => {
  //   const company = await getCompany();
  //   const result = await supertest(app)
  //     .put(`/api/v1/company/` + company.id)
  //     .set('Authorization', `Bearer ${aksesToken}`)
  //     .send({
  //       file: 'company.png',
  //       name: 'test',
  //       type: 'Technology',
  //       description: 'this description tes',
  //       website: 'test.com',
  //       email: 'test@mail.com',
  //       phone_number: '088901672341',
  //       address: 'Jl soekarno hatta'
  //     });
  //   console.log(result.body)
  //   expect(result.body.message).toBe('Seccess');
  //   expect(result.status).toBe(200);
  //   expect(result.body.data.name).toBe('test');
  // });
});
