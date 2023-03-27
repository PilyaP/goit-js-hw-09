const gallery = document.querySelector('.gallery')
export default function renderPhotos(photo) {
    const {earth_date, img_src, rover, camera, id} = photo;
    const card = `
        <li>
        <a href="${img_src}" class="photo-link"><img  src="${img_src}" alt="Photo - ${id}" width=160 /></a>
            <h3>Made photo by ${rover.name}</h3>
            <p>photo date ${earth_date}</p>
            <p>Camera:${camera.full_name}</p>
        </li>
    `
    gallery.insertAdjacentHTML("beforeend", card);
}