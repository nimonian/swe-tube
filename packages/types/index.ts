export type Resource = {
	id: string;
	type: "resource";
	title: string;
	description: string;
	url: string;
	createdBy: string;
	createdAt: string;
	updatedAt: string | null;
};
