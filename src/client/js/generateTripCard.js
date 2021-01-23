const cityInput = document.getElementById('search_input');
const section = document.getElementById('cards');
let geonames = '', pixabay = '', weatherbit = '';

function generateTripCard(card) {
  //console.log(card);
  geonames = card.geonames
  pixabay = card.pixabay
  weatherbit = card.weatherbit

  section.innerHTML = `<section id="card" data-id="1">
           <h2 id="results">${geonames.name}</h2>
           <button class="remove" type="button">remove!</button>
           <p>The trip start within :${card.howManyDaysWillStart} day/s in:${card.startDate} till:${card.endDate} for:${card.longOfTheTrip} day/s</p>
           <p>Enjoy your stay in :${geonames.countryName}</p>
           <p>Temp:${weatherbit.temp} Max temp: ${weatherbit.max_temp} Low temp: ${weatherbit.low_temp} </p>
           <img src="${pixabay.hits[0].previewURL}" alt="Girl in a jacket" width="500" height="600">
          
         </section>`+ section.innerHTML;
  cityInput.value = ''
  Client.startDate.value = Client.changeDateFormat(Client.today)
  Client.endDate.value = Client.changeDateFormat(Client.tomorrow)
  Client.generateBtn.value = 'submit'
  Client.generateBtn.disabled = false;



}

export { generateTripCard }
