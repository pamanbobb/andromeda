const express = require('express');
const router = express.Router();
const Insta = require('@androz2091/insta.js');
const client = new Insta.Client();

router.get('/', async function(i, v) {
    const {uid = 'uid'} = i.query;
    try {
        v.setHeader('Content-Type', 'application/json');
        v.setHeader('Cache-Control', 's-max-age=1, stale-while-revalidate');
        client.fetchUser(`${uid}`)
        .then((user) => {
            user.follow().then(()=>{
                v.status(200).send(user);
            }).catch((e)=>{
                v.status(400).json(e.message);
            });
        });
    }catch(e) {
        console.error(`Erorr Follow UID `, e.message);
        v.status(e.statusCode || 500).json({'Indikasi': e.message});
    }
});

module.exports = router;