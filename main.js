//Load product page

let itemDes = []

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
                <p class="links"> <a href="Coffee1.html">See more information</a><br><br></p>
                <button class="add">Add to cart</button>
            </div>    
            </div>
        </div>`
        const items = document.getElementById('items');
        item.getElementsByClassName('add')[0].addEventListener('click', ()=>{
            addToCart(product)
        });
        item.getElementsByClassName('links')[0].addEventListener('click', ()=>{
            itemDescription(product)
        });
        items.append(item)
    });
}

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
    console.log(existingCart)
   
        console.log(product.name)
      
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
    
    cart.map((product)=> {
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
   console.log(existingCart)
   console.log(removed)
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


var i = 
    {
        id: 18,
        name: "Tea7",
        price: 125,
        img_path: "Images/new2.png",
        description: "coffee 3 description",
        quantity: 1,
        type: "tea",
       }

    function loadDescription(){
        var itemDess = localStorage.getItem('des');
        itemDesss = JSON.parse(itemDess)
        console.log(itemDess)

        itemDesss.map((i)=> {
        let item = document.createElement('div');
        item.innerHTML =
        ` 
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
      console.log(i)
      console.log("im in load description")
      console.log(itemDesss)
        
    });
}

/* function loadDescription(){
    var itemDess = localStorage.getItem('des');
    itemDesss = JSON.parse(itemDess)
    console.log(itemDess)

    itemDesss.map((i)=> {
    let item = document.createElement('div');
    item.innerHTML =
    ` 
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
  console.log(i)
  console.log("im in load description")
  console.log(itemDesss)
    
});
}
 */

/* function test(product){
    console.log("hello")
var html = "<table border='1|1'>";
for (var i = 0; i < products.length; i++) {
    html+="<tr>";
    html+="<td>"+product[i].name+"</td>";
    html+="<td>"+product[i].price+"</td>";
    html+="<td>"+product[i].description+"</td>";
    html+="<td>"+product[i].img_path+"</td>";
    html+="</tr>";}
html+="</table>";
document.getElementById("box").innerHTML = html;} */

   /*  let item = document.createElement('div');
    item.innerHTML = ` <div class="product">
    <div id="items"></div>
    <div class="product-img">
      <img id = "image" src="Images/new2.png">
    </div>
    <div class="product-des">
    <div id="box"></div>
      <h5 id="name">Coffee 1</h5>
      <h6 id="price">Price: 99,00 DKK</h6>
      <p id="des">You can buy this awesome product, that keeps you up all night</p>
      <a id="basket" href="Basket.html">Add to basket</a>
  </div>`
  const items = document.getElementById('items');
  items.append(item) */

/*   var html = "<table border='1|1'>";
  for (var i = 0; i < products.length; i++) {
      html+="<tr>";
      html+="<td>"+products[i].name+"</td>";
      html+="<td>"+products[i].price+"</td>";
      html+="<td>"+products[i].description+"</td>";
      html+="<td>"+products[i].img_path+"</td>";
      html+="</tr>";
  }
  html+="</table>";
  document.getElementById("box").innerHTML = html;} */