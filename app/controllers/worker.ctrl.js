'use strict'
var express = require('express')
var router = express.Router();
var calabashService = require('../services/calabash.srv.js');
var http = require('http');


 
/*var task = cron.schedule('* * * * *', execute, {scheduled:true});
router.get('/start', (req,res) => {
    execute();
    task.start();
    res.send('Cron iniciado')
    
  })


  
router.get('/stop', (req,res) => {
    task.stop()
    res.send('Worker detenido')
  })*/

  router.post('/calabash', (req,res) => {
    calabashService.generateCalabash(req, function(){ 
      res.statusCode = 200;
      res.send({ status: 'Ok' });
    },function(err){
      res.statusCode = 404;
      res.send(err);  
    })
    return res;
  })

module.exports = router;