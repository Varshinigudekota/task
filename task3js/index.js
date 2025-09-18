function getWeather(){
    let city=document.getElementById("city")
    showWeather(city.value)
}
async function showWeather(city){
    const url = `https://open-weather13.p.rapidapi.com/city?city=${city}&lang=EN`;
const options = {
	method: 'GET',
	headers: {
		'x-rapidapi-key': '2d135bf094msh55df26f5db0c28dp14e83ajsn59e65345012e',
		'x-rapidapi-host': 'open-weather13.p.rapidapi.com'
	}
};

try {
	const response = await fetch(url, options);
    if(!response){
        throw new Error("weather not supported")
    }
	const result = await response.json();
    getData(result)
	
} catch (error) {
	console.error(error);
}
}
function getData(result){
    let item=document.getElementById("main")
    item.innerHTML=`
    <p>city:${result.name}</p>
    <p>temp:${result.main.temp}</p>
    `
}