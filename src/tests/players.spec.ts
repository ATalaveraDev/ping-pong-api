import * as request from 'supertest';
import { expect } from 'chai';

const server = request.agent('http://localhost:3000');

describe('Players', () => {
  it('should work', async () => {
    server.get('/players').end((err, res) => {
      expect(res.status).to.equal(200);
    });
  });
});
