/** @type {() => Promise<Resource[]>} */
const getAllResources = async () =>
	Promise.resolve([
		{
			id: '42',
			type: 'resource',
			title: 'SWE-Tube Project',
			description: 'SWE-Tube project repository, hosted by GitHub.',
			url: 'https://github.com/nimonian/swe-tube',
			createdBy: 'matthew.gibbons@multiverse.io',
			createdAt: '2023-02-27T12:09:54.190Z',
			updatedAt: null
		}
	]);

module.exports = getAllResources;
