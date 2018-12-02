'use strict'

const axios = require('axios')

axios({
    method: 'GET',
    url: 'https://www.themealdb.com/api/json/v1/1/random.php'
})
   .then(result => {
      console.log('hasil-----', result.data)
   })
   .catch(err =>{
      console.log('error----', err)
   })