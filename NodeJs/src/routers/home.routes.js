const router = require('express').Router();

router.get('/',(req, res)=>{
    return res.json({message:"hola mundo, Como estas Chei"})
})

module.exports = router