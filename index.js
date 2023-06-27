
fetch('http://localhost:3000/Food')
.then(resp => resp.json())
.then(data => {
    data.forEach(food => foodList (food))
displayFood(data[0])
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
    createImage.addEventListener("click", () => {
        displayFood(food)
    })
    };
function displayFood(food) {

    const burgerImages = document.getElementById("burger-images")
    burgerImages.src = food.images

    const burgerName = document.getElementById("burger-names")
    burgerName.textContent = `Burger Name: ${food.name}`

    const description = document.getElementById("description")
    description.textContent = `Description: ${food.description}`
    
    const comments = document.getElementById("comments")
    comments.textContent = `Comments: ${food.comments}`
    

    const rating = document.getElementById("rating")
    rating.textContent = `Rating: ${food.rating}` 
};

