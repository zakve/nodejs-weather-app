const request = require('postman-request')
const dotenv = require('dotenv').config()

const forecast = (lat, lon, callback) => {
    const weatherURL = `http://api.weatherstack.com/current?access_key=${process.env.WEATHERSTACK_KEY}&query=${lon},${lat}`

    request({url: weatherURL, json: true}, (error, {body} = {}) => {
        if (error) {
            callback('Unable to connect to weather service', undefined)
        } else if (body?.error) {
            callback('Unable to find location', undefined)
        } else {
            callback(undefined, {
                current: body?.current
            })
        }
    })
}

module.exports = forecast