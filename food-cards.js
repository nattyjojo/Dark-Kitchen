// document.getElementById('theme-toggle').addEventListener('click', toggleTheme);

// function toggleTheme() {
//     document.body.classList.toggle('dark-theme');
//     document.body.classList.toggle('light-theme');
//     document.getElementById('theme-toggle').classList.toggle('dark');

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
      orderLink: 'https://example.com/pizza-order'
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
      orderLink: 'https://example.com/pizza-order'
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
      orderLink: 'https://example.com/burger-order'
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
      orderLink: 'https://example.com/sushi-order'
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
      orderLink: 'https://example.com/pasta-order'
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
      orderLink: 'https://example.com/salad-order'
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
    toppingsLabel.textContent = 'Toppings:';
    var toppingsSelect = document.createElement('select');
    for (var k = 0; k < foodItem.toppings.length; k++) {
      var option = document.createElement('option');
      option.textContent = foodItem.toppings[k];
      toppingsSelect.appendChild(option);
    }
    toppings.appendChild(toppingsLabel);
    toppings.appendChild(toppingsSelect);

    var sauces = document.createElement('div');
    sauces.classList.add('sauces');
    var saucesLabel = document.createElement('label');
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
    orderLink.href = foodItem.orderLink;
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
