import { generateTable } from './js/generateTable'
import { handleSubmit } from './js/formHandler'
import { handleSend } from './js/app'
import { today, tomorrow, changeDateFormat, numberOfDays } from './js/date'


import './styles/resets.scss'
import './styles/base.scss'
import './styles/footer.scss'
import './styles/form.scss'
import './styles/header.scss'

const startDate = document.querySelector('#start-date');
const endDate = document.querySelector('#end-date');

document.addEventListener('DOMContentLoaded', (event) => {
 startDate.min = startDate.value = changeDateFormat(today)
 endDate.min = endDate.value = changeDateFormat(tomorrow)
});

const generateBtn = document.querySelector('#submit');
generateBtn.addEventListener('click', function (e) {
 handleSubmit(e)
});



export {
 generateTable,
 handleSubmit,
 today, tomorrow, changeDateFormat, numberOfDays

}