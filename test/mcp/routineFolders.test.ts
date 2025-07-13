
import { getRoutineFolders } from '../../src/lib/tools/routineFolders';
import dotenv from 'dotenv';

dotenv.config();

describe('Routine Folders MCP', () => {
    it('should get routine folders', async () => {
        const result = await getRoutineFolders({ page: 1, pageSize: 5 });
        expect(result.routine_folders).toBeDefined();
    });
});
