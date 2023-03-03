const { afterEach, beforeEach, describe, expect, it } = require('@jest/globals');

const getResourceById = require('../../../lib/queries/get-resource-by-id.js');
const getResource = require('./get-resource.js');

jest.mock('../../../lib/queries/get-resource-by-id.js');

describe('GET /resource/:id', () => {
	const req = { params: { id: '42' } };
	const res = { json: jest.fn(), send: jest.fn(), sendStatus: jest.fn() };

	describe('with an :id parameter matching an existing resource', () => {
		afterEach(jest.clearAllMocks);

		beforeEach(() => {
			getResourceById.mockResolvedValue({ id: '42', type: 'resource' });
		});

		it('responds with the resource', async () => {
			await getResource(req, res);

			expect(res.json).toHaveBeenCalledWith({ id: '42', type: 'resource' });
		});
	});

	describe('with an :id parameter that does not match an existing resource', () => {
		afterEach(jest.clearAllMocks);

		beforeEach(() => {
			getResourceById.mockResolvedValue(undefined);
		});

		it('responds with 404 Not Found', async () => {
			await getResource(req, res);

			expect(res.sendStatus).toHaveBeenCalledWith(404);
		});
	});
});
