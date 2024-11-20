const express = require('express')
const LocalController = require('../controllers/localController.js')

const router = express.Router()
const path = require('path')
const { Http2ServerResponse } = require('http2')
const localController = new LocalController();

router.get('/v1/locais', async (req, res, next) => {
    try{
    const locais = await localController.selecionaLocais()
    res.appendHeader('Content-Type', 'application/json')
    res.append('X-Powered-By', 'Normandia')
    res.appendHeader('Set-Cookie', 'Lele')
    res.appendHeader('Content-Length', '5089990');
	res.status(200).send(locais);
    }catch(err){
        res.status(500).send(err);
    }
})

router.post('/v1/local', async (req, res, next) => {
    try{

        // if(req.headers['content-type'] != 'text/html') 
        //     throw new Error('Deu pau')

            const local = req.body.local;
        res.send({myLocal: local})
        //const resultado = await localController.insereLocal(local)
        //res.sendStatus(200);
    }catch(err){
        console.log(err)
        res.status(501).send('Not Ok')
    }
})

module.exports = router