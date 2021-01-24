# Travel Weather App - Final Project for Udacity's Front End Web Design Nanodegree

## Description

This project takes a user's destination location and travel dates.
This will return a weather forecast for the trip and some more data about the destination.
The user has the ability to click on I'm Feeling Lucky to return a random destination.
There are 4 APIs used in this project:

- [Geonames API](http://www.geonames.org/) - To gets latitude and longitude of the travel destination.
- [Weatherbit API](https://www.weatherbit.io/) - To gets weather forecast of the travel destination.
- [Pixabay API](https://pixabay.com/) - To gets some photos of the travel destination.
- [Restcountries API](https://restcountries.eu/) - To gets gets information about the country.

## Installation

The app running a Local server on _Node_ and _Express_.
To start with the app:

- Download the zip file from Github
- Creat _.env_ then add your keys inside it, File should contain:

```
API_KEY_weatherbit= *****
username_geonames= ****
API_KEY_Pixabay= ****
restcountries => without key
```

- Run <npm install>

## Author

The code was written by Husam Abuhabib, based on starter code from projects 3 and 4 that was given by Udacity.
