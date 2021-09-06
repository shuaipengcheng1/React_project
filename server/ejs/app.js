var express = require('express');
var path = require('path');
var NavRouter =require('./routes/Nav')
var TitleRouter =require('./routes/Title')
var ImageRouter= require('./routes/Image')


var app = express();

app.use(express.urlencoded({ extended: false }));

app.use(express.static(path.join(__dirname, 'public')));

// 使用路由
app.use('/Nav',NavRouter)
app.use('/Title',TitleRouter)
app.use('/Image',ImageRouter)


app.listen(5000,()=>{
    console.log('开启')
})


module.exports = app;
