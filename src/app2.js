var ShoppingCart = (function($) {
    "use strict";
    var productsEl = document.querySelector(".products"),
        cartEl =     document.querySelector(".shopping-cart-list"),
        productQuantityEl = document.querySelector(".product-quantity"),
        emptyCartEl = document.querySelector(".empty-cart-btn"),
        cartCheckoutEl = document.querySelector(".cart-checkout"),
        totalPriceEl = document.querySelector(".total-price");
    
    // Fake JSON data array here should be API call
    var products = [
      {
        id: 0,
        name: "Pomegranate",
        description: " Pomegranate seeds are high in antioxidants, and clinical trials have found they may play an effective role in the prevention of heart disease and cancer. ",
        imageUrl: "https://upload.wikimedia.org/wikipedia/commons/5/5d/Pomegranate.jpg ",
        price: 1299
      },
      {
        id: 1,
        name: "Banana",
        description: "Perfect smoothie base the banana is.",
        imageUrl: "http://pngimg.com/uploads/banana/banana_PNG851.png",
        price: 300,
      },
      {
        id: 2,
        name: "Strawberries",
        description: "Pies, Jams, ice cream - the ever giving strawberry! plus its low in calories! Thats a win for me.",
        imageUrl: "http://pngimg.com/uploads/strawberry/strawberry_PNG2636.png",
        price: 250
      },
      {
        id: 3,
        name: "Cauliflower",
        description: " If there's a veg thats had a glow up over the past few years, its the perfect carb substitute",
        imageUrl: " http://pngimg.com/uploads/cauliflower/cauliflower_PNG12685.png ",
        price: 99
      },
      {
        id: 4,
        name: " Carrot ",
        description: "The versatile carrot. This pantry essential offered here.",
        imageUrl: "http://pngimg.com/uploads/carrot/carrot_PNG4994.png ",
        price: 50
      },
      {
        id: 5,
        name: "Mushrooms",
        description: " Yummy mushroooms for your roasts and stir frys.",
        imageUrl: "http://pngimg.com/uploads/mushroom/mushroom_PNG3221.png  ",
        price: 350
      }
    ],
        productsInCart = [];
    
    // Pretty much self explanatory function. NOTE: Here I have used template strings (ES6 Feature)
    var generateProductList = function() {
      products.forEach(function(item) {
        var productEl = document.createElement("div");
        productEl.className = "product";
        productEl.innerHTML = `<div class="product-image">
                                  <img src="${item.imageUrl}" alt="${item.name}">
                               </div>
                               <div class="product-name"><span>Product:</span> ${item.name}</div>
                               <div class="product-description"><span>Description:</span> ${item.description}</div>
                               <div class="product-price"><span>Price:</span> ${item.price} $</div>
                               <div class="product-add-to-cart">
                                 <a href="#0" class="button see-more">More Details</a>
                                 <a href="#0" class="button add-to-cart" data-id=${item.id}>Add to Cart</a>
                               </div>
                            </div>
  `;
                               
  productsEl.appendChild(productEl);
      });
    }
    
    // Like one before and I have also used ES6 template strings
    var generateCartList = function() {
      
      cartEl.innerHTML = "";
      
      productsInCart.forEach(function(item) {
        var li = document.createElement("li");
        li.innerHTML = `KES{item.quantity} KES{item.product.name} - KES{item.product.price * item.quantity}`;
        cartEl.appendChild(li);
      });
      
      productQuantityEl.innerHTML = productsInCart.length;
      
      generateCartButtons()
    }
    
    
    // Function that generates Empty Cart and Checkout buttons based on condition that checks if productsInCart array is empty
    var generateCartButtons = function() {
      if(productsInCart.length > 0) {
        emptyCartEl.style.display = "block";
        cartCheckoutEl.style.display = "block"
        totalPriceEl.innerHTML = "KES " + calculateTotalPrice();
      } else {
        emptyCartEl.style.display = "none";
        cartCheckoutEl.style.display = "none";
      }
    }
    
    // Setting up listeners for click event on all products and Empty Cart button as well
    var setupListeners = function() {
      productsEl.addEventListener("click", function(event) {
        var el = event.target;
        if(el.classList.contains("add-to-cart")) {
         var elId = el.dataset.id;
         addToCart(elId);
        }
      });
      
      emptyCartEl.addEventListener("click", function(event) {
        if(confirm("Are you sure?")) {
          productsInCart = [];
        }
        generateCartList();
      });
    }
    
    // Adds new items or updates existing one in productsInCart array
    var addToCart = function(id) {
      var obj = products[id];
      if(productsInCart.length === 0 || productFound(obj.id) === undefined) {
        productsInCart.push({product: obj, quantity: 1});
      } else {
        productsInCart.forEach(function(item) {
          if(item.product.id === obj.id) {
            item.quantity++;
          }
        });
      }
      generateCartList();
    }
    
    
    // This function checks if project is already in productsInCart array
    var productFound = function(productId) {
      return productsInCart.find(function(item) {
        return item.product.id === productId;
      });
    }
  
    var calculateTotalPrice = function() {
      return productsInCart.reduce(function(total, item) {
        return total + (item.product.price *  item.quantity);
      }, 0);
    }
    
    // This functon starts the whole application
    var init = function() {
      generateProductList();
      setupListeners();
    }
    
    // Exposes just init function to public, everything else is private
    return {
      init: init
    };
    
    // I have included jQuery although I haven't used it
  })(jQuery);
  
  ShoppingCart.init();