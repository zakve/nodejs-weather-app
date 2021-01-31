const request = require('postman-request')
const dotenv = require('dotenv').config()
const geocode = require('./utils/geocode')

const weatherURL = `http://api.weatherstack.com/current?access_key=${process.env.WEATHERSTACK_KEY}&query=49.19,16.57`
const geocodeURL = `https://api.mapbox.com/geocoding/v5/mapbox.places/Los%20Angeles.json?access_token=${process.env.MAPBOX_KEY}`

// request({url: weatherURL, json: true}, (error, response) => {
//     if (error) {
//         console.log('Unable to connect to weather service!')
//     } else if (response.body.error) {
//         console.log('Unable to find location')
//     } else {
//         console.log(response.body.current)
//     }
// })

geocode('Brno', (error, data) => {
    console.log('Error', error)
    console.log('Data', data)
})