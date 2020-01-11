const express = require('express');

const projectRouter = require('./project-api/api-router');

const server = express();

server.use(express.json());
server.use('/api/project', projectRouter);

server.listen(5000, "127.0.0.1", () => {
    console.log("its running")
})
module.exports = server;