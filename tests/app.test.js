const request = require('supertest');
const app = require('../dist/config/express');

describe('GET /api/v1', () => {
  test('should return 200 status code', async () => {
    const response = await request(app).get('/api/v1');
    expect(response.statusCode).toBe(200);
    // expect(response.body.users).toHaveLength(3);
    // expect(response.body.users).toEqual(['John', 'Jane', 'Alice']);
  });
});
