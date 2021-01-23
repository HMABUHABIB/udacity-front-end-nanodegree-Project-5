let today = new Date();
let tomorrow = new Date();
tomorrow.setDate(today.getDate() + 1);
let maxStartDate = new Date();
maxStartDate.setDate(today.getDate() + 15);
maxStartDate = changeDateFormat(maxStartDate);
const startDate = document.querySelector('#start-date');
const endDate = document.querySelector('#end-date');



document.addEventListener('DOMContentLoaded', function () {

 startDate.addEventListener("change", function () {
  if (startDate.value < changeDateFormat(today)) {
   alert("Sorry till now we can't travel to the past!")
   startDate.min = startDate.value = changeDateFormat(today)
  }
  if (startDate.value > endDate.value) {
   endDate.min = startDate.value
   endDate.value = startDate.value
  }
  console.log(numberOfDays(changeDateFormat(today), startDate.value))
  if (numberOfDays(changeDateFormat(today), startDate.value) > 15) {
   alert('Please choose a start date for the trip within 16 days max.')
   startDate.min = startDate.value = changeDateFormat(today)
  }


 });

 endDate.addEventListener("change", function () {
  if (endDate.value < startDate.value) {
   endDate.min = startDate.value
   endDate.value = startDate.value
  }
 });

});


function changeDateFormat(date) {
 let year = date.getFullYear();
 let month = date.getMonth() + 1;
 let day = date.getDate();
 let formatedDate = "";
 month = month < 10 ? month = "0" + month : month;
 day = day < 10 ? day = "0" + day : day;
 formatedDate += year;
 formatedDate += "-";
 formatedDate += month;
 formatedDate += "-";
 formatedDate += day;
 return formatedDate
}

function numberOfDays(startDate, endDate) {
 let dt1 = new Date(startDate);
 let dt2 = new Date(endDate);
 return Math.floor((Date.UTC(dt2.getFullYear(), dt2.getMonth(), dt2.getDate()) - Date.UTC(dt1.getFullYear(), dt1.getMonth(), dt1.getDate())) / (1000 * 60 * 60 * 24));
}


export { today, tomorrow, maxStartDate, changeDateFormat, numberOfDays }