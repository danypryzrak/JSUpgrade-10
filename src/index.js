import { fetchBreeds } from "./cat-api";
import { fetchCatByBreed } from "./cat-api";

const breedSelect = document.querySelector(".breed-select");
const loader = document.querySelector(".loader");
const error = document.querySelector(".error");
const catInfo = document.querySelector(".cat-info");

breedSelect.style.display = "none"
error.style.display = "none"

function fillOptions() {
    fetchBreeds()
        .then((data) => {
            for (const breed of data) {
            const option = document.createElement("option")
            option.setAttribute('value',breed.id)
            option.textContent = breed.name
            breedSelect.append(option)
            loader.style.display = "none"    
            breedSelect.style.display = "block"    
        }
    })
}

fillOptions()

breedSelect.addEventListener("change", (ev) => {
    loader.style.display = "block" 
    fetchCatByBreed(ev.target.value)
        .then((data) => {
            loader.style.display = "none"
            catInfo.innerHTML = `<img src=${data.url} alt="cat foto" class=cat_image>
            <h1 class=cat_name>${data.breeds[0].name}</h1>
            <p class=cat_descr>${data.breeds[0].description}</p>
            <p class=cat_temp><span class=temp_span>Temperament: </span>${data.breeds[0].temperament}</p>`
            
        })
})


