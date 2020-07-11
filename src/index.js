const express = require('express');
const { request, response } = require('express');
const app = express();
const port = process.env.PORT || 3000;
let message = '';

app.get('/',(request, response)=>{
    const statusCode = 200;
    response
    .status(statusCode)
    .json({
        statusCode
    });
});

app.get('/memory_usage',(request, response)=>{
    const { heapUsed } = process.memoryUsage();
    const memoryUsage = Math.round((heapUsed / 1024 / 1024)*100) / 100;
    const memoryUsageString = `${memoryUsage} MB`;
    response.json({
        memoryUsage: {
            used: memoryUsageString,
            bytes: heapUsed,
            megaBytes: memoryUsage
        }
    })
});

app.get('/message',(request, response)=>{
    if(!message){
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

app.post('/message/:str', (request, response)=>{
    const { str } = request.params;
    message = str.toString();
    const statusCode = 204;
    response
    .status(statusCode)
    .json({
        statusCode
    });
});

app.listen(port, (error)=>{
    if(error){
        throw Error('Error internal server! ', error);
    }
    console.log(`Application is running on http://localhost:${port}`);
});



