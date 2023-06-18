const fetch=require("node-fetch")
const state="enugu"


export async function fetchWeather(state){
    const url = `https://weatherapi-com.p.rapidapi.com/current.json?q=${state}`;
    const options = {
        method: 'GET',
        headers: {
            'X-RapidAPI-Key': '631edcacf0msh95abea4bcffab6ap102821jsnd0b2d0c2beaa',
            'X-RapidAPI-Host': 'weatherapi-com.p.rapidapi.com'
        }
    };

    try {
        const response = await fetch(url, options);
        const result = await response.json();
        const location=result["location"]["country"];
        const condition=result["current"]["condition"]["text"]
        const temperature=result["current"]["temp_c"]
        const arra={location:location,weather:condition,temperature:temperature}
        return arra
        
    } catch (error) {
        console.error(error);
    }
}
