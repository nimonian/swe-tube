const { describe, expect, it } = require('@jest/globals');
const request = require('supertest');

describe('GET /:id', () => {
	const req = () =>
		request('http://localhost:9999/.netlify/functions')
			.get('/resources/42')
			.set('Accept', 'application/json');

	it('succeeds', async () => {
		const { statusCode } = await req();

		expect(statusCode).toBe(200);
	});

	it('responds with `application/json`', async () => {
		const { headers } = await req();

		expect(headers['content-type']).toContain('application/json');
	});

	it('responds with a resource', async () => {
		const resource = await req().then(({ text }) => JSON.parse(text));

		expect(resource).toHaveProperty('id');
		expect(resource).toHaveProperty('type', 'resource');
	});
});
