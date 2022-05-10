const queryString = document.location.search;
const params = new URLSearchParams(queryString);

const id = params.get('id');
const myAPI = `https://api.punkapi.com/v2/beers/${id}`;

const proxy = "https://noroffcors.herokuapp.com/";
const corsFixUrl = proxy + myAPI;
console.log(corsFixUrl);

const beerDetails = document.querySelector(".container");

async function beerResults(){
    try{
        const response = await fetch(corsFixUrl);
        const beerData = await response.json();
        beerData.innerHTML += `<h3>${beerData.name}</h3>
        <img src="${beerData.image_url}">
        
        `
    }
    catch(error) {
        beerDetails.innerHTML = `<p>404</p>`
    }
}
beerResults()


