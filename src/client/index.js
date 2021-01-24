import { generateTripCard, getTripData } from './js/generateTripCard'
import { handleSubmit } from './js/formHandler'
import { appfunction } from './js/app'
import { today, tomorrow, dayAfterTomorrow, maxStartDate, changeDateFormat, numberOfDays } from './js/date'
import { nameOfRandomePlace } from './js/luckPlace'
import './media/facebook.png'
import './styles/resets.scss'
import './styles/base.scss'
import './styles/footer.scss'
import './styles/form.scss'
import './styles/header.scss'
import './styles/cards.scss'

const startDate = document.querySelector('#start-date');
const endDate = document.querySelector('#end-date');
const cityInput = document.getElementById('search_input');
const note = document.getElementById('note');
let tripsList = []
document.addEventListener('DOMContentLoaded', (event) => {
 //document.getElementById("cards").innerHTML = localStorage.getItem("sectioninnerHTML");
 restDate()
 tripsList = []
});

function restDate() {
 startDate.min = startDate.value = changeDateFormat(tomorrow)
 startDate.max = maxStartDate
 endDate.min = endDate.value = changeDateFormat(dayAfterTomorrow)
}

const luckBtn = document.querySelector('#luck');
luckBtn.addEventListener('click', function (event) {
 event.preventDefault()
 cityInput.value = nameOfRandomePlace()
 handleSubmit(event)
});
const generateBtn = document.querySelector('#submit');
generateBtn.addEventListener('click', function (event) {
 handleSubmit(event)
});

document.addEventListener("click", removeListener);
function removeListener(event) {
 if (event.target.classList.contains("remove")) {
  event.target.parentNode.parentNode.remove();
  localStorage.setItem("sectioninnerHTML", document.getElementById("cards").innerHTML);
 }

}

export {
 generateTripCard, getTripData,
 handleSubmit,
 today, tomorrow, dayAfterTomorrow, maxStartDate, changeDateFormat, numberOfDays, startDate, endDate,
 tripsList, generateBtn, luckBtn,
 appfunction,
 nameOfRandomePlace, restDate,
 note

}