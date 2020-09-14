const express = require('express');
const handler = require('./handler');
const router = express.Router();

router.post('/search', (req, res)=>{
    filter = req.body;
    var resultado = handler.search(filter);
    resultado.then(data => {
        res.json(data);
    });    
});

module.exports = router;