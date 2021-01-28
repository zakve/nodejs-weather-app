const request = require('postman-request')
const dotenv = require('dotenv').config()

const weatherURL = `http://api.weatherstack.com/current?access_key=${process.env.WEATHERSTACK_KEY}&query=49.19,16.57`
const geocodeURL = `https://api.mapbox.com/geocoding/v5/mapbox.places/Los%20Angeles.json?access_token=${process.env.MAPBOX_KEY}`

request({url: weatherURL, json: true}, (error, response) => {
    console.log(response.body.current)
})

request({url: geocodeURL, json: true}, (error, response) => {
    const latitude = response.body?.features[0]?.center[0]
    const longitude = response.body?.features[0]?.center[1]
    console.log(latitude, longitude)
})