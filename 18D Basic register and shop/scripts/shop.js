// import elements from dom
const productContainer = document.querySelector('.productContainer');

// get products from local storage
let products = JSON.parse(localStorage.getItem('products')) || [];

const fragment = document.createDocumentFragment();

//render products
products.forEach((product, index) => {
    const div = document.createElement('div');
    const rowA = document.createElement('div');
    const rowB = document.createElement('div');
    const rowC = document.createElement('div');

    //create divs and rows
    div.classList.add('conStyleOne');
    rowA.classList.add('rowA');
    rowB.classList.add('rowB');
    rowC.classList.add('rowC');
    //product title
    const title = document.createElement('h2');
    title.classList.add('titlePrev');
    title.textContent = product.title;
    //product price
    const price = document.createElement('h2');
    price.classList.add('pricePrev');
    price.textContent = `$${product.price}`;

    rowA.appendChild(title);
    rowA.appendChild(price);
    //product description
    const description = document.createElement('p');
    description.classList.add('productDescPrev', 'textAreaStyleOne');
    description.textContent = product.description;

    rowB.appendChild(description);

    //product category and brand
    const category = document.createElement('h4');
    category.classList.add('categoryPrev', 'labelCard');
    category.textContent = product.category;

    const brand = document.createElement('h4');
    brand.classList.add('brandPrev', 'labelCard');
    brand.textContent = product.brand;

    //add to cart feature
    const addIcon = document.createElement('i');
    addIcon.classList.add('ph', 'ph-shopping-cart', 'addIcon', 'labelCard');
    addIcon.addEventListener('click', () => {
        addToCart(index);
    });
    const text = document.createElement('p');
    text.innerHTML = 'Add to cart';
    addIcon.appendChild(text);

    //append elements
    rowC.appendChild(category);
    rowC.appendChild(addIcon);
    rowC.appendChild(brand);

    div.appendChild(rowA);
    div.appendChild(rowB);
    div.appendChild(rowC);

    fragment.appendChild(div);
    productContainer.appendChild(fragment);
});

//add to cart function
function addToCart(index) {
    cart = JSON.parse(localStorage.getItem('cart')) || [];
    products = JSON.parse(localStorage.getItem('products')) || [];
    if(cart[index] !== products[index]){
        cart.push(products[index]);
        localStorage.setItem('cart', JSON.stringify(cart));
        alert('Product added to cart');
    }
    else{
        alert('Product already in cart');
    }
}

//redirections
function redirect() {
    window.location.href = "add_product.html";
}
function redirect2() {
    window.location.href = "cart.html";
}