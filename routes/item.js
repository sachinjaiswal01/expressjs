const express = require('express')
const router = express.Router()

//request story...
router.get('/',(req,res)=>{
    res.send('This is a GET request!')
    // res.sendFile('../index.html',{root:__dirname})
})

router.post('/',(req,res)=>{
    res.send('This is a POST request!')
})

router.put('/',(req,res)=>{
    res.send('This is a PUT request!')
})
router.delete('/',(req,res)=>{
    res.send('This is a DELETE request!')
})

module.exports = router