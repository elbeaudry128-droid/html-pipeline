import request from 'supertest';
import app from '../app'; // Adjust the import according to your app structure

describe('HTML Pipeline API Endpoints', () => {
    it('should respond with health check', async () => {
        const res = await request(app).get('/health-check');
        expect(res.status).toBe(200);
        expect(res.body).toHaveProperty('status', 'OK');
    });

    it('should sanitize input', async () => {
        const res = await request(app)
            .post('/sanitize')
            .send({ input: '<script>alert("xss")</script>' });
        expect(res.status).toBe(200);
        expect(res.body).toHaveProperty('output', '&lt;script&gt;alert(&quot;xss&quot;)&lt;/script&gt;');
    });

    it('should convert markdown to HTML', async () => {
        const res = await request(app)
            .post('/markdown-to-html')
            .send({ markdown: '# Hello World' });
        expect(res.status).toBe(200);
        expect(res.body).toHaveProperty('html', '<h1>Hello World</h1>');
    });
});