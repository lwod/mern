const User = require('../models/User')
const bycrypt = require('bcryptjs')

const {Router} = require('express')
const router = Router();

router.post('/reqister', async (req, res)=>{
	try{
		
		const {email, password} = req.body
		
		const candidate = await User.findOne({email});
		if(candidate){
			return res.status(400).json({message: 'Такой пользователь уже существует'})
		}
		
		const hashedPassword = await bycrypt.hash(password, 12);
		
		
	}catch (e) {
		res.status(500).json({
			message: 'Что-то пошло не так, попробуйте снова'
		})
	}
})

router.post('/login', async (req, res)=>{

})

module.exports = router;