import bodyParser from 'body-parser'
import express from 'express'
import axios from 'axios'
import * as dotenv from 'dotenv'
import cors from 'cors'
dotenv.config()

const BASE_URL = 'https://api.openweathermap.org/data/2.5/weather' 
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
            console.log(data);
            res.send({"data": data, error: null})
        })
        .catch(function (error) {
            // handle error
            console.log("ERROR")
            res.send({
                "data" : null,
                "error" : "Invalid city name!"
            })
        })
})

app.listen(port, () => {
  console.log(`app listening on port ${port}`)
})