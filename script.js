const myAPI = "https://api.punkapi.com/v2/beers"
console.log(myAPI);
const proxy = "https://noroffcors.herokuapp.com/";
const corsFixUrl = proxy + myAPI;
console.log(corsFixUrl)

const resultContainer = document.querySelector(".container");

async function results() {
    try{
        const response = await fetch(corsFixUrl);
        console.log(response);
        const responseJSON = await response.json();
        console.log(responseJSON);
        const beerData = responseJSON.data;
        for (let i = 0; i < responseJSON.length; i++){
            console.log(responseJSON[i].name)
            if(i === 20) {
                break
            }
            resultContainer.innerHTML += `<li><h3>${responseJSON[i].name}</h3>
            <img src="${responseJSON[i].image_url}">
            <h4>${responseJSON[i].tagline}</h4>
            </li>

            `
        }
        
    }
    catch(error){
        resultContainer.innerHTML += `<p>404</p>`;
    }

}
results();
