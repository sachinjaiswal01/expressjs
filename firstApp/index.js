const express =require('express');  //including express module
const app = express();

const port  = 3000;

//Requsting...
app.get('/',(req,res)=>{
    res.send('Hello world!');
})

//starting server
app.listen(port,()=>{
    console.log("server stared!");
});
