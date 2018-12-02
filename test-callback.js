'use strict'

const request = require('request')

// get data
request
 .get('https://www.themealdb.com/api/json/v1/1/random.php',(err,res,body)=> {
	 if(!err) {
		 console.log('body----', JSON.parse(body))
		 console.log('res------', res.statusCode)
	 } else {
		 console.log('error ---', err)
	 }
 })
 