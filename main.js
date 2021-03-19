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
    `
        <div class="product">
                <div class="product-image">
                <img src="${product.img_path}">
            </div>
                <div class="product-details">
                <h2 class="product-title">${product.name}</h2>
                <p class="product-description">${product.description}</p>
            </div>
                <p class="product-price">${product.price} DKK</p>
                <div class="product-removal">
                    <button class="btn remove">
                        REMOVE
                    </button>
            </div>
        </div>
    </div>`
        const items = document.getElementById('items');
        item.getElementsByClassName('btn remove')[0].addEventListener('click', (e)=>{
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
        item.className = 'product';

        item.innerHTML =
        `
        <div class="product-img">
          <img id = "image" src="${i.img_path}">
        </div>
        <div class="product-des">
          <h1 id="name">${i.name}</h1>
          <h3 id="price">Price: ${i.price} DKK</h3>
          <p id="des">${i.description}</p>
          <p id="des">${i.longDescription}</p>
          <button class="btn add">Add to cart</button>
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
        id: 12,
        name: "Green tea",
        price: 40,
        img_path: "Images/Teas/12.png",
        description: "Tasting notes: Cool mint, Ginger, Spices",
        quantity: 1,
        type: "tea",
        longDescription: "A true classic in herbal tea. Cool Mint is without a doubt our bed selling herbal tea. Cool Mint tea is a wonderful herbal tea of various herbs, including peppermint, spiced with lemongrass and ginger. Refreshing and delicious. Cool Mint herbal tea can be enjoyed as iced tea on a warm summer day. ",
   },
   {
    id: 3,
    name: "Starbucks House Blend",
    price:45,
    img_path: "Images/Coffees/3.png",
    description: "Tasting notes: Toffee, Cinnamon, Lemon",
    quantity: 1,
    type: "coffee",
    longDescription: "This variant is called House Blend and is the first coffee that Starbucks created and has been with them ever since. The coffee comes from South and Central America and is medium roasted 100% Arabica. The frugal roasting gives a mild caramelized taste with notes of nuts and mild sweetness. This Starbucks for Nespresso is recommended as a lungo.",
},
   {
        id: 13,
        name: "Chai tea",
        price: 59,
        img_path: "Images/Teas/13.png",
        description: "Tasting notes: Cinnamon, Cardamom, Ginger",
        quantity: 1,
        type: "tea",
        longDescription: "Original chai with black tea and warming herbs. Contains a blend of five organic fair-trade herbs from small, self-employed farmers from around the world. Each ingredient is known to help add spice to life. Cinnamon and ginger are warming herbs. Cardamom is deliciously aromatic.",
   },
   {
        id: 14,
        name: "Matcha tea",
        price: 70,
        img_path: "Images/Teas/14.png",
        description: "Tasting notes: Vegetal, Bitterness, Nuttiness",
        longDescription: "This Matcha tea is of good quality, which is perfect to be enjoyed clean, cooked in a Matcha bowl. The dried leaves are ground to a very fine powder that impresses with a soft and round feeling in the mouth. The tea has a pretty lovely umami and sweetness. What makes this Matcha is easy to drink. It does not have the taste of grass and has less and bitter taste than other Matcha. ",
        quantity: 1,
        type: "tea",
   },
     {
       id: 1,
       name: "Kenya",
       price:50,
       img_path: "Images/Coffees/1.png",
       description: "Tasting notes: Grapefruit, Date, Honey",
       quantity: 1,
       type: "coffee",
       longDescription: "This exclusive coffee originates from the Cerrado Mineiro region of Brazil. The wide range of flavors experienced with this Kenya coffee is the result of a great variety of cultivars, terroir (growth conditions) and processing methods. The coffee is grown 1099 meters above sea level. Kenya is a balanced and harmonious arabica coffee with a distinct structure that has flavor notes of apples, grapefruit, chocolate and honey.",
   },

   {
       id: 4,
       name: "Sweetheart Colombia",
       price:60,
       img_path: "Images/Coffees/4.png",
       description: "Tasting notes: Caramel, Apple, Chocolate",
       quantity: 1,
       type: "coffee",
       longDescription: "Caramel and coffee are an insanely good combination, where its strong taste of coffee is accompanied by the gentle and sweet taste of caramel. It gives you a delicious creamy cup of coffee. It's not because the taste of caramel is penetrating, but it just adds an extra dimension to the taste together with the taste of apple and chocolate.",
   },
   {
       id: 5,
       name: "Battlecheck coffee",
       price:75,
       img_path: "Images/Coffees/5.png",
       description: "Tasting notes: Caramel, Chocolate, Raisins",
       quantity: 1,
       type: "coffee",
       longDescription: "Another one of our great sweet coffees. Battlecheck coffee is a coffee with aromas of chocolate and raisins. The coffee has undertones of marzipan, plum and cane sugar. Great for a cold winter evening",
   },
   {
       id: 6,
       name: "Ethiopia",
       price:109,
       img_path: "Images/Coffees/6.png",
       description: "Tasting notes: Flora, Lemon Drop, Honey",
       quantity: 1,
       type: "coffee",
       longDescription: "This Ethiopian coffee is very special. The strong floral notes make it a quirk that is great to try. It is a cup that can admire guests and it fits super well, as filter coffee. You must buy this coffee if you want to try something special and fun, as well as want to see the coffee disappear quickly, for this Ethiopian coffee, it is hard not to want to brew again and again.",
   },
   {
       id: 7,
       name: "Ethiopia Agaro Family",
       price: 120,
       img_path: "Images/Coffees/7.png",
       description: "Tasting notes: Pear, Cardamom, Star anise",
       quantity: 1,
       type: "coffee",
       longDescription: "The coffee offers a slightly spicy aroma, with hints of cardamom and star anise. In the mouth, the spicy notes are complemented by a sweet pear taste as well as a rich acid, as when eating sun-ripened tomatoes. A really complex coffee that unites a full body with a strict elegance.",
   },
   {
       id: 8,
       name: "Brooklyn - Partners",
       price: 65,
       img_path: "Images/Coffees/8.png",
       description: "Tasting notes: Milk chocolate, Dried fruit",
       quantity: 1,
       type: "coffee",
       longDescription: "This coffee is characterized by being round and full-bodied with a good body. It has taste notes of almond, dried fruit and aftertaste of milk chocolate. This coffee is grown 1000-1200 meters above sea level and the processing method is natural, which gives body and a sweet character.",
   },
   {
    id: 20,
    name: "Fruit tea",
    price: 55,
    img_path: "Images/Teas/20.png",
    description: "Tasting notes: Vanilla, Orange, Honey.",
    quantity: 1,
    type: "tea",
    longDescription: "With this fruit tea, you get not just a fruity tea, but a tea where the interplay of ingredients goes in extremely good harmony. While orange juice, vanilla and honey add a fresh sweetness to the tea, small fine orange peels give the tea a refreshing taste.",
},
   {
       id: 9,
       name: "Blue Bottle Coffee",
       price: 70,
       img_path: "Images/Coffees/9.png",
       description: "Tasting notes: Rose, Elderflower, Lime",
       quantity: 1,
       type: "coffee",
       longDescription: "Our Elderflower Medium Roast coffee is a luxurious, naturally flavored, medium roast coffee with Elderflowers, Hibiscus Flower and Rose Hips that you can enjoy hot or cold! The coffee connoisseur in you will truly enjoy the Elderflower balanced flavor and aroma!",
   },
   {
       id: 10,
       name: "The Goodlife",
       price: 55,
       img_path: "Images/Coffees/10.png",
       description: "Tasting notes: Spicy red wine, Nutmeg",
       quantity: 1,
       type: "coffee",
       longDescription: "This coffee has a sweet and floral taste with notes of peach, nutmeg and a soft rounding of chocolate. Limu is recognized around the world as a gourmet coffee with a gentle red wine taste. The sweetness and lightness of the Limu bean makes the coffee perfect for being drunk all day long.",
   },

   {
    id: 2,
    name: "Colombia El Carmen",
    price:45,
    img_path: "Images/Coffees/2.png",
    description: "Tasting notes: Caramel, Chocolate, Red fruits",
    quantity: 1,
    type: "coffee",
    longDescription: "This is an exclusive blend of finely ground and medium roasted exquisite Arabica beans. The taste is nice round with a good balance between sweetness and acidity and flavor nuances like fruit and flowers mixed with chocolate, caramel and honey.",
   
},

   {
        id: 11,
        name: "Black tea",
        price: 35,
        img_path: "Images/Teas/11.png",
        description: "Tasting notes: Cacao, Chocolate, Honey, Vanilla",
        quantity: 1,
        type: "tea",
        longDescription: "Black tea from Ceylon and China with dark chocolate and cocoa bean peel. Slightly sweet, soft and creamy. Tastes great with a dash of milk and a little sugar for a more creamy and sweet experience that highlights the chocolate taste, but is also wonderful without.",
   },
   {
        id: 15,
        name: "Ginger tea",
        price: 125,
        img_path: "Images/Teas/15.png",
        description: "Tasting notes: Ginger, Chili, Peppermint",
        quantity: 1,
        type: "tea",
        longDescription: "If you like licorice, but would like a little more kick to the taste of peppermint, chili and ginger, then you should try our ginger tea. We developed it because more customers demanded a slightly stronger herbal tea with chili. And the demand shows that with this ginger tea we have hit what the customers want.",
   },
   {
        id: 16,
        name: "Rooibos tea",
        price: 35,
        img_path: "Images/Teas/16.png",
        description: "Tasting notes:  Pumpkin, Spices, Cinnamon",
        quantity: 1,
        type: "tea",
        longDescription: "Fantastic tasty black tea with a deep, warm taste of pumpkin and cinnamon. This wonderful tea will give you a nice warmth and direct your thoughts to a cozy winter day with indoor cosiness. This tea blend is made from black tea with added pumpkin seeds and cinnamon stick, which gives a very special and deep, warm taste - the combination of pumpkin and cinnamon is absolutely fantastic and tasty.",
   },
   {
        id: 17,
        name: "Mega Matcha tea",
        price: 65,
        img_path: "Images/Teas/17.png",
        description: "Tasting notes: Matcha, Vanilla, Apple, Pear",
        quantity: 1,
        type: "tea",
        longDescription: "Matcha tea is a traditional Japanese green tea. The tea is used at the special Japanese tea ceremony, where not only the intake but just as much the preparation of the tea is given great value. The tea is made from the leaves from the first harvest of the year - or 1st flush, as it is also called. By shielding the leaves from direct sunlight, a very concentrated content of chlorophyll is ensured, which gives the tea its characteristic jade green color.",
   },
   {
        id: 18,
        name: "Lemon & Honey tea",
        price: 80,
        img_path: "Images/Teas/18.png",
        description: "Tasting notes: Lemon, Honey, Orange",
        quantity: 1,
        type: "tea",
        longDescription: "Lemon & Honey is another tea in the line of our popular herbal teas. It is a pure organic herbal tea made from only the very best ingredients such as organic lemongrass, organic apple, organic licorice root, organic pineapple pieces, organic lemon peel, organic honey and organic strawberry pieces.",
   },
   {
        id: 19,
        name: "Earl Grey tea",
        price: 75,
        img_path: "Images/Teas/19.png",
        description: "Tasting notes: Bergamot, Citrus, Floral",
        quantity: 1,
        type: "tea",
        longDescription: "Everyone knows Earl Gray. Many people swear by the very special aroma taste that comes from the small citrus fruit, bergamot. Our Organic Earl Gray is a unique blend that we have created for you on black South Indian and Ceylon tea as well as bergamot. You get pleasant tea with the unmistakable aroma and taste of citrus.",
   }

   ]
   
