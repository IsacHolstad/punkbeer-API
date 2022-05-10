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
            if(i === 15) {
                break
            }
            resultContainer.innerHTML += `<li>
            <a href="detail.html?id=${responseJSON[i].id}">${responseJSON[i].name} ${responseJSON[i].first_brewed} ${responseJSON[i].tagline}</li>
            <img class="beer-img" src="${responseJSON[i].image_url}">
            

            

            `
        }
        
    }
    catch(error){
        resultContainer.innerHTML += `<p>404</p>`;
    }

}
results();
