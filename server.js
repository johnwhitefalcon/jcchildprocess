

const express = require('express')
const app = express();
const fs = require('fs')
// const { fork } = require("child_process");
// const child = fork("child.js");

var spawn = require('child_process').spawn




app.get('/', function(req, res){

//  fs.readFile('child.js', function(error, data){
//      res.write(data)
//      res.end()
//  })
var process = spawn('node' , ['child.js'])
var data1;

process.stdout.on('data' , function(data){
    data1 = data.toString();
    
})
process.on('close', (code) => {
  res.send(data1);
  });

});


app.listen(3000);




