// require your server and launch it here
const server = require('./api/server');

const port = 9000;

server.listen(port, () => {
    console.log(`\n*** Server running on port http://localhost:${port} ***\n`);
})