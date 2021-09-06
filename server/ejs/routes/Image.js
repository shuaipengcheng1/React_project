//中间导航栏的路由
var express = require('express')
var mysql = require('mysql');

var database = mysql.createConnection({
    host: "localhost",
    port: 3306,
    user: 'root',
    password: 'spc652324',
    database: "爬虫"
})
database.connect((err, data) => {
    if (!err) {
        console.log('success')
    } else {
        console.log('err')
    }
});
var router = express.Router()
router.get('/data',(req,res)=>{
    res.setHeader('Access-Control-Allow-Origin','*')
    database.query("SELECT * From img",(err,data)=>{
        if(!err){


     res.send({
         Tuijian:JSON.parse(data[0].Tuijian),
         bcimg:JSON.parse(data[0].img),
         lunbo:JSON.parse(data[0].lunbo)
     })

        }else{
console.log(err)
        }
    })
})
module.exports= router
