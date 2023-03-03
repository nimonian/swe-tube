const { getResourceById } = require('../../../lib/queries');

/**
 * Endpoint handler for member GET request on resources collection.
 *
 * @example
 * Use `curl` to request the resource collection:
 * ```sh
 * curl http://localhost:9999/.netlify/funtions/resources
 * ```
 *
 * @type {import("express").Handler}
 */
const getResource = async (req, res) => {
	const { id } = req.params;

	try {
		const data = await getResourceById(id);

		if (data) {
			res.json(data);
		} else {
			res.sendStatus(404);
		}
	} catch (e) {
		console.error(e);

		res.sendStatus(500);
	}
};

module.exports = getResource;
