# SWE-Tube API

This is the API service for SWE-Tube.

## List Resources

Retrieves a list of all learning resources.

### Endpoint

`GET /resources`

### Request

No request parameters are required.

### Response

| Field       | Type   | Description                                           |
| :---------- | :----- | :---------------------------------------------------- |
| id          | string | The unique identifier of the resource.                |
| title       | string | The title of the resource.                            |
| description | string | A brief description of the resource.                  |
| url         | string | The URL of the resource.                              |
| type        | string | The type of the resource (e.g., article, video).      |
| createdBy   | string | The name of the user who created the resource.        |
| createdAt   | string | The date and time when the resource was created.      |
| updatedAt   | string | The date and time when the resource was last updated. |

### Example Response:

```json
[
	{
		"id": "1",
		"title": "Introduction to JavaScript",
		"description": "Learn the basics of JavaScript programming.",
		"url": "https://www.example.com/intro-to-javascript",
		"type": "article",
		"created_by": "John Doe",
		"created_at": "2022-01-01T00:00:00Z",
		"updated_at": "2022-01-01T00:00:00Z"
	},
	{
		"id": "2",
		"title": "React Tutorial",
		"description": "Learn how to build web applications with React.",
		"url": "https://www.example.com/react-tutorial",
		"type": "video",
		"created_by": "Jane Smith",
		"created_at": "2022-01-02T00:00:00Z",
		"updated_at": "2022-01-02T00:00:00Z"
	}
]
```

## Get Resource

Retrieves a single learning resource by ID.

### Endpoint:

`GET /resource/:id`

### Request

| Parameter | Type   | Description                                        |
| :-------- | :----- | :------------------------------------------------- |
| id        | string | The unique identifier of the resource to retrieve. |

### Response

| Field       | Type   | Description                                           |
| :---------- | :----- | :---------------------------------------------------- |
| id          | string | The unique identifier of the resource.                |
| title       | string | The title of the resource.                            |
| description | string | A brief description of the resource.                  |
| url         | string | The URL of the resource.                              |
| type        | string | The type of the resource (e.g., article, video).      |
| createdBy   | string | The name of the user who created the resource.        |
| createdAt   | string | The date and time when the resource was created.      |
| updatedAt   | string | The date and time when the resource was last updated. |

### Example Response:

```json
{
	"id": "1",
	"title": "Introduction to JavaScript",
	"description": "Learn the basics of JavaScript programming.",
	"url": "https://www.example.com/intro-to-javascript",
	"type": "article",
	"created_by": "John Doe",
	"created_at": "2022-01-01T00:00:00Z",
	"updated_at": "2022-01-01T00:00:00Z"
}
```
