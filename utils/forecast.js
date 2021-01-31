const request = require('postman-request')
const dotenv = require('dotenv').config()

const forecast = (lat, lon, callback) => {
    const weatherURL = `http://api.weatherstack.com/current?access_key=${process.env.WEATHERSTACK_KEY}&query=${lat},${lon}`

    request({url: weatherURL, json: true}, (error, response) => {
        if (error) {
            callback('Unable to connect to weather service', undefined)
        } else if (response.body?.error) {
            callback('Unable to find location', undefined)
        } else {
            callback(undefined, {
                current: response.body.current
            })
        }
    })
}

module.exports = forecast