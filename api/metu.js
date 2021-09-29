const express = require('express');
const router = express.Router();
const Insta = require('@androz2091/insta.js');
const client = new Insta.Client();


router.post('/', async(req, res) =>{
    try{
        res.statusCode = 200;
        client.logout();
    }catch(e){
        console.error(`Erorr Pek Metu `, e.message);
        res.status(e.statusCode || 500).json({'Indikasi': e.message});
    }
});

module.exports = router;