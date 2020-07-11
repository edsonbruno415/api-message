const express = require('express');
const app = express();
const port = process.env.PORT || 3000;
const path = require('path');
const util = require('util');
const { readFile, writeFile, writeFileSync, existsSync } = require('fs');
const readFileAsync = util.promisify(readFile);
const writeFileAsync = util.promisify(writeFile);

const FILENAME = 'message.txt';
let message;

function createFileIfNotExists(){
    existsSync(path.join(__dirname, FILENAME)) ? true : writeFileAsync(path.join(__dirname, FILENAME),'');
}
createFileIfNotExists();

app.get('/', (request, response) => {
    const statusCode = 200;
    response
        .status(statusCode)
        .json({
            statusCode
        });
});

app.get('/memory_usage', (request, response) => {
    const { heapUsed } = process.memoryUsage();
    const memoryUsage = Math.round((heapUsed / 1024 / 1024) * 100) / 100;
    const memoryUsageString = `${memoryUsage} MB`;
    response.json({
        memoryUsage: {
            used: memoryUsageString,
            bytes: heapUsed,
            megaBytes: memoryUsage
        }
    })
});

app.get('/message', async (request, response) => {
    const result = await readFileAsync(path.join(__dirname, FILENAME));
    message = result.toString();
    if (!message) {
        const statusCode = 419;
        response
            .status(statusCode)
            .json({
                statusCode
            });
        return;
    }
    response.json({
        message
    })
});

app.post('/message/:str', async (request, response) => {
    const { str } = request.params;
    message = str.toString();
    await writeFileAsync(path.join(__dirname, FILENAME), str);
    const statusCode = 204;
    response
        .status(statusCode)
        .json({
            statusCode
        });
});

app.listen(port, (error) => {
    if (error) {
        throw Error('Error internal server! ', error);
    }
    console.log(`Application is running on http://localhost:${port}`);
});



