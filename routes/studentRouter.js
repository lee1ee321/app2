var express=require('express');
var studentDB=require('../db/studentDB');
var studentRouter=express.Router();

studentRouter.get('/findAll',function(req,resp){
	studentDB.findAll(function(results){
		resp.json(results);
		//resp.send(JSON.stringify(results));
	})
	
})
studentRouter.post('/login',function(req,resp){
	resp.send('登录成功');
})
//暴露借口
module.exports=studentRouter;
