const queryString = document.location.search;
const params = new URLSearchParams(queryString);
console.log(params);
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
        console.log(beerData)
    }
    catch(error) {
        beerDetails.innerHTML = `<p>404</p>`
    }
}
beerResults()


