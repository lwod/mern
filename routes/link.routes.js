const Link = require('../models/Link')

const {Router} = require('express')
const router = Router()

router.post(
	'/generate',
	async (req,res)=>{
		try{
			
		
		}catch (e) {
			res.status(500).json({
				message: 'Что-то пошло не так, попробуйте снова'
			})
		}
})

router.get(
	'/',
	async (req,res)=>{
		try{
		
		
		}catch (e) {
			res.status(500).json({
				message: 'Что-то пошло не так, попробуйте снова'
			})
		}
	
})

router(
	'/:id',
	async (req,res)=>{
		try{
		
		
		}catch (e) {
			res.status(500).json({
				message: 'Что-то пошло не так, попробуйте снова'
			})
		}
	
})

module.exports = router()
