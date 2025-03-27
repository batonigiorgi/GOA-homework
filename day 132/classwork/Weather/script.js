const MY_API_KEY = '43df4f9fa566af63a9dcdb621b8fb10c';

async function weather(city) {
    const fetchedData = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${MY_API_KEY}`);
    const data = await fetchedData.json();
    console.log(data);
}

weather('Tbilisi');
