const express = require('express');
const app = express();
const port = process.env.PORT || 3000;

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
        memoryUsage: memoryUsageString
    })
});

app.listen(port, (error)=>{
    if(error){
        throw Error('Error internal server! ', error);
    }
    console.log(`Application is running on http://localhost:${port}`);
});



