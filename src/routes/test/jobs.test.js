const request = require('supertest');
const app = require('../../server');

describe('Get /jobs', () => {
  it('should return all jobs', async () => {
    const res = await request(app).get(`/api/v1/jobs`);

    expect(res.status).toBe(200);
    expect(res.body.status).toBe('Success');
    expect(res.body.data).toBeDefined;
  });
});
