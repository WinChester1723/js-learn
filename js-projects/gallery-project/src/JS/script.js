document.addEventListener("DOMContentLoaded", () => {
  fetchImages();
});

function fetchImages() {
  const apiKey = "ej_PlDvNMUXApK26j3JtHO6QEJ3bpk4OlsTBRo4WDpI";
  fetch("https://api.unsplash.com/photos/?client_id=" + apiKey)
    .then((response) => response.json())
    .then((images) => {
      const gallery = document.getElementById("imageGallery");
      images.forEach((image) => {
        const img = document.createElement("img");
        img.src = image.urls.small;
        img.alt = image.alt_description;
        img.addEventListener("click", () => enlargeImage(img));
        gallery.appendChild(img);
      });
    })
    .catch((error) => console.error("Error", error));
}

function enlargeImage(url) {
  // Проверяем, увеличено ли уже изображение
  const isEnlarged = imgElement.classList.contains("enlarged");
  // Удаляем класс 'enlarged' у всех изображений
  document
    .querySelectorAll("#imageGallery img")
    .forEach((img) => img.classList.remove("enlarged"));
  // Если изображение не было увеличено, увеличиваем его
  if (!isEnlarged) {
    imgElement.classList.add("enlarged");
  }
}
