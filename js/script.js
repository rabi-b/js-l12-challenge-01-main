const button = document.querySelector("button");
const authorSpan = document.querySelector(".author");
const imgDiv = document.querySelector(".image-container");
const img = document.querySelector(".img");

//const getImage = async function () {
    //const res = await fetch("https://picsum.photos/v2/list?limit=100"); //res= response
    //const images = await res.json();
    //console.log(images);
    //selectRandomImage(images);
//};

//getImage();

const selectRandomImage = function (images) {
    const randomIndex = Math.floor(Math.random() * images.length);
    //console.log(randomIndex); //test to see if a random whole number between 0-99 is displaying
    const randomImage = images[randomIndex];
    //console.log(randomImage); //test getting data from the random image
    displpayImage(randomImage);
};

const displpayImage = function (randomImage) {
    const author = randomImage.author;
    const imageAddress = randomImage.download_url;
    authorSpan.innerText = author;
    img.src = imageAddress;
    imgDiv.classList.remove("hide");
};

button.addEventListener("click", async function () {
    const res = await fetch("https://picsum.photos/v2/list?limit=100"); //res= response
    const images = await res.json();
    console.log(images);
    selectRandomImage(images);
});
