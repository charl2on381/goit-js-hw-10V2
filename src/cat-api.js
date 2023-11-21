import axios from 'axios';

axios.defaults.headers.common['x-api-key'] =
    'live_ncCbfwxW26WzhiDKKs7gVuwsr0xU08LTcaG2cdhM6EfAulHAOifLeEkFh7ms4GMA';
export function fetchBreeds() {
    return axios
        .get('https://api.thecatapi.com/v1/breeds')
        .then(response => response.data)
        .catch(error => {
            throw error;
        });
}

export function fetchCatByBreed(breedId) {
    const url = `https://api.thecatapi.com/v1/images/search?breed_ids=${breedId}`;
    return axios
        .get(url)
        .then(response => {
            const catData = response.data[0];
            return {
                name: catData.breeds[0].name,
                description: catData.breeds[0].description,
                temperament: catData.breeds[0].temperament,
                url: catData.url,
            };
        })
        .catch(error => {
            throw new Error(error);
        });
}