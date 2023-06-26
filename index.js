
fetch('http://localhost:3000/Food')
.then(resp => resp.json())
.then(data => {
    data.forEach(food => foodList (food))
foodImage(data[0]);
clickOnImage();
});
function foodList (food) {
    const createImage = document.createElement("img");
    const pTag = document.createElement("p");
    const createDiv = document.createElement("div");
    const burgerList = document.getElementById("burger-list");
    pTag.innerText = food.name;
    createImage.src = food.images;
    createDiv.append(createImage)
    burgerList.append(createDiv);
    createDiv.append(pTag);
};
function foodImage (food) {
    const createImage = document.createElement("img");
    const burgerImages = document.getElementById("burgers-images")
    createImage.src = food.images
    burgerImages.append(createImage)
   
    const burgerName = document.getElementById("burger-names")
    burgerName.textContent = `Burger Name: ${food.name}`

    const description = document.getElementById("description")
    description.textContent = `Description: ${food.description}`
    

    const comments = document.getElementById("comments")
    comments.textContent = `Comments: ${food.comments}`
    

    const rating = document.getElementById("rating")
    rating.textContent = `Rating: ${food.rating}` 
}

function clickOnImage () {
    const burgerList = document.getElementById("burger-list");
    burgerList.addEventListener("click", () => {
        foodImage()
    })
}
