const express = require('express');
const router = express.Router();
const Insta = require('@androz2091/insta.js');
const client = new Insta.Client();

router.get('/', async function(req, res){
    const {username = 'username'} = req.query;
    const {sandi = 'sandi'} = req.query;
    try {
        res.setHeader('Content-Type', 'application/json');
        res.setHeader('Cache-Control', 's-max-age=1, stale-while-revalidate');
        client.login(`${username}`,`${sandi}`);
            client.on('connected', () => {
            client.fetchUser(`${username}`)
                .then((user) => {
                    res.status(200).send(user);
            });
        });
    }catch(e) {
        res.status(e.statusCode || 500).json({'status': e.message});
    }
});

module.exports = router;