import { generateTripCard } from './js/generateTripCard'
import { handleSubmit } from './js/formHandler'
import { appfunction } from './js/app'
import { today, tomorrow, maxStartDate, changeDateFormat, numberOfDays } from './js/date'
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
let tripsList = []
document.addEventListener('DOMContentLoaded', (event) => {
 document.cookie = "Secure";
 document.cookie = "SameSite=None;"
 startDate.min = startDate.value = changeDateFormat(today)
 startDate.max = maxStartDate
 endDate.min = endDate.value = changeDateFormat(tomorrow)
 tripsList = []
});


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
  event.target.parentNode.remove();
 }

}

export {
 generateTripCard,
 handleSubmit,
 today, tomorrow, maxStartDate, changeDateFormat, numberOfDays, startDate, endDate,
 tripsList, generateBtn, luckBtn,
 appfunction,
 nameOfRandomePlace

}