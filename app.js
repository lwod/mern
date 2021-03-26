const config = require('config');

const express = require('express');
const app = express();
const port = process.env.PORT || config.get('port')

const mongoose = require('mongoose');

app.get("/", async (req,res)=>{
	res.json({
		status:"app"
	});
})

async function start(){
	try{
		await mongoose.connect(config.get('mongoUri'), {
			useNewUrlParser : true,
			useUnifiedTopology : true,
			useCreateIndex : true,
		})
		
		app.listen(port, ()=>{
			console.log('mern started : ', port)
		})
	}catch(e){
		console.log('Server Error ', e.message)
		process.exit(1)
	}
}
start()

