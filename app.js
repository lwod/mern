const config = require('config');

const express = require('express');
const app = express();
const port = process.env.PORT || config.get('port')

const path = require('path')

const mongoose = require('mongoose');

app.use(express.json({extended:true}))

app.use('/api/auth', require('./routes/auth.routes'));
app.use('/api/link', require('./routes/link.routes'));
app.use('/t', require('./routes/redirect.router'));

//if(process.env.NODE_ENV === 'production'){
	app.use('/', express.static(path.join(__dirname, 'client', 'build')))
	
	app.get('*', async (req,res)=>{
		res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'))
	})
//}

// app.get("/", async (req,res)=>{
// 	res.json({
// 		status:"app"
// 	});
// })

//

async function start(){
	try{
		await mongoose.connect(config.get('mongoUri'), {
			useNewUrlParser : true,
			useUnifiedTopology : true,
			useCreateIndex : true,
		})
		
		app.listen(port, ()=>{
			console.log('mern on port : ', port);
			console.log('auth-router and user-model');
		})
	}catch(e){
		console.log('Server Error ', e.message)
		process.exit(1)
	}
}
start()

