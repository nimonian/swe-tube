const app = require("./app.js");

const PORT = process.env["PORT"] ?? 3000;

if (require.main === module) {
	app
		.listen(PORT, () => {
			console.log(`Listening on port ${PORT}`);
		})
		.on("error", (err) => {
			if (/EADDRINUSE/.test(err.message)) {
				console.error(
					`Error: port ${PORT} is already in use - please close the other server and try again`
				);
			} else {
				console.error(err.message);
			}
		});
}
