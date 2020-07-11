const express = require('express');
const app = express();
const port = process.env.PORT || 3000;

app.get('/',(request, response)=>{
    response.send('Application is running!');
});

app.listen(port, (error)=>{
    if(error){
        throw Error('Error internal server! ', error);
    }
    console.log(`Application is running on http://localhost:${port}`);
});



