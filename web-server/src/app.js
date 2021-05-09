const path = require("path")
const express = require("express")
const geocode = require("./utils/geocode")
const forecast = require("./utils/forecast")

const app = express()
const publicDirectoryPath = path.join(__dirname, '../public')

app.use(express.static(publicDirectoryPath))

app.get("/weather", (req, res) => {
    if (!req.query.address) {
        return res.send({
            error: 'Address param is mandatory'
        })
    }

    geocode(req.query.address, (error, { latitude, longitude, location } = {}) => {
        if (error) {
            return res.send({ error })
        }

        forecast(latitude, longitude, (error, forecastData) => {
            if (error) {
                return res.send({ error })
            }

            res.send({
                forecast: forecastData,
                location,
                address: req.query.address
            })
        })
    })
})

app.get('*', (req, res) => {
    res.send('404 page')
})

app.listen(3000, () => {
    console.log('Server is up on port 3000')
})