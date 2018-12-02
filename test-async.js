'use strict'

const axios = require('axios')

const data = async () => {
    let data1 = {},
        data2 = {}
    
    await axios({
        method: 'GET',
        url: 'https://www.themealdb.com/api/json/v1/1/random.php'
    })
     .then(result => {
         data1 = result.data.meals[0]
         console.log('first process-----', data1.strMeal)
     })
     .catch(err => {
         console.log('err-----', err)
     })

    await axios({
        method: 'GET',
        url: 'https://www.themealdb.com/api/json/v1/1/random.php'
    })
     .then(result => {
         data2 = result.data.meals[0]
         console.log('second process-----', data2.strMeal)
     })
     .catch(err => {
         console.log('err-----', err)
     })  

    console.log('final data: ', data1.strMeal, data2.strMeal) 
}

data()