const config = require('config');

const express = require('express');
const app = express();
const port = process.env.PORT || config.get('port')

app.get("/", async (req,res)=>{
	res.json({
		status:"app"
	});
})

app.listen(port, ()=>{
	console.log('mern started : ', port)
})