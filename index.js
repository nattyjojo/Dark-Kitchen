//header functions
function focusSearchBar() {
    document.querySelector(".searchInput").focus();
}


//___________________________________________shoppingCart functions
let cartItemList = document.querySelector(".cartItemList")
let numberofItems = 1
let numberOfArticles = 3


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
    minusQuantityIcon = document.createElement("i")
    minusQuantityIcon.classList.add("fa-solid")
    minusQuantityIcon.classList.add("fa-minus")

    //button add quantity
    addQuantity = document.createElement("button")
    addQuantity.classList.add("addQuantity")
    addQuantityIcon = document.createElement("i")
    addQuantityIcon.classList.add("fa-solid")
    addQuantityIcon.classList.add("fa-plus")

    //p current quantity
    currentQuantity = document.createElement("p")
    currentQuantity.classList.add("currentQuantity")
    currentQuantityValue = document.createTextNode("1")

    //final hr
    hr = document.createElement("hr")

    //organise everything

        //ItemQuantity
        minusQuantity.appendChild(minusQuantityIcon)
        addQuantity.appendChild(addQuantityIcon)
        currentQuantity.appendChild(currentQuantityValue)

        itemQuantity.appendChild(minusQuantity)
        itemQuantity.appendChild(currentQuantity)
        itemQuantity.appendChild(addQuantity)

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
    numberItemsValue = document.querySelector(".numberItemsValue") //I put the assignation here so it's reset each time we use the function
    numberItemsValue.forEach // find a way to make the number of articles on the quantity of each instead of just the number of different articles
    

    numberItemsValue.textContent = document.querySelectorAll(".cartItem").length
    numberItemsShowed = document.querySelectorAll(".cartItem").length

}


let buttonsAddQuantityList = document.querySelectorAll(".addQuantity")
buttonsAddQuantityList.forEach(element => {
    element.addEventListener("click", (event) => {
        currentQuantity = event.target.previousElementSibling.innerText
        currentQuantity++
        event.target.previousElementSibling.innerText = currentQuantity
    })
})

let buttonsMinusQuantityList = document.querySelectorAll(".minusQuantity")
buttonsMinusQuantityList.forEach(element => {
    element.addEventListener("click", (event) => {
        currentQuantity = event.target.nextElementSibling.innerText
        currentQuantity--
        event.target.nextElementSibling.innerText = currentQuantity
    })
})

let buttonsRemoveItem = document.querySelectorAll(".removeItems")


//delete the item function: if it goes lower than 0, we should remove it
//also mayby add a remove icon