
import { getRoutines } from '../../src/lib/tools/routines';
import dotenv from 'dotenv';

dotenv.config();

describe('Routines MCP', () => {
    it('should get routines', async () => {
        const result = await getRoutines({ page: 1, pageSize: 5 });
        expect(result.routines).toBeDefined();
    });
});
