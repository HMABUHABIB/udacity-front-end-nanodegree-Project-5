var path = require('path')
const mockAPIResponse = require('./mockAPI.js')
const axios = require('axios')
const fetch = require("node-fetch");

/* Express */
const express = require('express')
const app = express()
app.use(express.static('dist'))

// Trip Data  Object 
let tripInfo = { startDate: '', endDate: '', longOfTheTrip: '', howManyDaysWillStart: '', city: '', geonames: '', pixabay: '', weatherbit: '', restcountries: '' }

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
// Testing 
app.get('/test', function (req, res) {
    res.send(mockAPIResponse)
    console.log("samer");
})

app.get('/test2', async (req, res) => {
    res.json({ message: 'pass!' })
})

app.post('/test2', async (req, res) => {
    res.json({ zip: req.query.zip })
})

// RESTful API
app.post('/creatNewTrip', async (req, res) => {

    tripInfo.startDate = req.body.startDate,
        tripInfo.endDate = req.body.endDate,
        tripInfo.longOfTheTrip = req.body.longOfTheTrip,
        tripInfo.howManyDaysWillStart = req.body.howManyDaysWillStart,
        tripInfo.restcountries = req.body.restcountries,
        tripInfo.weatherbit = req.body.weatherbit,
        tripInfo.pixabay = req.body.pixabay,
        tripInfo.geonames = req.body.geonames,
        tripInfo.city = req.body.city,
        console.log(tripInfo)
    res.json(tripInfo)
})


app.get('/getTripData', function (request, response) {
    response.send(tripInfo)
}
);

// openweathermap
app.get('/openweathermap', async (req, res) => {
    try {
        const response = await axios.get('https://api.openweathermap.org/data/2.5/weather?zip=' + req.query.zip + '&appid=' + process.env.API_KEY + '&units=metric');
        res.send(response.data)
    } catch (error) {

        res.send('error')
    }

})


//geonames

app.get('/geonames', async (req, res) => {

    try {
        const response = await fetch('http://api.geonames.org/searchJSON?q=' + req.query.city + '&maxRows=1&username=' + process.env.username_geonames + '', {
            method: 'POST',
            credentials: 'same-origin',
            headers: {
                'Content-Type': 'application/json',
            }
        });

        const newData = await response.json();
        //console.log(req.query.city);
        res.json(newData)

    } catch (error) {
        console.log("geonames error", error);
    }
})



//weatherbit

app.get('/weatherbit', async (req, res) => {

    try {
        const response = await fetch('https://api.weatherbit.io/v2.0/forecast/daily?lat=' + req.query.lat + '&lon=' + req.query.lon + '&days=' + req.query.days + 1 + '&key=' + process.env.API_KEY_weatherbit + '', {
            method: 'POST',
            credentials: 'same-origin',
            headers: {
                'Content-Type': 'application/json',
            }
        });

        const newData = await response.json();
        //console.log(req.query.days);
        res.json(newData.data[req.query.days])
        // console.log(newData)
    } catch (error) {
        console.log("weatherbit error", error);
    }
})


// pixabay
app.get('/pixabay', async (req, res) => {
    try {
        const response = await axios.get('https://pixabay.com/api/?q=' + req.query.place + '&key=' + process.env.API_KEY_Pixabay + '&image_type=photo');

        res.send(response.data)
    } catch (error) {

        res.send('pixabay error')
    }

})
//restcountries

app.get('/restcountries', async (req, res) => {
    try {
        const response = await axios.get('https://restcountries.eu/rest/v2/name/' + req.query.name + '');
        //console.log(response);
        res.send(response.data)
    } catch (error) {

        res.send('restcountries error')
    }

})


module.exports = app