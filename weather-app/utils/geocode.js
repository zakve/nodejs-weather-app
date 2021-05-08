const request = require('postman-request')
const dotenv = require('dotenv').config()

const geocode = (address, callback) => {
    const geocodeURL = `https://api.mapbox.com/geocoding/v5/mapbox.places/${encodeURIComponent(address)}.json?access_token=${process.env.MAPBOX_KEY}`
    request({url: geocodeURL, json: true}, (error, {body} ={}) => {
        if (error) {
            callback('Unable to connect to location service!', undefined)
        } else if (body?.features?.length === 0) {
            callback('Unable to find location', undefined)
        } else {
            callback(undefined, {
                latitude: body?.features[0]?.center[0],
                longitude: body?.features[0]?.center[1],
                location: body?.features[0]?.place_name
            })
        }
    })
}

module.exports = geocode