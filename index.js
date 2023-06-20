//header functions
function focusSearchBar() {
    document.querySelector(".searchInput").focus();
}



//___________________________________________shoppingCart functions

let cartItemList = document.querySelector(".cartItemList")


let listQuantity = []
let innerTextQuantity = []
let sumArticles

//_____________________________________work on the quantity

const resetQuantityValues = () => {
    articleQuantitiesPara = document.querySelectorAll(".currentQuantity")
    listQuantity = Array.from(articleQuantitiesPara);
    innerTextQuantity = listQuantity.map(e => parseInt(e.innerText))
    return innerTextQuantity
}

const resetPriceValues = () => {
    articlePricesPara = document.querySelectorAll(".itemPriceValue")
    listPrice = Array.from(articlePricesPara)
    innerTextPrice = listPrice.map(e => parseInt(e.innerText))
    return innerTextPrice
}

const calculateNumberofItems = () => {
    resetQuantityValues()
    sumArticles = parseInt(0)
    for (i=0 ; i < innerTextQuantity.length ; i++) {
        sumArticles = sumArticles + parseInt(innerTextQuantity[i])
    }
    return sumArticles
}

const adjustNumberofItems = () => {
    numberItemsValue = document.querySelector(".numberItemsValue") //I put the assignation here so it's reset each time we use the function
    calculateNumberofItems()
    numberItemsValue.innerText = sumArticles
}

//increase quantity
let buttonsAddQuantityList = document.querySelectorAll(".addQuantity")
const increaseQuantity = (event) => {
    currentQuantity = parseInt(event.target.previousElementSibling.innerText)
    if (currentQuantity < 1) {
        event.target.parentNode.parentNode.style.opacity = "1"
    }
    newQuantity = ++currentQuantity
    event.target.previousElementSibling.innerText = newQuantity
    totalPrice()
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
    totalPrice()
}


//remove an article
let buttonsRemoveArticle = document.querySelectorAll(".removeArticle")
const deleteArticle = (event) => {
    event.target.parentNode.parentNode.remove()
    totalPrice()
}

//_______________________________Adjust the price

let allPrices
let subtotalPrice


const getArrayOfElements = () => {
    resetQuantityValues()
    resetPriceValues()
    priceCalculationObject = []

    for (i=0 ; i < innerTextQuantity.length ; i++) {
        let itemPrice = {}
        itemPrice.quantity = innerTextQuantity[i]
        itemPrice.price = innerTextPrice[i]
        priceCalculationObject.push(itemPrice)
    }
    return priceCalculationObject
}

//calculate the price

let subTotalAllItems = []
const getArraysofAllSubtotalPrices = () => {
    getArrayOfElements()
    subTotalAllItems = [] // it doesn't work here
    for (i=0 ; i<priceCalculationObject.length; i++) {
        let subTotalPriceOfThisItem = 0
        subTotalPriceOfThisItem = priceCalculationObject[i].quantity * priceCalculationObject[i].price
        subTotalAllItems.push(subTotalPriceOfThisItem)
    } 
    return subTotalAllItems
}

const calculatePrice = () => {
    getArraysofAllSubtotalPrices()
    subtotalPrice = 0
    for (i=0 ; i < subTotalAllItems.length ; i++) {
        subtotalPrice = subtotalPrice + subTotalAllItems[i]
    }
    return subtotalPrice
}

const adjustPrice = () => {
    subtotal = document.querySelector(".subtotalValueText")
    calculatePrice()
    subtotal.innerText = subtotalPrice
}

//_______________________________calculate the total price
const totalPrice = () => {
    finaltotal = document.querySelector(".finalTotalValue")
    deliveryFees = document.querySelector(".deliveryFeesText")
    adjustPrice()
    finaltotal.innerText = parseInt(subtotalPrice) + parseInt(deliveryFees.innerText)
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

//Add a new item
const addNewItemCart = () => {
    generateNewArticleCart()
    totalPrice()
}

addNewItemCart()
addNewItemCart()

