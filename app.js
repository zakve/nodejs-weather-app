const request = require('postman-request')
const dotenv = require('dotenv').config()

const url = `http://api.weatherstack.com/current?access_key=${process.env.WEATHERSTACK_KEY}&query=49.19,16.57`

request(url, (error, response) => {
    const data = JSON.parse(response.body)
    console.log(data)
})