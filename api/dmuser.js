const express = require('express');
const router = express.Router();
const Insta = require('@androz2091/insta.js');
const client = new Insta.Client();

router.get('/',  async function(i, v){
    const {uid = 'uid'} = i.query;
    const {kata = 'kata'} = i.query;
    try {
        v.setHeader('Content-Type', 'application/json');
        v.setHeader('Cache-Control', 's-max-age=1, stale-while-revalidate');
        client.fetchUser(`${uid}`)
        .then((user) => {
            user.fetchPrivateChat()
            .then((chat)=>{
                v.status(200).send(chat);
                chat.sendMessage(`${kata}`);
            }).catch((e)=>{
                v.status(503).json(e.message);
            });
        });
    }catch(e) {
        console.error(`Erorr DM user `, e.message);
        v.status(e.statusCode || 500).json({'Indikasi': e.message});
    }
});

module.exports = router;