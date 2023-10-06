import { galleryItems } from "./gallery-items.js";
// Change code below this line

const galleryRef = document.querySelector(".gallery");

galleryRef.addEventListener("click", handleImageClick);

let modal;

function handleImageClick(e) {
  e.preventDefault();
  if (e.currentTarget !== e.target) {
    modal = basicLightbox.create(
      `<img width="1400" height="900" src=${e.target.dataset.source}>`
    );
    modal.show();
  }
  window.addEventListener("keydown", handleEscBtnClick);
}

function handleEscBtnClick(e) {
  if (e.code === "Escape") {
    modal.close();
    window.removeEventListener("keydown", handleEscBtnClick);
  }
}

const galleryList = galleryItems
  .map(({ preview, original, description }) => {
    return `<li class="gallery__item">
  <a class="gallery__link" href="large-image.jpg">
    <img
      class="gallery__image"
      src=${preview}
      data-source=${original}
      alt=${description}
    />
  </a>
</li>`;
  })
  .join("");

galleryRef.insertAdjacentHTML("beforeend", galleryList);
