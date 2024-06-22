// import elements from dom
const productContainer = document.querySelector('.productContainer');
const total = document.querySelector('.total');
const search = document.querySelector('.search');

// get products from local storage
let cart = JSON.parse(localStorage.getItem('cart')) || [];

const fragment = document.createDocumentFragment();
let totalPrice = 0;

//render products
function renderProducts(cart, index){
    //create divs and rows
    const div = document.createElement('div');
    const rowA = document.createElement('div');
    const rowB = document.createElement('div');
    const rowC = document.createElement('div');

    div.classList.add('conStyleOne');
    rowA.classList.add('rowA');
    rowB.classList.add('rowB');
    rowC.classList.add('rowC');

    //product title and price
    const title = document.createElement('h2');
    title.classList.add('titlePrev');
    title.innerHTML = `${cart.amount}` + " x " + `${cart.title}`;

    const price = document.createElement('h2');
    price.classList.add('pricePrev');
    price.textContent = `$${cart.price}`;

    rowA.appendChild(title);
    rowA.appendChild(price);

    //product description
    const description = document.createElement('p');
    description.classList.add('productDescPrev', 'textAreaStyleOne');
    description.textContent = cart.description;

    rowB.appendChild(description);

    //product category and brand
    const category = document.createElement('h4');
    category.classList.add('categoryPrev', 'labelCard');
    category.textContent = cart.category;

    const brand = document.createElement('h4');
    brand.classList.add('brandPrev', 'labelCard');
    brand.textContent = cart.brand;

    const plusIcon = document.createElement('i');
    plusIcon.classList.add('ph', 'ph-plus', 'plus', 'labelCard');
    const minusIcon = document.createElement('i');
    minusIcon.classList.add('ph', 'ph-minus', 'minus', 'labelCard');

    plusIcon.addEventListener('click', () => {plus(index);});
    minusIcon.addEventListener('click', () => {minus(index);});
    Text = document.createElement('p');
    Text.innerHTML = 'Amount';

    //append elements 
    rowC.appendChild(category);
    rowC.appendChild(brand);
    rowC.appendChild(plusIcon);
    rowC.appendChild(Text);
    rowC.appendChild(minusIcon);

    div.appendChild(rowA);
    div.appendChild(rowB);
    div.appendChild(rowC);

    fragment.appendChild(div);
    productContainer.appendChild(fragment);


    //total price
    totalCal();
}

//plus function
function plus(index){
    cart[index].amount++;
    localStorage.setItem('cart', JSON.stringify(cart));
    window.location.reload();
}
function minus(index){
    if(cart[index].amount > 1){
        cart[index].amount--;
        localStorage.setItem('cart', JSON.stringify(cart));
        window.location.reload();
    }else{
        cart.splice(index, 1);
        window.location.reload();
    }
    localStorage.setItem('cart', JSON.stringify(cart));
}

//render products calling the function
cart.forEach((product, index) => {
    renderProducts(product, index);
});


//total price function
function totalCal(price, amount){
    for (let i = 0; i < cart.length; i++) {
        totalPrice += cart[i].price * cart[i].amount;
    }
    total.textContent = `Total  $${totalPrice}`;
}

function redirect() {
    window.location.href = "shop.html";
}

//search function by name or index and render the product
search.addEventListener('keyup', () => {
    if(search.value === ''){
        window.location.reload();
    }
    productContainer.innerHTML = '';
    const searchValue = search.value.toLowerCase();
    const searchResult = cart.filter(product => product.title.toLowerCase().includes(searchValue) || product.index == searchValue);
    searchResult.forEach((product, index) => {
        renderProducts(product, index);
    });
});
