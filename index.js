const express = require('express');
const app = express();
const port = process.env.PORT || 5001

app.get("/", async (req,res)=>{
	req.json({
		status:"OK"
	});
})

app.listen(port, ()=>{
	console.log('mern started')
})