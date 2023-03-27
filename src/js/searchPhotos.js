export default function searchPhotos(pageNumber) {

    const BASE_URL =  'https://api.nasa.gov/';
    const PATH = 'mars-photos/api/v1/rovers/curiosity/photos';
    const API_KEY = 'EIUotCqXadAdZR6f6pZpmpaFfSHaPEMwhZxmYLGp';

    return fetch(`${BASE_URL}${PATH}?sol=50&page=${pageNumber}&api_key=${API_KEY}`)
    .then(response => {
        if(!response.ok){
            throw new Error(response.status);
        }
        return response.json();
    })    
}


// https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos?sol=1000&api_key=DEMO_KEY