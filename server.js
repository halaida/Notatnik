const express = require("express");

const app = express();

app.get('/', (req, res)=>{
    res.send('Serwer działa');

});

app.listen(3000, ()=>{
    console.log('server listen');
});