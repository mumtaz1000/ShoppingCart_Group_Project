let carts = document.querySelectorAll(".buy-btn");

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
                tag: 'julkrans',
                price: 99,
                inCart: 0
            },
            {
                name: 'Juldekoration',
                tag: 'juldekoration',
                price: 100,
                inCart: 0
            },
            {
                name:'Julkulor',
                tag:'julkulor',
                price:120,
                inCart:0
            },
            {
                name:'Julsnore',
                tag:'julsnore',
                price:60,
                inCart:0
            },
            {
                name:'JuldekorationBox',
                tag:'juldekorationbox',
                price:70,
                inCart:0
            },
            {
                name:'Teddybear',
                tag:'teddybear',
                price:120,
                inCart:0
            }
        ];

for(let i=0; i<carts.length; i++)
{
    carts[i].addEventListener('click',()=>{
        cartNumbers(products[i]);
        totalCost(products[i])
    }
    )
}

function onLoadCartNumbers(){
    let productNumbers = localStorage.getItem("cartNumbers");

    if(productNumbers){
document.querySelector(".cart span").textContent = productNumbers;
    }
}

function cartNumbers(product){
    //console.log("The product clicked is", product)
    let productNumbers = localStorage.getItem("cartNumbers") ;
    productNumbers = parseInt(productNumbers);
    if( productNumbers ){
        localStorage.setItem("cartNumbers", productNumbers+1);
        document.querySelector(".cart span").textContent =  productNumbers+1;
    }
    else{
        localStorage.setItem("cartNumbers",1);
        document.querySelector(".cart span").textContent = 1;
    } 
    setItems(product);
}
function setItems(product){
let cartItems = localStorage.getItem("productsInCart");
cartItems = JSON.parse(cartItems);

if(cartItems != null){
    if(cartItems[product.tag] == undefined){
        cartItems = {
            ...cartItems,
            [product.tag]:product
        }
    }
cartItems[product.tag].inCart += 1;
}
else{
    product.inCart = 1;
cartItems = {
    [product.tag]:product
}
}


localStorage.setItem("productsInCart", JSON.stringify(cartItems));
}
function totalCost(product){
    let cartCost = localStorage.getItem("totalCost");
   // 
    if(cartCost != null){
        cartCost = parseInt(cartCost);
        localStorage.setItem("totalCost",cartCost + product.price);
    }
    else{
        localStorage.setItem("totalCost",product.price)
    }
}
function displayCart(){
    let cartItems = localStorage.getItem("productsInCart");
    cartItems = JSON.parse(cartItems);
    
    let productContainer = document.querySelector(".products");
    let cartCost = localStorage.getItem("totalCost");
    if(cartItems && productContainer){
        productContainer.innerHTML = '';
        
        
        Object.values(cartItems).map((value)=>{
            productContainer.innerHTML += `
            <div style="margin:10px;">
            <img src="Bilder/${value.tag}.jpg" 
            style="height:100px">
            <div style="margin:auto;">
            <p><h5>Produkt: </h5>
            ${value.name}<br>
            <h5>Pris: </h5>
            ${value.price}.00 sek<br>
            <h5>Antal: </h5>
            ${value.inCart}<br>
            <h5>Total: </h5>
            ${value.inCart * value.price}.00 sek</p>
            </div></div>
            `
        })
        productContainer.innerHTML += `
        <div class="basketTotalContainer">
        <h4 class="basketTotalTitle">
        Att betala: 
        </h4>
        <h4 class="basketTotal">
        ${cartCost}.00 sek
        </h4> `

    }
    
}

function subItem(value)
{
    value -= 1;
    //localStorage.setItem("productsInCart");
    console.log("The value is ", value);
    console.log("Key is",keys);

}

function addItem(){
            console.log("Add item function");
                }

onLoadCartNumbers();
displayCart();
