const getProductDetails = () => {
    const productName = document.getElementById('product-name').value;
    const porductPrice = document.getElementById('product-price').value;
     
    // validation 
    if(!productName && !porductPrice){
        return;
    }else if(isNaN(porductPrice)){
        return;
    }
    
    //display products
    displayProducts(productName, porductPrice);

    //set local storage
    addProductCart(productName, porductPrice);

    //clear input field
    document.getElementById('product-name').value = '';
    document.getElementById('product-price').value = '';
}

//local storage data display
const displayLocalStorageData = () => {
    const cart = getCart();
    console.log(cart);

    for(const product in cart){
        console.log(product);
        // console.log(Object.keys(product), Object.values(product));
        displayProducts(product, cart[product]);
    }
}

//display products
const displayProducts = (productName, productPrice) => {
    const ul = document.getElementById('products');
    const li = document.createElement('li');
    li.innerText = productName + ' - ' + productPrice;
    ul.appendChild(li);
}

//check cart
const getCart = () => {
    const cart = localStorage.getItem('cart');
    let cartObj;
    if(cart){
        cartObj = JSON.parse(cart);
    }else{
        cartObj = {};
    }
    return cartObj;
}

//add product to cart
const addProductCart = (productName, productPrice) => {
    const cart = getCart();

    cart[productName] = productPrice;  

    const cartStringify = JSON.stringify(cart);
    localStorage.setItem('cart', cartStringify);
}

displayLocalStorageData();