import searchPhotos from "./searchPhotos";
import { Notify } from 'notiflix/build/notiflix-notify-aio';
import renderPhotos from "./renderPhotos";
import SimpleLightbox from "simplelightbox";
import "simplelightbox/dist/simple-lightbox.min.css";

const searchBtn = document.querySelector('.search')
const loadMoreBtn = document.querySelector('.load')
const gallery = document.querySelector('.gallery')
let currentPage = 1;
searchBtn.addEventListener("click", getPhotos)
loadMoreBtn.addEventListener("click", getMorePhotos)

let galleryLightbox = new SimpleLightbox('.gallery .photo-link', {   
    captionDelay: 250,    
    captionsData: 'alt',    
});

function sendRequest (currentPage) {
    searchPhotos(currentPage).then(dataPhotos => {        
        const photos = dataPhotos.photos;
        photos.map(photo => {
            renderPhotos(photo)
        })
        loadMoreBtn.style.display = 'block';
        galleryLightbox.refresh();
    }).catch(() => {
        Notify.failure('Try later');
    })
}

function getPhotos() {
    gallery.innerHTML = '';
    currentPage = 1;
    sendRequest(currentPage);
}

function getMorePhotos() {
    currentPage += 1;
   sendRequest(currentPage);

}
