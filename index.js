let foodList = [
    {
        name: "Vegan Pizza",
        recipe: "Tomato Sauce, Vegan Cheese, Dough",
        toppings: ["Bell Peppers", "Olives", "Onions"],
        sauce: ["Tomato", "Pesto"],
        price: 10,
        vegan: true,
        image: "https://example.com/images/vegan-pizza.jpg"
    },
    {
        name: "Burger",
        recipe: "Beef Patty, Lettuce, Tomato, Bun",
        toppings: ["Cheese", "Bacon", "Pickles"],
        sauce: ["Mayo", "Ketchup"],
        price: 8,
        vegan: false,
        image: "https://example.com/images/burger.jpg"
    },
    {
        name: "Caesar Salad",
        recipe: "Romaine Lettuce, Croutons, Caesar Dressing, Parmesan Cheese",
        toppings: ["Chicken", "Bacon"],
        sauce: ["Caesar"],
        price: 7,
        vegan: false,
        image: "https://example.com/images/caesar-salad.jpg"
    },
    {
        name: "Vegan Taco",
        recipe: "Vegan Meat, Lettuce, Tomato, Taco Shell",
        toppings: ["Vegan Cheese", "Salsa", "Guacamole"],
        sauce: ["Salsa"],
        price: 9,
        vegan: true,
        image: "https://example.com/images/vegan-taco.jpg"
    },
    {
        name: "Spaghetti Bolognese",
        recipe: "Spaghetti, Ground Beef, Tomato Sauce",
        toppings: ["Parmesan"],
        sauce: ["Tomato"],
        price: 12,
        vegan: false,
        image: "https://example.com/images/spaghetti-bolognese.jpg"
    },
    {
        name: "Vegan Sushi Roll",
        recipe: "Rice, Nori, Avocado, Cucumber",
        toppings: ["Sesame Seeds"],
        sauce: ["Soy Sauce"],
        price: 10,
        vegan: true,
        image: "https://example.com/images/vegan-sushi-roll.jpg"
    },
    {
        name: "Chicken Teriyaki",
        recipe: "Chicken, Rice, Teriyaki Sauce",
        toppings: ["Sesame Seeds", "Green Onion"],
        sauce: ["Teriyaki"],
        price: 11,
        vegan: false,
        image: "https://example.com/images/chicken-teriyaki.jpg"
    },
    {
        name: "Vegan Quinoa Salad",
        recipe: "Quinoa, Bell Peppers, Onion, Tomato",
        toppings: ["Cucumber", "Feta Cheese"],
        sauce: ["Olive Oil", "Lemon"],
        price: 8,
        vegan: true,
        image: "https://example.com/images/vegan-quinoa-salad.jpg"
    },
    {
        name: "Grilled Steak",
        recipe: "Beef Steak, Grilled Vegetables",
        toppings: ["Mushrooms", "Onions"],
        sauce: ["Steak Sauce"],
        price: 15,
        vegan: false,
        image: "https://example.com/images/grilled-steak.jpg"
    },
    {
        name: "Vegan Stir Fry",
        recipe: "Tofu, Mixed Vegetables, Soy Sauce",
        toppings: ["Green Onion", "Sesame Seeds"],
        sauce: ["Soy Sauce"],
        price: 10,
        vegan: true,
        image: "https://example.com/images/vegan-stir-fry.jpg"
    },
    {
        name: "Shrimp Scampi",
        recipe: "Shrimp, Garlic, Butter, Linguine",
        toppings: ["Parsley", "Lemon"],
        sauce: ["Garlic Butter"],
        price: 13,
        vegan: false,
        image: "https://example.com/images/shrimp-scampi.jpg"
    },
    {
        name: "Vegan Burger",
        recipe: "Vegan Patty, Lettuce, Tomato, Vegan Bun",
        toppings: ["Vegan Cheese", "Pickles", "Onion"],
        sauce: ["Ketchup", "Mustard"],
        price: 9,
        vegan: true,
        image: "https://example.com/images/vegan-burger.jpg"
    },
    {
        name: "Chicken Alfredo",
        recipe: "Chicken, Fettuccine, Alfredo Sauce",
        toppings: ["Parmesan"],
        sauce: ["Alfredo"],
        price: 11,
        vegan: false,
        image: "https://example.com/images/chicken-alfredo.jpg"
    },
    {
        name: "Vegan Smoothie Bowl",
        recipe: "Banana, Spinach, Almond Milk",
        toppings: ["Chia Seeds", "Almonds", "Berries"],
        sauce: ["Honey"],
        price: 6,
        vegan: true,
        image: "https://example.com/images/vegan-smoothie-bowl.jpg"
    },
    {
        name: "Fish and Chips",
        recipe: "Battered Fish, Chips",
        toppings: ["Lemon"],
        sauce: ["Tartare"],
        price: 10,
        vegan: false,
        image: "https://example.com/images/fish-and-chips.jpg"
    }
];
//header functions
function focusSearchBar() {
    document.querySelector(".searchInput").focus();
}



//___________________________________________shoppingCart functions

let cartItemList = document.querySelector(".cartItemList")

//increase quantity
let buttonsAddQuantityList = document.querySelectorAll(".addQuantity")
const increaseQuantity = (event) => {
    currentQuantity = parseInt(event.target.previousElementSibling.innerText)
    if (currentQuantity < 1) {
        event.target.parentNode.parentNode.style.opacity = "1"
    }
    newQuantity = ++currentQuantity
    event.target.previousElementSibling.innerText = newQuantity
}

//decrease quantity
let buttonsMinusQuantityList = document.querySelectorAll(".minusQuantity")
const decreaseQuantity = (event) => {
    currentQuantity = parseInt(event.target.nextElementSibling.innerText)
    if (currentQuantity > 1) {
        newQuantity = --currentQuantity
        event.target.nextElementSibling.innerText = newQuantity
    } else {
        event.target.nextElementSibling.innerText = 0
        event.target.parentNode.parentNode.style.opacity = "0.5"
    }
}

let buttonsRemoveArticle = document.querySelectorAll(".removeArticle")
const deleteArticle = (event) => {
    event.target.parentNode.parentNode.remove()
}




//CREATE A NEW ARTICLE
const generateNewArticleCart = () => {

    //div Cart items
    cartItem = document.createElement("div")
    cartItem.classList.add("cartItem")

    //item picture
    itemImage = document.createElement("img")
    itemImage.classList.add("itemImage")
    itemImage.setAttribute("src", "")
    itemImage.setAttribute("alt", " ")

    //div item elements
    itemElements = document.createElement("div")
    itemElements.classList.add("itemElements")

    //h4 item name
    itemName = document.createElement("h4")
    itemName.classList.add("itemName")
    itemNameText = document.createTextNode("Item Name")

    //p item information
    itemInformation = document.createElement("p")
    itemInformation.classList.add("itemInformation")
    itemInformationText = document.createTextNode("Item Information")

    //p item price 
    itemPrice = document.createElement("p")
    itemPrice.classList.add("itemPrice")
    itemPriceCurrency = document.createElement("span")
    itemPriceCurrency.classList.add("itemPriceCurrency")
    itemPriceCurrencyText = document.createTextNode("€")
    itemPriceValue = document.createElement("span")
    itemPriceValue.classList.add("itemPriceValue")
    itemPriceValueText = document.createTextNode("15")

    //div item quantity
    itemQuantity = document.createElement("div")
    itemQuantity.classList.add("itemQuantity")

    //button minus quantity
    minusQuantity = document.createElement("button")
    minusQuantity.classList.add("minusQuantity")
    minusQuantity.addEventListener("click", decreaseQuantity)
    minusQuantityIcon = document.createElement("i")
    minusQuantityIcon.style.pointerEvents = ('none')
    minusQuantityIcon.classList.add("fa-solid")
    minusQuantityIcon.classList.add("fa-minus")

    //button add quantity
    addQuantity = document.createElement("button")
    addQuantity.classList.add("addQuantity")
    addQuantity.addEventListener("click", increaseQuantity)
    addQuantityIcon = document.createElement("i")
    addQuantityIcon.style.pointerEvents = ('none');
    addQuantityIcon.classList.add("fa-solid")
    addQuantityIcon.classList.add("fa-plus")

    //p current quantity
    currentQuantity = document.createElement("p")
    currentQuantity.classList.add("currentQuantity")
    currentQuantityValue = document.createTextNode("1")

    //button delete article
    removeArticle = document.createElement("button")
    removeArticle.classList.add("removeArticle")
    removeArticle.addEventListener("click", deleteArticle)
    removeArticleIcon = document.createElement("i")
    removeArticleIcon.style.pointerEvents = ('none')
    removeArticleIcon.classList.add("fa-solid")
    removeArticleIcon.classList.add("fa-trash-can")


    //final hr
    hr = document.createElement("hr")

    //organise everything

        //ItemQuantity
        minusQuantity.appendChild(minusQuantityIcon)
        addQuantity.appendChild(addQuantityIcon)
        currentQuantity.appendChild(currentQuantityValue)
        removeArticle.appendChild(removeArticleIcon)

        itemQuantity.appendChild(minusQuantity)
        itemQuantity.appendChild(currentQuantity)
        itemQuantity.appendChild(addQuantity)
        itemQuantity.appendChild(removeArticle)


        //Item elements
        itemName.appendChild(itemNameText)
        itemInformation.appendChild(itemInformationText)
        itemPriceCurrency.appendChild(itemPriceCurrencyText)
        itemPriceValue.appendChild(itemPriceValueText)
        itemPrice.appendChild(itemPriceValue)
        itemPrice.appendChild(itemPriceCurrency)

        itemElements.appendChild(itemName)
        itemElements.appendChild(itemInformation)
        itemElements.appendChild(itemPrice)

            //cartItem
            cartItem.appendChild(itemImage)
            cartItem.appendChild(itemElements)
            cartItem.appendChild(itemQuantity)

                //add it to the list
                cartItemList.appendChild(cartItem)
                cartItemList.appendChild(hr)
}

let numberItemsValue 
let numberItemsShowed



const addNewItemCart = () => {
    generateNewArticleCart()
    
    //numberItemsValue.forEach // find a way to make the number of articles on the quantity of each instead of just the number of different articles
    

    //numberItemsValue.textContent = document.querySelectorAll(".cartItem").length
    //numberItemsShowed = document.querySelectorAll(".cartItem").length
}
addNewItemCart()



let list = []
let innerText = []
let sumArticles
const calculateNumberofItems = () => {
    

    articleQuantitiesPara = document.querySelectorAll(".currentQuantity")
    list = Array.from(articleQuantitiesPara);
    innertext = list.map(e => parseInt(e.innerText))

    sumArticles = parseInt(0)
    for (i=0 ; i < innertext.length+1 ; i++) {
        sumArticles = sumArticles + parseInt(innertext[i])
    }

    return sumArticles
}


numberItemsValue = document.querySelector(".numberItemsValue") //I put the assignation here so it's reset each time we use the function





//delete the item function: if it goes lower than 0, we should remove it
//also mayby add a remove icon
