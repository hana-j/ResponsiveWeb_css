const express = require('express');
const mongoose = require('mongoose');
const router = express.Router();
const bodyPaser = require('body-parser');
const Post = require('./models/Post');

const app = express();
//db
//DB
//mongoose.connect("mongodb://localhost:27017/board1");
mongoose.connect("mongodb://hana:hana@13.209.85.96:27017/board1?authSource=admin&authMechanism=SCRAM-SHA-1");

const db = mongoose.connection;
db.once('open', function(){
    console.log('DB Connected');
});
db.on('error', function(err){
    console.log('DB ERROR : ', err);
});

//미들웨어 설정들
app.set('view engine', 'ejs');
app.use(express.static(__dirname+'/public'));
app.use(bodyPaser.json());
app.use(bodyPaser.urlencoded({extended:true}));

//Routes
app.use('/', require('./routes'));
app.use('/posts', require('./routes/posts'));

//비밀번호 확인(수정)
app.post('/pwCheck', function(req,res){
    console.log(req.body.password);
        Post.findOne({password:req.body.password},  function(err, post){
            if(err) return res.json(err);
            res.render('posts/edit', {post:post});
            console.log('here')
        });
    
    
});
  
 
//비밀번호 확인(삭제)
app.post('/pwCheck1', function(req,res){
    console.log(req.body.password);
        Post.deleteOne({password:req.body.password}, function(err, result){
            if(err) return res.json(err);
            if(result) return res.send(result);
            console.log('here222')
        });
    
});



//Port 연결s
const port = 3000;
app.listen(port, function(){
    console.log('server on 3000');
});

