let currentFood;

fetch('http://localhost:3000/Food')
.then(resp => resp.json())
.then(data => {
    data.forEach(food => foodList (food))
displayFood(data[0])
addLikes ()
newComment()
newBurger()
});
function foodList (food) {
    const createImage = document.createElement("img");
    const pTag = document.createElement("p");
    const createDiv = document.createElement("div");
    const burgerList = document.getElementById("burger-list");
    pTag.innerText = food.name;
    createImage.src = food.images;
    createImage.style.filter= "grayscale(100%)"
    createDiv.append(createImage)
    burgerList.append(createDiv);
    createDiv.append(pTag);
    createImage.addEventListener("mouseover", () => {
        createImage.style.filter = "grayscale(0%)"
    })
    createImage.addEventListener("mouseout", () => {
        createImage.style.filter = "grayscale(100%)"
    })
    createImage.addEventListener("click", () => {
        displayFood(food)
    })
};
function displayFood(food) {
    currentFood = food
    const burgerImages = document.getElementById("burger-images")
    burgerImages.src = food.images

    const burgerName = document.getElementById("burger-names")
    burgerName.textContent = `Burger Name: ${food.name}`

    const description = document.getElementById("description")
    description.textContent = `Description: ${food.description}`
    
    const comments = document.getElementById("comments")
    comments.textContent = `Comment: ${food.comments}`
    

    const rating = document.getElementById("rating")
    rating.textContent = `Rating: ${food.rating}` 

};
function addLikes () {
    const button = document.getElementById("btn");
    button.addEventListener("click", () => {
    currentFood.rating ++
    rating.textContent = `Rating: ${currentFood.rating}`
})
};
function newComment () {
    const createComment = document.getElementById("createComment");
createComment.addEventListener("submit", e => {
e.preventDefault()
    const newComment = document.getElementById("new-comment");
    const comment = document.getElementById("comments")
    const div = document.createElement("div")
    comment.append(div)
    div.textContent = `Comment: ${newComment.value}`
    })
};
function newBurger () {
    const createBurger = document.getElementById("createBurger");
    createBurger.addEventListener("submit", e => {
        e.preventDefault();
        const burgerName = document.getElementById("newBurgerName").value;
        const burgerImage = document.getElementById("burgerURL").value;
        const burgerDescription = document.getElementById("burgerDescription").value;
        const burgerComment = document.getElementById("burgerComment").value;
            const newBurger = {
                name: burgerName,
                images: burgerImage,
                description: burgerDescription,
                comments: burgerComment,
                rating:0,
            }
        foodList(newBurger);
    });
}