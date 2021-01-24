
let tripInfo;
let serverLink = 'https://travel-app.glitch.me'
//let serverLink = 'http://localhost:8081'

const cityInput = document.getElementById('search_input');

async function appfunction(event) {
  tripInfo = { startDate: '', endDate: '', longOfTheTrip: '', howManyDaysWillStart: 'numberOfDays(today, startDate.value)', city: '', geonames: '', pixabay: '', weatherbit: '', restcountries: '' }
  geonames()

};

async function geonames() {
  try {

    fetch('' + serverLink + '/geonames?city=' + cityInput.value + '')
      .then(res => res.json())
      .then(function (res) {
        if (res.geonames.length > 0) {
          Client.generateBtn.value = 'Loading ...'
          Client.generateBtn.disabled = true;
          Client.luckBtn.value = 'Loading ...'
          Client.luckBtn.disabled = true;
          tripInfo.city = cityInput.value
          tripInfo.geonames = res.geonames[0]
          tripInfo.startDate = Client.startDate.value
          tripInfo.endDate = Client.endDate.value
          tripInfo.howManyDaysWillStart = Client.numberOfDays(Client.today, Client.startDate.value)
          tripInfo.longOfTheTrip = Client.numberOfDays(Client.startDate.value, Client.endDate.value)
          return 1;
        }
        else {
          alert('City not found')
          return 1;
        }

      })
      .then(weatherbit)


  } catch (error) {
    console.log("Error in geonames function", error);

  }




}


async function weatherbit() {

  try {

    fetch('' + serverLink + '/weatherbit?lat=' + tripInfo.geonames.lat + '&lon=' + tripInfo.geonames.lng + '&days=' + tripInfo.howManyDaysWillStart + '')
      .then(res => res.json())
      .then(function (res) {
        tripInfo.weatherbit = res
      })
      .then(pixabay(tripInfo.city))

  } catch (error) {
    console.log("Error in weatherbit function", error);

  }

}

async function pixabay(query) {
  try {
    fetch('' + serverLink + '/pixabay?place=' + query + '')
      .then(res => res.json())
      .then(function (res) {
        if (res.total == 0) {
          pixabay(tripInfo.geonames.countryName)
        }
        else {
          tripInfo.pixabay = res
          restcountries(tripInfo.geonames.countryName)
        }
      })

  } catch (error) {
    console.log("Error in pixabay function", error);

  }
}

async function restcountries(query) {
  try {
    fetch('' + serverLink + '/restcountries?name=' + query + '')
      .then(res => res.json())
      .then(function (res) {
        tripInfo.restcountries = res
        Client.tripsList.push(tripInfo)
        printtripInfo()
      }
      )

  } catch (error) {
    console.log("Error in restcountries function", error);

  }
}



async function printtripInfo() {
  try {
    if (!(tripInfo.weatherbit.max_temp)) {

      setTimeout(printtripInfo, 2000)

    }
    else {

      Client.generateTripCard(Client.tripsList[Client.tripsList.length - 1])
    }
  } catch (error) {
    console.log("Error in printtripInfo function", error);

  }

}

export { appfunction }