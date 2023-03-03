const { getAllResources } = require('../../../lib/queries');

/**
 * Endpoint handler for GET request on resources collection.
 *
 * @example
 * Use `curl` to request the resource with `id` of `42`:
 * ```sh
 * curl http://localhost:9999/.netlify/funtions/resources/42
 * ```
 *
 * @type {import("express").Handler}
 */
const getResources = async (req, res) => {
	try {
		const data = await getAllResources();

		res.json(data);
	} catch (e) {
		console.error(e);

		res.sendStatus(500);
	}
};

module.exports = getResources;
