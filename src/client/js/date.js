let today = new Date();
let tomorrow = new Date();
tomorrow.setDate(today.getDate() + 1);

const startDate = document.querySelector('#start-date');
const endDate = document.querySelector('#end-date');
document.addEventListener('DOMContentLoaded', function () {

 startDate.addEventListener("change", function () {
  if (startDate.value < changeDateFormat(today)) {
   startDate.min = startDate.value = changeDateFormat(today)
  }
  endDate.min = startDate.value
  endDate.value = startDate.value
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


export { today, tomorrow, changeDateFormat, numberOfDays }