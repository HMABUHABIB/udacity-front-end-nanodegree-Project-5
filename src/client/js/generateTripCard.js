const cityInput = document.getElementById('search_input');
const section = document.getElementById('cards');
let geonames = '', pixabay = '', weatherbit = '', randomImg = '', restcountries = '';

function generateTripCard(card) {
  //console.log(card);
  geonames = card.geonames
  randomImg = card.pixabay.hits[getRandomInt(card.pixabay.hits.length)]
  weatherbit = card.weatherbit
  restcountries = card.restcountries[0]

  section.innerHTML = `<section id="card" data-id="1">
           <h2 id="results">${geonames.name}</h2>
           <button class="remove" type="button">remove!</button>
           <p>The trip start within :${card.howManyDaysWillStart} day/s in:${card.startDate} till:${card.endDate} for:${card.longOfTheTrip} day/s</p>
           <p>Enjoy your stay in :${geonames.countryName}</p>
           <p>Temp:${weatherbit.temp} Max temp: ${weatherbit.max_temp} Low temp: ${weatherbit.low_temp} </p>
           
           <img src="${restcountries.flag}" width="300" height="auto">
           <a href="${randomImg.pageURL}">
           <img src="${randomImg.webformatURL}" alt="${randomImg.tags}" width="500" height="600">
        </a>
         </section>`+ section.innerHTML;
  cityInput.value = ''
  Client.startDate.value = Client.changeDateFormat(Client.today)
  Client.endDate.value = Client.changeDateFormat(Client.tomorrow)
  Client.generateBtn.value = 'submit'
  Client.generateBtn.disabled = false;
  Client.luckBtn.value = "I'm Feeling Lucky"
  Client.luckBtn.disabled = false;
}

function nameOfRandomePlace() {
  return places[getRandomInt(places.length)]
}

function getRandomInt(max) {
  return Math.floor(Math.random() * Math.floor(max));
}

export { generateTripCard }
