/** @type {(id: string) => Promise<Resource>} */
const getResourceById = async (id) =>
	id === '42'
		? {
				id,
				type: 'resource',
				title: 'SWE-Tube Project',
				description: 'SWE-Tube project repository, hosted by GitHub.',
				url: 'https://github.com/nimonian/swe-tube',
				createdBy: 'matthew.gibbons@multiverse.io',
				createdAt: '2023-02-27T12:09:54.190Z',
				updatedAt: null
		  }
		: undefined;

module.exports = getResourceById;
