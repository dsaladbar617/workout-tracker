import server from "./server.js";
const port = 8080;

server.listen(port, () => {
	console.log(`server is listening on port ${port}`);
});
