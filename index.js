 // document.getElementById('theme-toggle').addEventListener('click', toggleTheme);

// function toggleTheme() {
//     document.body.classList.toggle('dark-theme');
//     document.body.classList.toggle('light-theme');
//     document.getElementById('theme-toggle').classList.toggle('dark');


//_____________________________________________________________________FOODCARDS________________________________________________________
function displayFoodCards() {
  var foodArray = [
    {
      category: 'Pizza',
      type: 'comfort',
      name: 'Pizza pepperoni',
      image: 'images/pepperoni_pizza.jpg',
      description: ['Pizza Crust', 'Pizza Sauce', 'Cheese', 'Pepperoni'],
      toppings: ['Mushrooms', 'Onions', 'Sausages', 'Extra Cheese', 'Extra Pepperoni'],
      sauces: ['Algerienne', 'Samourai', 'Andalouse', 'Mayonnaise', 'Ketchup'],
      price: '18.00€',
      //orderLink: 'https://example.com/pizza-order'
    },
    {
      category: 'Pizza',
      type: 'Comfort',
      name: 'Margherita Pizza',
      image: 'images/pepperoni_pizza.jpg',
      description: ['Pizza Crust', 'Pizza Sauce', 'Cheese'],
      toppings: ['Mushrooms', 'Olives', 'Basil', 'Fresh Tomatoes'],
      sauces: ['Garlic Sauce', 'Tomato Sauce', 'Pesto'],
      price: '15.00€',
      //orderLink: 'https://example.com/pizza-order'
    },
    {
      category: 'Burger',
      type: 'Vegan',
      name: 'Veggie Burger',
      image: 'images/veggie-burger.jpeg',
      description: ['Burger Bun', 'Veggie Patty', 'Lettuce', 'Tomato', 'Onion'],
      toppings: ['Cheese', 'Pickles', 'Ketchup', 'Mustard', 'Mayonnaise'],
      sauces: ['BBQ Sauce', 'Samourai', 'Andalouse', 'Mayonnaise', 'Ketchup'],
      price: '12.50€',
      //orderLink: 'https://example.com/burger-order'
    },
    {
      category: 'Sushi',
      type: 'Japanese',
      name: 'California Roll Sushi',
      image: 'images/california_roll_sushi.jpg',
      description: ['Sushi Rice', 'Crab Stick', 'Cucumber', 'Avocado'],
      toppings: ['Sesame Seeds', 'Fish Roe', 'Spicy Mayo'],
      sauces: ['Soy Sauce', 'Wasabi', 'Ginger'],
      price: '10.00€',
      //orderLink: 'https://example.com/sushi-order'
    },
    {
      category: 'Pasta',
      type: 'Italian',
      name: 'Spaghetti Carbonara',
      image: 'images/spaghetti_carbonara.jpg',
      description: ['Spaghetti', 'Bacon', 'Eggs', 'Parmesan Cheese'],
      toppings: ['Black Pepper', 'Parsley'],
      sauces: ['Carbonara Sauce'],
      price: '14.50€',
      //orderLink: 'https://example.com/pasta-order'
    },
    {
      category: 'Salad',
      type: 'Healthy',
      name: 'Caesar Salad',
      image: 'images/caesar_salad.jpg',
      description: ['Lettuce', 'Tomatoes', 'Cucumbers', 'Red Onion', 'Feta Cheese'],
      toppings: ['Olives', 'Bell Peppers'],
      sauces: ['Olive Oil', 'Red Wine Vinegar'],
      price: '8.00€',
      //orderLink: 'https://example.com/salad-order'
    },
  ];

  for (var i = 0; i < foodArray.length; i++) {
    var foodItem = foodArray[i];

    var foodCard = document.createElement('div');
    foodCard.classList.add('food');

    var category = document.createElement('p');
    category.classList.add('category');
    category.textContent = foodItem.category;

    var type = document.createElement('p');
    type.classList.add('type');
    type.textContent = foodItem.type;

    var name = document.createElement('h3');
    name.textContent = foodItem.name;

    var image = document.createElement('img');
    image.src = foodItem.image;
    image.alt = foodItem.name;

    var description = document.createElement('div');
    description.classList.add('description');
    var ul = document.createElement('ul');
    for (var j = 0; j < foodItem.description.length; j++) {
      var li = document.createElement('li');
      li.textContent = foodItem.description[j];
      ul.appendChild(li);
    }
    description.appendChild(ul);

    var toppings = document.createElement('div');
    toppings.classList.add('toppings');
    var toppingsLabel = document.createElement('label');
    toppingsLabel.classList.add('toppings-label');
    toppingsLabel.textContent = 'Toppings:'; 
    toppings.appendChild(toppingsLabel)   
    for (var k = 0; k < foodItem.toppings.length; k++) {
      var checkbox = document.createElement('input');
      checkbox.type = 'checkbox';
      checkbox.id = 'topping' + k; // Set a unique ID for each checkbox
      checkbox.name = 'toppings';
      checkbox.value = foodItem.toppings[k];

      var label = document.createElement('label');
      label.textContent = foodItem.toppings[k];
      label.setAttribute('for', 'topping' + k);

      toppings.appendChild(checkbox);
      toppings.appendChild(label);
    }



    var sauces = document.createElement('div');
    sauces.classList.add('sauces');
    var saucesLabel = document.createElement('label');
    saucesLabel.classList.add('sauces-label')
    saucesLabel.textContent = 'Sauce:';
    var saucesSelect = document.createElement('select');
    for (var l = 0; l < foodItem.sauces.length; l++) {
      var option = document.createElement('option');
      option.textContent = foodItem.sauces[l];
      saucesSelect.appendChild(option);
    }

    sauces.appendChild(saucesLabel);
    sauces.appendChild(saucesSelect);

    description.appendChild(toppings);
    description.appendChild(sauces);

    var orderLink = document.createElement('a');
    orderLink.classList.add('ordernow')
    // orderLink.href = foodItem.orderLink;
    orderLink.textContent = 'Order Now - ' + foodItem.price;
    foodCard.appendChild(category);
    foodCard.appendChild(type);
    foodCard.appendChild(name);
    foodCard.appendChild(image);
    foodCard.appendChild(description);

    foodCard.appendChild(orderLink);

    var foodContainer = document.getElementById('food-container');
    foodContainer.appendChild(foodCard);
  }
}

displayFoodCards();



//WHAT LUCIE ADDED FOR THE BUTTONS TO WORK
buttonOrderNowList = document.querySelectorAll(".ordernow")
let nodesFoodItemsSelected = []

//We will create an array with different objects (one for each selected items) that we will export in the other JS file.
buttonOrderNowList.forEach(element => {
    element.addEventListener("click", (event) => {
      const thisFoodItemSelected = {};
      let divFoodItemSelected = event.target.parentNode
      console.log(divFoodItemSelected.children)
      for (i=0; i < divFoodItemSelected.children.length ; i++) {
        const selectedChild = divFoodItemSelected.children[i];
        if (selectedChild.nodeName === "P") {
          thisFoodItemSelected[selectedChild.classList[0]] = selectedChild.innerText
        } else if (selectedChild.nodeName === "H3") {
          thisFoodItemSelected.name = selectedChild.innerText
        } else if (selectedChild.nodeName === "IMG") {
          thisFoodItemSelected.img = selectedChild.src          
        } else if (selectedChild.nodeName === "DIV") {
          thisFoodItemSelected.information = selectedChild.children
        } else if (selectedChild.nodeName === "A") {
            tempPrice = parseInt(selectedChild.innerText.split(" - ")[1].toString().replace("€","")) // extract the price from the text
          thisFoodItemSelected.price = tempPrice
        }
      }
      nodesFoodItemsSelected.push(thisFoodItemSelected)
      console.log(nodesFoodItemsSelected)
      addNewItemCart()
    })
})

//export { nodesFoodItemsSelected }
   
    
    
//______________________________________________________________________NAV BAR_________________________________________________________
    let shopICon = document.querySelector('.fa-cart-shopping');
    let shopDiv = document.querySelector('.shoppingCart');

    let exitbutton = document.querySelector('.fa-xmark');

shopICon.addEventListener("click", myFunction);
function myFunction() {
shopDiv.setAttribute("style", "visibility:visible;");

}

exitbutton.addEventListener("click", closeShop);
function closeShop() {
shopDiv.setAttribute("style", "visibility:hidden;");

}
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
    allCartItems = document.querySelectorAll(".cartItem")

    if (allCartItems.length > 1) {
        event.target.parentNode.parentNode.nextElementSibling.remove() // removes the hr after the last element so they don't accumulate
        event.target.parentNode.parentNode.remove() // remove the list item.
    } else { //else: shows the empty message
        divToRemoveItems = event.target.parentNode.parentNode
        divToRemoveItems.classList.remove("cartItem")
        divToRemoveItems.classList.add("divToRemoveItems")
        while (divToRemoveItems.firstChild) {
            divToRemoveItems.firstChild.remove()
        } 
        //create a "your shopping cart is empty" message
        emptyMessageText = document.createTextNode("Your shopping cart is empty")
        emptyMessagePara = document.createElement("p")
        emptyMessagePara.appendChild(emptyMessageText)

        //Style the message
        emptyMessagePara.style.height = ("70px")
        emptyMessagePara.style.fontSize = ("14px")
        emptyMessagePara.style.margin = ("auto")
        emptyMessagePara.style.paddingTop = ("20px")

        //select the last cart item (to add the empty message instead)
        lastItemDiv = allCartItems[allCartItems.length-1]
        lastItemDiv.appendChild(emptyMessagePara)
    }
    adjustNumberofItems()
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
    adjustPrice()
    finaltotal = document.querySelector(".finalTotalValue")
    deliveryFees = document.querySelector(".deliveryFeesText")
    if (parseInt(subtotalPrice) > 0) { // puts 0 as a total if there are no items in the list
        adjustPrice()
        finaltotal.innerText = parseInt(subtotalPrice) + parseInt(deliveryFees.innerText)
    } else {
        adjustPrice()
        finaltotal.innerText = "0"
    }
}

 
//_______________________________CREATE A NEW ARTICLE
const generateNewArticleCart = () => {

    //remove the empty message div if there is any
    //emptyMessageDiv = document.querySelector(".divToRemoveItems")
    //if (emptyMessageDiv.length > 0) {
    //    emptyMessageDiv.remove()
    //} else {}

    //div Cart items
    cartItem = document.createElement("div")
    cartItem.classList.add("cartItem")

    //item picture
    itemImage = document.createElement("img")
    itemImage.classList.add("itemImage")
    itemImage.setAttribute("src", `${nodesFoodItemsSelected[nodesFoodItemsSelected.length-1].img}`)
    itemImage.style.height = ("80px")
    itemImage.setAttribute("alt", " ")

    //div item elements
    itemElements = document.createElement("div")
    itemElements.classList.add("itemElements")

    //h4 item name
    itemName = document.createElement("h4")
    itemName.classList.add("itemName")
    itemNameText = document.createTextNode(`${nodesFoodItemsSelected[nodesFoodItemsSelected.length-1].name}`)

    //p item information
    itemInformation = document.createElement("p")
    itemInformation.classList.add("itemInformation")
    itemInformationText = document.createTextNode(`${nodesFoodItemsSelected[nodesFoodItemsSelected.length-1].information[1].innerHTML}`)
    //This gives me the topping div : nodesFoodItemsSelected[nodesFoodItemsSelected.length-1].information[1] 

    //p item price 
    itemPrice = document.createElement("p")
    itemPrice.classList.add("itemPrice")
    itemPriceCurrency = document.createElement("span")
    itemPriceCurrency.classList.add("itemPriceCurrency")
    itemPriceCurrencyText = document.createTextNode("€")
    itemPriceValue = document.createElement("span")
    itemPriceValue.classList.add("itemPriceValue")
    itemPriceValueText = document.createTextNode(`${nodesFoodItemsSelected[nodesFoodItemsSelected.length-1].price}`)

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
    currentQuantityValue = document.createTextNode("1") //SEE HOW TO CREATE A TEXT NODE THAT IS DIRECTLY AN INTEGER

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
    adjustNumberofItems()
    totalPrice()
}

adjustNumberofItems()
//addNewItemCart()


//_________________________________________GET INFO FROM MENU

buttonOrderNowList = document.querySelectorAll(".ordernow")

buttonOrderNowList.forEach(element => {
    addEventListener("click", )
});





//the last element of the array (the newest added to the list) is :
//nodesFoodItemsSelected[nodesFoodItemsSelected.length-1]