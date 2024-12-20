const express= require('express')
const app = express();

const port = 4000;

// loading middle ware into app
app.use(express.json());

//Middleware -- logging , auth ,validation
const loggingMiddleware =  function(req,res,next){
    console.log('LOGGING...')
    next();
}
app.use(loggingMiddleware); //loading into application
const authMiddleware =  function(req,res,next){
    console.log('authenticating...')
    next();
}
app.use(authMiddleware);

const validMiddleware =  function(req,res,next){
    console.log('validating...')
    next();
}
app.use(validMiddleware);


//requsting...
app.get('/',(req,res)=>{
    console.log(req.body)
    res.send('Hello world ! ');
});

app.listen(port,()=>{
    console.log(`listening on port ${port}`)
})