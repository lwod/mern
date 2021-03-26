const config = require('config');

const express = require('express');
const app = express();
const port = config.get('port') || 5000

app.get("/", async (req,res)=>{
	res.json({
		status:"app"
	});
})

app.listen(port, ()=>{
	console.log('mern started : ', port)
})