const geocode = require('./utils/geocode')
const forecast = require('./utils/forecast')

geocode('Brno', (error, data) => {
    console.log('Error', error)
    console.log('Data', data)
})

forecast(14.42139, 50.08861, (error, data) => {
    console.log('Error', error)
    console.log('Data', data)
})