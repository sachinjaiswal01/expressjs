const express =require('express');
const app = express();
const port  = 3000;

//import router file

const item = require('./routes/item');

//load into application
app.use('/api',item);

app.listen(port,()=>{
    console.log(`Example app listening on port ${port}`)
})