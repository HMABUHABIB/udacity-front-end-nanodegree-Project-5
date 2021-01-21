function handleSubmit(event) {
    event.preventDefault()
    console.log('handleSubmit')
}

/*const startDate = document.querySelector('#start-date');
const endDate = document.querySelector('#end-date');

function handleSubmit(event) {
    event.preventDefault()
    document.getElementById('results').innerHTML = `Start date: ${startDate.value}  End date: ${endDate.value} How many days for start: ${Client.numberOfDays(Client.today, startDate.value)}  How long is the trip: ${Client.numberOfDays(startDate.value, endDate.value)} `
    console.log(Client.numberOfDays(startDate.value, endDate.value))
    startDate.min = Client.changeDateFormat(Client.today)
    startDate.value = Client.changeDateFormat(Client.today)
    endDate.min = Client.changeDateFormat(Client.tomorrow)
    endDate.value = Client.changeDateFormat(Client.tomorrow)
}

startDate.onchange = function () {
    endDate.min = startDate.value
    endDate.value = startDate.value
}

endDate.onchange = function () {
    console.log(endDate.value < startDate.value)
    if (endDate.value < startDate.value) {
        endDate.min = startDate.value
        endDate.value = startDate.value
    }
}
*/
export { handleSubmit }

