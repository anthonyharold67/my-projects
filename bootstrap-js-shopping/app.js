const btn = document.querySelectorAll(".btn")
const market = document.querySelectorAll(".row")
const deneme = document.querySelector(".two")
const cardArea = document.querySelector(".card-area");
const products = document.querySelector(".products")

console.log(products);
console.log(cardArea);
console.log(btn);
console.log(market);
let repeatLess = []
deneme.style.display= "none"; // checkout gözükmüyor
cardArea.addEventListener("click", (e)=>{
    console.log(e.target);
    let cardImg =e.target.parentElement.parentElement.firstElementChild;
    let cardName =e.target.parentElement.firstElementChild.innerText;
    let cardPrice = e.target.parentElement.childNodes[3].innerHTML;
    
    let newArea = `<div class="product">
    <img src="${cardImg.src}" alt="">
    <div class="product-info">
        <h2>${cardName}</h2>
        <div class="product-price">
            <p><strong>${cardPrice}</strong> </p>
        </div>
        <div class="quantity-controller">
            <button>
                <i class="fas fa-minus"></i>
            </button>
            <p id="product-quantity">1</p> 
            <button>
                <i class="fas fa-plus"></i>
            </button>
        </div>
        <div class="product-removal">
            <button class="remove-product">
                Remove
            </button>
        </div>
        <div class="product-line-price">${cardPrice}</div>
   
    </div>
   </div>
    `
    const at = document.querySelectorAll(".product-info");
    // console.log(at);
    // if(!repeatLess.includes(newArea)) { //yoksa eklee demek
    //         repeatLess.push(newArea);
    //       }
    //      console.log(repeatLess);
    console.log(e.target.innerText);

    // products.innerHTML+=newArea
    if(e.target.innerText=="Sepete Ekle" && !repeatLess.includes(cardName)){
        repeatLess.push(cardName);
        products.innerHTML += newArea;
        calculateCartTotal();
       
    }else if(e.target.innerText=="Sepete Ekle" && repeatLess.includes(cardName)){
        
        for(let i=0;i<at.length;i++){
            if(at[i].firstElementChild.innerText==cardName){
                at[i].childNodes[5].childNodes[3].textContent++;
                calculateProductTotal(at[i].childNodes[5].childNodes[3]);
                calculateCartTotal();
                console.log("yine ben");
                break
            }
            
        };
    
        
    }
   
    console.log(at);
    // const at = document.querySelector(".at")
    // if(e.target.innerText=="Sepete Ekle" && at.innerText == cardName){
    //     console.log("merhaba");
    // }
  console.log(cardName);
  
// cardList += cardName+","
//   console.log(cardList);
//   if(!repeatLess.includes(cardName,)) { 
//     repeatLess.push(cardName);
//   }
//  console.log(repeatLess);
    
    
})



const myProducts = btn[0] //ürünler
const myCart = btn[1] // sepet
const myMarket = market[1] //ürün alanı

myCart.addEventListener("click",function(e){ // sepete basdığımda ürünler yok olucak alışveriş sepeti açılacak
    // calculateCartTotal();
    myMarket.style.display= "none";
    deneme.style.display= "inline";
    calculateCartTotal();
   

}
)
myProducts.addEventListener("click",function(e){ // ürünlere bastığımda sepet yok olacak ürünler çıkacak
    deneme.style.display= "none";
    myMarket.style.display= "flex";

}
)

const taxRate = 0.18;
const shippingPrice = 15.0;

window.addEventListener("load", ()=>{
    localStorage.setItem("taxRate", taxRate);
    localStorage.setItem("shippingPrice", shippingPrice);
    sessionStorage.setItem("taxRate", taxRate);
    sessionStorage.setItem("shippingPrice", shippingPrice);
    calculateCartTotal()
});

//capturing
let productsDiv = document.querySelector(".products");
productsDiv.addEventListener("click", (e)=>{
    let quantityP = e.target.parentElement.parentElement.querySelector("#product-quantity");
    // console.log(quantityP);
    // console.log(event.target);
    //minus buttons
    if (e.target.classList.contains("fa-minus") || e.target == quantityP.parentElement.firstElementChild) {
        if (quantityP.innerText > 1) {
            quantityP.innerText--;
            //calculate Product and Cart Total
            calculateProductTotal(quantityP);
        }
        else{
            if(confirm("Product will be removed!")){
                quantityP.parentElement.parentElement.parentElement.remove();
                //calculateCartTotal
                calculateCartTotal();
                console.log(calculateCartTotal);
            }
        }
        // console.log("minusBtn clicked");
    }

    //plus buttons
    else if(e.target.className == "fas fa-plus" || e.target == quantityP.parentElement.lastElementChild){
        quantityP.innerText++;
         //calculate Product and Cart Total
         calculateProductTotal(quantityP);

        // console.log("plusBtn clicked");
    }

    //remove buttons
    else if(e.target.className == "remove-product"){
        if (confirm("Product will be removed")) {
            quantityP.parentElement.parentElement.parentElement.remove();
            calculateCartTotal()
        }
        //calculateCartTotal

        // e.target.parentElement.parentElement.parentElement.remove();
        // console.log("removeBtn clicked");

    }
    //others
    else{
        console.log("other elements clicked");
    }
})

const calculateProductTotal = (quantityP) =>{
    console.log(quantityP.innerText);
    let productPrice = quantityP.parentElement.parentElement.querySelector("strong");
    let productTotalPriceDiv = quantityP.parentElement.parentElement.querySelector(".product-line-price");

    productTotalPriceDiv.innerText = (quantityP.innerText * productPrice.innerText).toFixed(2);

    calculateCartTotal();
}

const calculateCartTotal = () =>{

    let productTotalPriceDivs = document.querySelectorAll(".product-line-price");
    // console.log(productTotalPriceDivs);
    let subtotal = 0;
    productTotalPriceDivs.forEach(eachProductTotalPriceDiv=>{
        subtotal += parseFloat(eachProductTotalPriceDiv.innerText)
    });
    console.log(subtotal);
    let taxPrice = subtotal * localStorage.getItem("taxRate");
    console.log(taxPrice);
    let shipping = (subtotal > 0 ? parseFloat(localStorage.getItem("shippingPrice")) :0);
    console.log(shipping);
    let cartTotal = subtotal + taxPrice + shipping;
    console.log(cartTotal);

    document.querySelector("#cart-subtotal p:nth-child(2)").innerText = subtotal.toFixed(2);
    document.querySelector("#cart-tax p:nth-child(2)").innerText = taxPrice.toFixed(2);
    document.querySelector("#cart-shipping p:nth-child(2)").innerText = shipping.toFixed(2);
    document.querySelector("#cart-total").lastElementChild.innerText = cartTotal.toFixed(2);

}