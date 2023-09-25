const bearsPictures = [
  "https://cdn.pixabay.com/photo/2020/09/04/20/09/cartoon-5544856_1280.jpg",
  "https://pixabay.com/fr/photos/ours-ours-brun-mammif%C3%A8re-animal-422682/",
  "https://cdn.pixabay.com/photo/2020/09/04/20/09/cartoon-5544856_1280.jpg",
  "https://pixabay.com/fr/photos/b%C3%A9b%C3%A9-ours-en-peluche-jouer-jouet-623417/",
  "https://cdn.pixabay.com/photo/2018/08/11/22/53/teddy-bear-3599680_1280.jpg"
];
const images = document.querySelectorAll("img");

for (let i = 0; i < images.length; i++) {
  images[i].src = bearsPictures[i];
}
