
//Selects all the buy buttons
let cards = document.querySelectorAll('.buy-btn');

//The different products that is available
let products = [
    {
        name: 'Julgran',
        tag: 'julgran',
        price: 150,
        inCart: 0
    },
    {
        name: 'Julstjärna',
        tag: 'julstjärna',
        price: 50,
        inCart: 0
    },
    {
        name: 'Julkrans',
        tag: 'Julkrans',
        price: 99,
        inCart: 0
    },
    {
        name: 'Juldekoration',
        tag: 'Juldekoration',
        price: 100,
        inCart: 0
    }
];


//Loop to count how many items there is and adding the event for clicking the buttons
for (let i=0; i < cards.length; i++) {
    cards[i].addEventListener('click', () => {
        cartNumbers(products[i]);
        totalCost(products[i])
    })
};

//To make sure the number by the cart stays after refreshing the page
function onLoadCartNumbers() {
    let productNumbers = localStorage.getItem('cartNumbers');

    if( productNumbers ) {
        document.querySelector('.cart span').textContent = productNumbers;
    }
    
};

//The function that's retrieving/storing data 
function cartNumbers(product) {
   
    //Counts how many items is stored
    let productNumbers = localStorage.getItem('cartNumbers');

    //Transforms the data into numbers
    productNumbers = parseInt(productNumbers);

     /*Stores the data on the webpage (prevents it from disappearing when people refresh the page so the data stays in the cart), but also checks if there is data allready stored. Updates the number with the list-item named "cart" in the header
    */

    if( productNumbers ) {
        localStorage.setItem('cartNumbers', productNumbers + 1);
        document.querySelector('.cart span').textContent = productNumbers + 1;
    } else {
        localStorage.setItem('cartNumbers', 1);
        document.querySelector('.cart span').textContent = 1;
    }
    
    setItems(product);
}

function setItems(product) {
    let cartItems = localStorage.getItem('productsInCart');
    cartItems = JSON.parse(cartItems)

    if(cartItems != null) {
        if(cartItems[product.tag] == undefined) {
            cartItems = {
                ...cartItems,
                [product.tag]: product
            }
        }
        cartItems[product.tag].inCart += 1;
    } else {
        product.inCart = 1;
        cartItems = {
            [product.tag]: product
        }
    }
    
    localStorage.setItem("productsInCart", JSON.stringify (cartItems));
    }

function totalCost(product) {
    
    let cartCost = localStorage.getItem('totalCost');
    

    if(cartCost != null) {
        cartCost = parseInt(cartCost);
        localStorage.setItem('totalCost', cartCost + product.price);
    } else {
        localStorage.setItem('totalCost', product.price);
    }   

}

//Pushandet och visandet av produkterna på varukorgssidan

function displayCart() {
    let cartItems = localStorage.getItem("productsInCart");
    cartItems = JSON.parse(cartItems);
    let productContainer = document.querySelector(".products");

    if( cartItems && productContainer ) {
        productContainer.innerHTML = '';
        Object.values(cartItems).map(item => {
            productContainer.innerHTML += `
            <div class="product">
                
                <img src=./bilder/${item.tag}.jpg">
                <span>${item.name}</span>
            </div>
            <div class="price">${item.price}</div>
            <div class="quantity">
                <span>${item.inCart}</span>
            </div>
            <div class="total">
                $${item.inCart * item.price}SEK
            </div>
            `
        });

        productContainer.innerHTML += `
            <div class="totalContainer">
                <h4 class="totalTitle">
                    Antal artiklar totalt
                </h4>
                <h4 class="total">

                </h4>
        `
    }
}

//Running the function
onLoadCartNumbers();
displayCart();