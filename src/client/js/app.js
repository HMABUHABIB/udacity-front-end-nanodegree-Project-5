

function handleSend(event) {
 console.log(event.target);
 document.getElementById('results').innerHTML = 'samer'
 Client.temp.name = 'samer'
 console.log(Client.temp.name);
};

export { handleSend }