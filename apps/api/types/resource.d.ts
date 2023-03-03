/*
 * This `.d.ts` is an ambient type definition file that enables the use of
 * JavaScript code in TypeScript projects. VSCode will also use ambient type
 * definitions to provide type information in JavaScript code and
 * documentation.
 */

/**
 * Resource
 */
type Resource = {
	id: string;
	type: 'resource';
	title: string;
	description: string;
	url: string;
	createdBy: string;
	createdAt: string;
	updatedAt: string | null;
};
