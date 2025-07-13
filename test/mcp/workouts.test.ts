
import { getWorkouts } from '../../src/lib/tools/workouts';
import dotenv from 'dotenv';

dotenv.config();

describe('Workouts MCP', () => {
    it('should get workouts', async () => {
        const result = await getWorkouts({ page: 1, pageSize: 5 });
        expect(result.workouts).toBeDefined();
    });
});
