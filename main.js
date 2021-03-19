//Load product page

let itemDes = []


function loadProducts(product) {
    product.map((product, i)=> {
        let item = document.createElement('div');
        item.id = 'content';
        item.className = 'product-card';
        item.innerHTML = 
        `<div class="product-image">
            <a class="links" href="productDescription.html">
            <img src="${product.img_path}">
                </a>
            </div>
            <div class="product-info">
            <h2 class="name">${product.name}</h2>
                <p class="des">${product.description}</p>
                <p class="price">Price: ${product.price} DKK</p>
                <button class="btn add">ADD TO CART</button>
            </div>    
            </div>
        </div>`
        const products = document.getElementById('products');
        item.getElementsByClassName('btn add')[0].addEventListener('click', ()=>{
            addToCart(product)
        });
        item.getElementsByClassName('links')[0].addEventListener('click', ()=>{
            itemDescription(product)
        });
        products.append(item)
    });
}

/* function filter(tag){
    if(tag == coffee){
        allCoffees()
    }

    if(tag == tea){
        allTeas()
    }

} */

function itemDescription(product){
itemDes.push(product)
localStorage.setItem('des', JSON.stringify(itemDes));
}


//create an array to hold all element in the cart
let cart = [];


//Add elements to the cart
function addToCart(product){
    //Import the cart
    var existingCart = localStorage.getItem('cart');
    //If cart exists convert to array
    // If cart does not exists, create an array


    existingCart = existingCart ? JSON.parse(existingCart) : [];
    console.log(existingCart)
    for (let j = 0; j < existingCart.length; j++) {
        if(product.id == existingCart[j].id){
        alert("You already added that to the basket!");
        localStorage.setItem('cart', JSON.stringify(existingCart));
        return
    }}

    for (let j = 0; j < existingCart.length; j++) {
        if(product.id != existingCart[j].id){
            existingCart.push(product)
            localStorage.setItem('cart', JSON.stringify(existingCart));
            return
        }
        }
    for (let j = 0; j == existingCart.length;){
        existingCart.push(product)
        localStorage.setItem('cart', JSON.stringify(existingCart));
        return
    }
    // Add the product to the existing cart
    
    // Save the updated cart to localStorage
    localStorage.setItem('cart', JSON.stringify(existingCart));
      
}

//Load the cart page
function loadCart() {
    let cartData = localStorage.getItem('cart');
    cart = JSON.parse(cartData)
    
    cart.map((product)=> {
        let item = document.createElement('div');
        item.innerHTML =
    `<div class="row">
        <div class="product">
            <div class="col11">
                <div class="product-image">
                <img src="${product.img_path}">
                </div>
            </div>
            <div class="col22">
                <div class="product-details">
                <h2 class="product-title">${product.name}</h2>
                <p class="product-description">${product.description}</p>
                </div>
            </div>
            <div class="col33">
                <p class="product-price">${product.price} DKK</p>
            </div>
            <div class="col44">
                <div class="product-removal">
                    <button class="remove">
                        Remove
                    </button>
                </div>
            </div>
        </div>
    </div>`
        const items = document.getElementById('items');
        item.getElementsByClassName('remove')[0].addEventListener('click', (e)=>{
            remove(product, e)
            
        });
        items.append(item)
        calculatePrice() 
    });
 }

//Calculate the total price for the objects in the cart
 function calculatePrice() {
    let cartData = localStorage.getItem('cart');
    cart = JSON.parse(cartData)
    let sum = 0;
    cart.forEach(product => {
        let price = product.price
        if (!isNaN(price)) {
            sum += price;
        }
    });

    //Update the price
    document.getElementById("cart-subtotal").innerHTML = "Subtotal: " + sum;
}

//remove elements from the cart
let removed = []
function remove(product, e){
    var existingCart = localStorage.getItem('cart');
    //If cart exists convert to array
    // If cart does not exists, create an array
    existingCart = existingCart ? JSON.parse(existingCart) : [];
    console.log(existingCart)
    
   for (var i = existingCart.length - 1; i >= 0; i--) {
    if (existingCart[i].id == product.id) { 
        existingCart.splice(i, 1);
    }
}
   localStorage.setItem('cart', JSON.stringify(existingCart))
   e.target.parentElement.parentElement.parentElement.remove();
   calculatePrice()
}

    function loadDescription(){
        var itemDess = localStorage.getItem('des');
        itemDesss = JSON.parse(itemDess)
        console.log(itemDess)

        itemDesss.map((i)=> {
        let item = document.createElement('div');
        item.innerHTML =
        `
        <h2>Description of specific coffee</h2>
        <div class="product">
        <div id="items"></div>
        <div class="product-img">
          <img id = "image" src="${i.img_path}">
        </div>
        <div class="product-des">
          <h5 id="name">${i.name}</h5>
          <h6 id="price">Price: ${i.price} DKK</h6>
          <p id="des">${i.description}</p>
          <button class="add">Add to cart</button>
      </div>`
      const items = document.getElementById('items');
      item.getElementsByClassName('add')[0].addEventListener('click', ()=>{
        addToCart(i)
    });
      items.append(item)        
    });
}


let coffees = []
function allCoffees(){
    coffees = products.filter(it => new RegExp('coffee').test(it.type))
    console.log(coffees)
}

let teas = []
function allTeas(){
    teas = products.filter(it => new RegExp('tea').test(it.type))
    console.log(teas)
}
 
//All the products
let products = [
     {
       id: 1,
       name: "Kenya",
       price:50,
       img_path: "Images/Coffees/1.png",
       description: "Tasting notes: Grapefruit, Date, Honey",
       quantity: 1,
       type: "coffee",
   },
   {
       id: 2,
       name: "Colombia El Carmen",
       price:45,
       img_path: "Images/Coffees/2.png",
       description: "Tasting notes: Caramel, Chocolate, Red fruits",
       quantity: 1,
       type: "coffee",
      
   },
    {
       id: 3,
       name: "Starbucks House Blend",
       price:45,
       img_path: "Images/Coffees/3.png",
       description: "Tasting notes: Toffee, Cinnamon, Lemon",
       quantity: 1,
       type: "coffee",
   },
   {
       id: 4,
       name: "Sweethear Colombia",
       price:60,
       img_path: "Images/Coffees/4.png",
       description: "Tasting notes: Caramel, Apple, Chocolate",
       quantity: 1,
       type: "coffee",
   },
   {
       id: 5,
       name: "Battlecheeck coffee",
       price:75,
       img_path: "Images/Coffees/5.png",
       description: "Tasting notes: Caramel, Chocolate, Raisins",
       quantity: 1,
       type: "coffee",
   },
   {
       id: 6,
       name: "Ethiopia",
       price:109,
       img_path: "Images/Coffees/6.png",
       description: "Tasting notes: Jasmine, Lemon Drop, Honey",
       quantity: 1,
       type: "coffee",
   },
   {
       id: 7,
       name: "Ethiopia Agaro Family",
       price: 120,
       img_path: "Images/Coffees/7.png",
       description: "Tasting notes: Dried Apricot, Chamomille",
       quantity: 1,
       type: "coffee",
   },
   {
       id: 8,
       name: "Brooklyn - Partners",
       price: 65,
       img_path: "Images/Coffees/8.png",
       description: "Tasting notes: Milk chocolate, Dried fruit",
       quantity: 1,
       type: "coffee",
   },
   {
       id: 9,
       name: "Blue Bottle Coffee",
       price: 70,
       img_path: "Images/Coffees/9.png",
       description: "Tasting notes: Rose, Elderflower, Lime",
       quantity: 1,
       type: "coffee",
   },
   {
       id: 10,
       name: "The Goodlife",
       price: 55,
       img_path: "Images/Coffees/10.png",
       description: "Tasting notes: Spicy red wine, Nutmeg",
       quantity: 1,
       type: "coffee",
   },

   {
        id: 11,
        name: "Black tea",
        price: 35,
        img_path: "Images/Teas/11.png",
        description: "Tasting notes: Cacao, Herbal, Honey, Vanilla",
        quantity: 1,
        type: "tea",
   },
   {
        id: 12,
        name: "Green tea",
        price: 40,
        img_path: "Images/Teas/12.png",
        description: "Tasting notes: Cool mint, Ginger, Spices",
        quantity: 1,
        type: "tea",
   },
   {
        id: 13,
        name: "Chai tea",
        price: 59,
        img_path: "Images/Teas/13.png",
        description: "Tasting notes: Cinnamon, Cardamom, Ginger",
        quantity: 1,
        type: "tea",
   },
   {
        id: 14,
        name: "Matcha tea",
        price: 70,
        img_path: "Images/Teas/14.png",
        description: "Tasting notes: Vegetal, Bitterness, Nuttiness",
        quantity: 1,
        type: "tea",
   },
   {
        id: 15,
        name: "Ginger tea",
        price: 125,
        img_path: "Images/Teas/15.png",
        description: "Tasting notes: Ginger, Lemon, Mint, Orange",
        quantity: 1,
        type: "tea",
   },
   {
        id: 16,
        name: "Rooibos tea",
        price: 35,
        img_path: "Images/Teas/16.png",
        description: "Tasting notes:  Pumpkin, Spices, Herbal",
        quantity: 1,
        type: "tea",
   },
   {
        id: 17,
        name: "Mega Matcha tea",
        price: 65,
        img_path: "Images/Teas/17.png",
        description: "Tasting notes: Matcha, Vanilla, Apple, Pear",
        quantity: 1,
        type: "tea",
   },
   {
        id: 18,
        name: "Lemon & Honey tea",
        price: 80,
        img_path: "Images/Teas/18.png",
        description: "Tasting notes: Lemon, Honey, Orange",
        quantity: 1,
        type: "tea",
   },
   {
        id: 19,
        name: "Earl Grey tea",
        price: 75,
        img_path: "Images/Teas/19.png",
        description: "Tasting notes: Bergamot, Citrus, Floral",
        quantity: 1,
        type: "tea",
   },
   {
        id: 20,
        name: "Fruit tea",
        price: 55,
        img_path: "Images/Teas/20.png",
        description: "Tasting notes: Vanilla, Orange, Honey.",
        quantity: 1,
        type: "tea",
   }
   ]
   
