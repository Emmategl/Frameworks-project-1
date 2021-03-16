//Load product page
function loadProducts(product) {
    
    product.map((product, i)=> {
        let item = document.createElement('div');
        item.innerHTML = 
        `<div class="allItems">
        <div class="product-image">
            <a href="Coffee1.html">
            <img src="${product.img_path}">
                </a>
            </div>
            <div class="product-info">
            <h5 class="name">${product.name}</h5>
                <h6 class="price">${product.price} DKK</h6>
                <p class="des">${product.description}</p>
                <a href="Coffee1.html">See more information</a><br><br>
                <button class="add">Add to cart</button>
            </div>    
            </div>
        </div>`
        const items = document.getElementById('items');
        item.getElementsByClassName('add')[0].addEventListener('click', ()=>{
            addToCart(i)
        });
        items.append(item)
    });
}

function loadProducts2(product) {
    
    product.map((product, i)=> {
        let item = document.createElement('div');
        item.innerHTML = 
        `<div class="allItems">
        <div class="product-image">
            <a href="Coffee1.html">
            <img src="${product.img_path}">
                </a>
            </div>
            <div class="product-info">
            <h5 class="name">${product.name}</h5>
                <h6 class="price">${product.price} DKK</h6>
                <p class="des">${product.description}</p>
                <a href="Coffee1.html">See more information</a><br><br>
                <button class="add">Add to cart</button>
            </div>    
            </div>
        </div>`
        const items = document.getElementById('items');
        item.getElementsByClassName('add')[0].addEventListener('click', ()=>{
            addToCart(product)
        });
        items.append(item)
    });
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
    for (let j = 0; j < existingCart.length; j++) {
        if(product.id == existingCart[j].id){
        alert("You already added that to the basket!");
        console.log("hello")
        localStorage.setItem('cart', JSON.stringify(existingCart));
        return
    }}

    for (let j = 0; j < existingCart.length; j++) {
        if(product.id != existingCart[j].id){
            console.log("no")
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
    console.log(existingCart)
   
        console.log(product.name)
      
}

//remove elements from the cart
let cartRemoved = []
function remove(product, e){
    var existingCart = localStorage.getItem('cart');
    //If cart exists convert to array
    // If cart does not exists, create an array
    existingCart = existingCart ? JSON.parse(existingCart) : [];
    
   for (let j = 0; j < existingCart.length; j++) {
       if(existingCart[j].id === product.id){
           existingCart.splice(j)
       }
   }
   localStorage.setItem('cart', JSON.stringify(existingCart))
   e.target.parentElement.parentElement.parentElement.remove();
   calculatePrice()
   console.log(existingCart)
}

/* //remove elements from the cart
let cartRemoved = []
function remove(i, e){
    var existingCart = localStorage.getItem('cart');
    //If cart exists convert to array
    // If cart does not exists, create an array
    existingCart = existingCart ? JSON.parse(existingCart) : [];
    
   for (let j = 0; j < existingCart.length; j++) {
       if(existingCart[j] === i){
           existingCart.splice(j)
           cartRemoved.push(existingCart)
       }
   }
   localStorage.setItem('cart', JSON.stringify(cartRemoved))
   e.target.parentElement.parentElement.parentElement.remove();
   calculatePrice()
} */

//Load the cart page
function loadCart() {
    let cartData = localStorage.getItem('cart');
    cart = JSON.parse(cartData)
    
    cart.forEach((product)=> {
        let item = document.createElement('div');
        item.innerHTML =
    `<div class="row">
        <div class="product">
            <div class="col1">
                <div class="product-image">
                <img src="${product.img_path}">
                </div>
            </div>
            <div class="col2">
                <div class="product-details">
                <div class="product-title">${product.name}</div>
                <p class="product-description">${product.description}</p>
                </div>
            </div>
            <div class="col3">
                <div class="product-price">${product.price} DKK</div>
            </div>
            <div class="col5">
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
    $('#cart-subtotal').html('<p>Total price:' + sum + '<p>');
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
       name: "Coffee1",
       price:5,
       img_path: "Images/new1.png",
       description: "coffe 1 description",
       quantity: 5,
       type: "coffee",
   },
   {
       id: 2,
       name: "Coffee2",
       price:10,
       img_path: "Images/new3.png",
       description: "coffee 2 description",
       quantity: 1,
       type: "coffee",
      
   },
    {
       id: 3,
       name: "Coffee3",
       price:15,
       img_path: "Images/new1.png",
       description: "coffee 3 description",
       quantity: 1,
       type: "coffee",
   },
   {
       id: 4,
       name: "Coffee4",
       price:7,
       img_path: "Images/new3.png",
       description: "coffe 1 description",
       quantity: 1,
       type: "coffee",
   },
   {
       id: 5,
       name: "Coffee5",
       price:13,
       img_path: "Images/new3.png",
       description: "coffee 2 description",
       quantity: 1,
       type: "coffee",
   },
   {
       id: 6,
       name: "Coffee6",
       price:125,
       img_path: "Images/new3.png",
       description: "coffee 3 description",
       quantity: 1,
       type: "coffee",
   },
   {
       id: 7,
       name: "Coffee7",
       price: 15,
       img_path: "Images/new1.png",
       description: "coffee 3 description",
       quantity: 1,
       type: "coffee",
   },
   {
       id: 8,
       name: "Coffee8",
       price: 7,
       img_path: "Images/new3.png",
       description: "coffe 1 description",
       quantity: 1,
       type: "coffee",
   },
   {
       id: 9,
       name: "Coffee9",
       price: 13,
       img_path: "Images/new1.png",
       description: "coffee 2 description",
       quantity: 1,
       type: "coffee",
   },
   {
       id: 10,
       name: "Coffee10",
       price: 125,
       img_path: "Images/new3.png",
       description: "coffee 3 description",
       quantity: 1,
       type: "coffee",
   },

{
 id: 12,
 name: "Tea1",
 price: 125,
 img_path: "Images/new2.png",
 description: "coffee 3 description",
 quantity: 1,
 type: "tea",
},
{
 id: 13,
 name: "Tea2",
 price: 125,
 img_path: "Images/new4.png",
 description: "coffee 3 description",
 quantity: 1,
 type: "tea",
},
{
 id: 14,
 name: "Tea3",
 price: 125,
 img_path: "Images/new2.png",
 description: "coffee 3 description",
 quantity: 1,
 type: "tea",
},
{
 id: 15,
 name: "Tea4",
 price: 125,
 img_path: "Images/new4.png",
 description: "coffee 3 description",
 quantity: 1,
 type: "tea",
},
{
 id: 16,
 name: "Tea5",
 price: 125,
 img_path: "Images/new2.png",
 description: "coffee 3 description",
 quantity: 1,
 type: "tea",
},
{
 id: 17,
 name: "Tea6",
 price: 125,
 img_path: "Images/new4.png",
 description: "coffee 3 description",
 quantity: 1,
 type: "tea",
},
{
 id: 18,
 name: "Tea7",
 price: 125,
 img_path: "Images/new2.png",
 description: "coffee 3 description",
 quantity: 1,
 type: "tea",
},
{
 id: 19,
 name: "Tea8",
 price: 125,
 img_path: "Images/new4.png",
 description: "coffee 3 description",
 quantity: 1,
 type: "tea",
},
{
 id: 20,
 name: "Tea9",
 price: 125,
 img_path: "Images/new2.png",
 description: "coffee 3 description",
 quantity: 1,
 type: "tea",
},
{
 id: 21,
 name: "Tea10",
 price: 125,
 img_path: "Images/new4.png",
 description: "coffee 3 description",
 quantity: 1,
 type: "tea",
},
]