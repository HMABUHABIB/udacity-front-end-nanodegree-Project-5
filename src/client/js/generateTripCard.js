const cityInput = document.getElementById('search_input');
const section = document.getElementById('cards');
let geonames = '', pixabay = '', weatherbit = '', randomImg = '', restcountries = '';
let i = 0
function generateTripCard(card) {
  //console.log(card);
  geonames = card.geonames
  randomImg = card.pixabay.hits[getRandomInt(card.pixabay.hits.length)]
  weatherbit = card.weatherbit
  restcountries = card.restcountries[0]

  section.innerHTML = `<section id="card" class="glass" data-id="1">
           <div id="card-head">
           <h2 id="results">${geonames.name}</h2>
           <button class="remove btn fas fa-trash-alt" type="button"></button>
           </div>
           <div class="trip-data-div">
           <div class="trip-data-text">
           <h3>Here are the details for your trip to: <strong>${geonames.name}</strong></h3>
           <p>The trip start within :${card.howManyDaysWillStart} day/s in: ${card.startDate} <br>For: ${card.longOfTheTrip} day/s till: ${card.endDate}</p>
           <p>The temperature is: ${weatherbit.temp} with max: ${weatherbit.max_temp}  and min: ${weatherbit.low_temp}</p>
           <p>Enjoy your stay in: ${geonames.countryName} and dont forget to have some ${restcountries.currencies[0].name} with you it's their currencies.</p>
           </div>
           <img class="img-flage" src="${restcountries.flag}">
           </div>
           <div class="img-pixabay-div">
           <a href="${randomImg.pageURL}">
           <img src="${randomImg.webformatURL}" alt="${randomImg.tags}" class="img-pixabay">
        </a>
        </div>
         </section>`+ section.innerHTML;
  localStorage.setItem("sectioninnerHTML", section.innerHTML);

  cityInput.value = ''
  Client.restDate()
  Client.generateBtn.value = 'submit'
  Client.generateBtn.disabled = false;
  Client.luckBtn.value = "I'm Feeling Lucky"
  Client.luckBtn.disabled = false;
  i++
}


function getRandomInt(max) {
  return Math.floor(Math.random() * Math.floor(max));
}

export { generateTripCard, getRandomInt }
