
import { getWebhookSubscription } from '../../src/lib/tools/webhook';
import dotenv from 'dotenv';

dotenv.config();

describe('Webhook MCP', () => {
    it('should get webhook subscription or null if none exists', async () => {
        const result = await getWebhookSubscription();
        // Should return the subscription object or null if not set up
        expect(result === null || typeof result === 'object').toBe(true);
    });
});
