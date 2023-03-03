const { afterEach, beforeEach, describe, expect, it } = require('@jest/globals');

const getAllResources = require('../../../lib/queries/get-all-resources.js');
const getResources = require('./get-resources.js');

jest.mock('../../../lib/queries/get-all-resources.js');

describe('GET /resource/:id', () => {
	const req = {};
	const res = { json: jest.fn(), send: jest.fn(), sendStatus: jest.fn() };

	afterEach(jest.clearAllMocks);

	beforeEach(() => {
		getAllResources.mockResolvedValue([{ id: '42', type: 'resource' }]);
	});

	it('responds with a collection of resources', async () => {
		await getResources(req, res);

		expect(getAllResources).toHaveBeenCalled();
		expect(res.json).toHaveBeenCalled();
	});
});
