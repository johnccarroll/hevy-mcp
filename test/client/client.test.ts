
import request from 'supertest';
import express from 'express';
import bodyParser from 'body-parser';
import mcpRouter from '../../src/routes/mcp';

const app = express();
app.use(bodyParser.json());
app.use('/mcp', mcpRouter);

describe('MCP Client', () => {
  it('should get workouts', async () => {
    const response = await request(app)
      .post('/mcp/execute')
      .send({
        tool: 'getWorkouts',
        parameters: {
          page: 1,
          pageSize: 5
        }
      });
    expect(response.status).toBe(200);
    expect(response.body.workouts).toBeDefined();
  });
});
