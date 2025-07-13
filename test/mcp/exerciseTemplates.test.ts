
import { getExerciseTemplates } from '../../src/lib/tools/exerciseTemplates';
import dotenv from 'dotenv';

dotenv.config();

describe('Exercise Templates MCP', () => {
    it('should get exercise templates', async () => {
        const result = await getExerciseTemplates({ page: 1, pageSize: 5 });
        expect(result.exercise_templates).toBeDefined();
    });
});
