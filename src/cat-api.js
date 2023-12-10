import axios from "axios";

axios.defaults.headers.common["x-api-key"] = "live_dKzNcLbhjAAckxJC1SohT7TCYvWH7RPR8u6b5ggSHmSA5cCMqt3qqd2ZYvG5s2PM";

export function fetchBreeds(breedSelect) {
    return axios.get("https://api.thecatapi.com/v1/breeds")
        .then(response => {
        return response.data;
        })
        .catch(error => {
            console.log(error)
        })
}

export function fetchCatByBreed(breedId) {
    return axios.get(`https://api.thecatapi.com/v1/images/search?breed_ids=${breedId}`)
        .then(response => {
            return response.data[0]
        })
        .catch(error => {
            console.log(error)
        })
}
