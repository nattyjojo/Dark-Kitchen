var veganFoodArray = [
  {
    name: "Vegan Margherita Pizza",
    category: "Vegan Pizza",
    estimatedPrice: 18.00,
    estimatedOrders: 100,
    likes: 90,
    picture: "https://example.com/vegan_pizza.jpg",
  },
  {
    name: "Falafel Wrap",
    category: "Vegan Sandwich",
    estimatedPrice: 10.00,
    estimatedOrders: 120,
    likes: 110,
    picture: "https://example.com/falafel_wrap.jpg",
  },
  {
    name: "Tofu Stir Fry",
    category: "Vegan Asian",
    estimatedPrice: 15.00,
    estimatedOrders: 130,
    likes: 115,
    picture: "https://example.com/tofu_stir_fry.jpg",
  },
  {
    name: "Vegan Burrito",
    category: "Vegan Mexican",
    estimatedPrice: 14.00,
    estimatedOrders: 150,
    likes: 120,
    picture: "https://example.com/vegan_burrito.jpg",
  },
  {
    name: "Vegan Sushi Roll",
    category: "Vegan Japanese",
    estimatedPrice: 16.00,
    estimatedOrders: 110,
    likes: 100,
    picture: "https://example.com/vegan_sushi.jpg",
  },
  {
    name: "Vegan Burger",
    category: "Vegan Fast Food",
    estimatedPrice: 13.00,
    estimatedOrders: 160,
    likes: 140,
    picture: "https://example.com/vegan_burger.jpg",
  },
  {
    name: "Vegan Pasta Primavera",
    category: "Vegan Italian",
    estimatedPrice: 17.00,
    estimatedOrders: 105,
    likes: 95,
    picture: "https://example.com/vegan_pasta.jpg",
  },
  {
    name: "Vegan Paella",
    category: "Vegan Spanish",
    estimatedPrice: 20.00,
    estimatedOrders: 90,
    likes: 85,
    picture: "https://example.com/vegan_paella.jpg",
  },
  {
    name: "Vegan Pad Thai",
    category: "Vegan Thai",
    estimatedPrice: 14.50,
    estimatedOrders: 115,
    likes: 105,
    picture: "https://example.com/vegan_pad_thai.jpg",
  },
  {
    name: "Vegan Quinoa Salad",
    category: "Vegan Salads",
    estimatedPrice: 10.50,
    estimatedOrders: 120,
    likes: 110,
    picture: "https://example.com/vegan_quinoa_salad.jpg",
  },
  {
    name: "Vegan Tofu Scramble",
    category: "Vegan Breakfast",
    estimatedPrice: 9.00,
    estimatedOrders: 130,
    likes: 120,
    picture: "https://example.com/vegan_tofu_scramble.jpg",
  },
  {
    name: "Vegan Chocolate Cake",
    category: "Vegan Desserts",
    estimatedPrice: 8.00,
    estimatedOrders: 140,
    likes: 130,
    picture: "https://example.com/vegan_chocolate_cake.jpg",
  },
];

	let sect = document.querySelector('article')
	sect.classList.add('food-cards');

for (var i =0; i < veganFoodArray.length; i++ ) {
	let mainFood = document.createElement('div');

	let foodName = document.createElement('h3');
	let foodImg = document.createElement('img');
	let foodDis = document.createElement('div');
	let ulist = document.createElement('ul');
	let listItems = document.createElement('li');
	let pricePar = document.createElement('p');
	let orderPar = document.createElement('p');
	let Category = document.createElement('p');
	let order = document.createElement('a');
	sect.append(mainFood);
	mainFood.append(foodName, foodImg, foodDis, ulist, pricePar, orderPar, Category);
	ulist.append(listItems);
	let foodNamee = veganFoodArray[i].name;
	let foodDiss = veganFoodArray[i].name;
	let listItemss = veganFoodArray[i].likes;
	let priceParr = veganFoodArray[i].estimatedPrice;
	let orderParr = veganFoodArray[i].name;
	let Categoryy= veganFoodArray[i].category;

	foodName.insertAdjacentHTML( 'beforeend', foodNamee );
	pricePar.insertAdjacentHTML( 'beforeend', priceParr );
	listItems.insertAdjacentHTML( 'beforeend', listItemss );
	mainFood.classList.add('pepperoni-pizza');



}





 // <section class="food-cards">
            
 //            <div class="pepperoni-pizza">
 //                <h3>Pizza pepperoni</h3>
 //                <img src="images/pepperoni_pizza.jpg" alt="pepperoni pizza">
 //                <div class="description">
 //                    <p>Ingredients</p>
 //                    <ul>
 //                        <li>Lorem ipsum dolor sit amet</li> 
 //                        <li>consectetur adipisicing elit</li>
 //                        <li>Id eius quisquam quidem placeat excepturi velit</li> 
 //                        <li>Tempore, fuga rem voluptate unde</li>
 //                        <li>voluptas ad vitae possimus voluptatibus officiis iste, eveniet culpa modi</li> 
 //                    </ul>
 //                    <p>Price: 18.00&euro; </p>
 //                    <p>Orders: 100</p>
 //                    <p>Category: Pizza</p>
 //                </div>
 //                <a href="#">Order</a>
 //            </div>