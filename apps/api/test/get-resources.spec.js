const { describe, expect, it } = require('@jest/globals');
const request = require('supertest');

describe('GET /', () => {
	const req = () =>
		request('http://localhost:9999/.netlify/functions')
			.get('/resources')
			.set('Accept', 'application/json');

	it('succeeds', async () => {
		const { statusCode } = await req();

		expect(statusCode).toBe(200);
	});

	it('responds with `application/json`', async () => {
		const { headers } = await req();

		expect(headers['content-type']).toContain('application/json');
	});

	it('responds with a collection of resources', async () => {
		const resources = await req().then(({ text }) => JSON.parse(text));

		expect(Array.isArray(resources)).toBe(true);
		expect(resources.every(({ id, type }) => id && type === 'resource')).toBe(true);
	});
});
