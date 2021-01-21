var path = require('path')
const mockAPIResponse = require('./mockAPI.js')
const axios = require('axios')
const fetch = require("node-fetch");

/* Express */
const express = require('express')
const app = express()
app.use(express.static('dist'))


/* Dependencies */
const bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// dotenv
const dotenv = require('dotenv');
dotenv.config();

// Cors for cross origin allowance
const cors = require('cors');
app.use(cors());

// Backend Get and Post
app.get('/', function (req, res) {
    res.sendFile('dist/index.html')
})

app.get('/test', function (req, res) {
    res.send(mockAPIResponse)
    console.log("samer");
})


app.get('/openweathermap', async (req, res) => {
    try {
        const response = await axios.get('https://api.openweathermap.org/data/2.5/weather?zip=' + req.query.zip + '&appid=' + process.env.API_KEY + '&units=metric');
        res.send(response.data)
    } catch (error) {

        res.send('error')
    }

})


app.get('/meaningCloud', async (req, res) => {


    try {
        const response = await fetch('https://api.meaningcloud.com/sentiment-2.1?key=' + process.env.API_KEY_NLP + '&url=' + req.query.url + '&lang=en', {
            method: 'POST',
            credentials: 'same-origin',
            headers: {
                'Content-Type': 'application/json',
            }
        });

        const newData = await response.json();

        console.log(req.query.url);
        res.send(newData)
    } catch (error) {
        console.log("error", error);
    }
})

app.get('/test2', async (req, res) => {
    res.json({ message: 'pass!' })
})

app.post('/test2', async (req, res) => {
    res.json({ zip: req.query.zip })
})



module.exports = app