const bodyParser = require('body-parser')
const express = require('express')
const axios = require('axios')
const dotenv = require("dotenv")
const cors = require('cors')
dotenv.config()

const BASE_URL = 'https://api.openweathermap.org/data/2.5/weather' 
const FORECAST_URL = 'https://api.openweathermap.org/data/2.5/forecast'
const API_KEY = process.env.WEATHER_API_KEY

const app = express()

app.use(cors())
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }));
const port = 4000

app.get('/', (req, res) => {
    res.status(200).send("ok")
})

app.get('/ping', (req, res) => {
    res.status(200).send("pong")
})

app.get('/weather', async (req, res) => {
    const city = req.query.city
    axios.get(`${BASE_URL}?q=${city}&APPID=${API_KEY}&units=metric`)
        .then(function (response) {
            const data = response.data            
            res.send(data)
        })
        .catch(function (error) {
            const message = error.response.data.message
            const status = Number(error.response.data.cod)
            res.status(status).send(message)
        })
})

app.get('/week', async (req, res) => {
    const city = req.query.city
    axios.get(`${FORECAST_URL}?q=${city}&APPID=${API_KEY}&units=metric&cnt=7`)
        .then(function (response) {
            const data = response.data
            res.send(data)
        })
        .catch(function (error) {
            const message = error.response.data.message
            const status = Number(error.response.data.cod)
            res.status(status).send(message)
        })
})

app.listen(port, () => {
  console.log(`app listening on port ${port}`)
})