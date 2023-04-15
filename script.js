let city = 'london';

let cityElement = document.querySelector('.city')
let tempElement = document.querySelector('.temp')
let condition = document.querySelector('.condition') 
let icon = document.querySelector('.icon')
let body = document.body;

function getWeather(city) {
    fetch(`https://api.weatherapi.com/v1/current.json?key=838470c017f343b296b13718231504=${city}`)
    .then(response => response.json())
    // .then(data => console.log(data ));

    .then(data => {

        console.log(data )
        cityElement.innerText = data.location.name 
        tempElement.innerHTML = data.current.temp_c + '&#x2103'
        condition.innerText = data.current.condition.text
        icon.src = data.current.condition.icon

    }).finally(()=> icon.hidden = false );
}




//getWeather(prompt('Enter city'))

let searchInput = document.querySelector('.city-input');
let searchBtn = document.querySelector('.searchBtn');

searchBtn.onclick = () => {
    getWeather(searchInput.value );

    fetch(`https://api.unsplash.com/search/photos/?client_id=oegIivKo5Ppbo_PK_PedVXtGUYnhG7OhgagyKBFIQa0&query=${searchInput.value}&per_page=1`)
    .then(response => response.json())
    .then(data => body.style.backgroundImage = `url(${data.results[0].urls.regular})`)
    
    searchInput.value = '';
}