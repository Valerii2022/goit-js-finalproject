import { galleryItems } from "./gallery-items.js";
// Change code below this line

const galleryRef = document.querySelector(".gallery");

const galleryList = galleryItems
  .map(({ original, preview, description }) => {
    return `<li class="gallery__item">
   <a class="gallery__link" href=${original}>
      <img class="gallery__image" src=${preview} alt=${description}/>
   </a>
</li>`;
  })
  .join("");

galleryRef.insertAdjacentHTML("beforeend", galleryList);

new SimpleLightbox(".gallery a", { captionDelay: 250, captionsData: "alt" });
