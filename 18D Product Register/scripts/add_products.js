// import eleemnts from DOM
const productName = document.querySelector('.productName');
const productPrice = document.querySelector('.productPrice');
const productBrand = document.querySelector('.productBrand');
const productCategory = document.querySelector('.productCategory');
const productDescription = document.querySelector('.productDescription');
const addButton = document.querySelector('.addProduct');
const titlePrev = document.querySelector('.titlePrev');
const pricePrev = document.querySelector('.pricePrev');
const categoryPrev = document.querySelector('.categoryPrev');
const productDescPrev = document.querySelector('.productDescPrev');
const brandPrev = document.querySelector('.brandPrev');

//avaliable categories
const categories = [];
for (let i = 0; i < productCategory.options.length; i++) {
    categories.push(productCategory.options[i].value);
}

// validations
const validateMinLength = (value, minLength) => value && isNaN(value) && value.length >= minLength;
const titleValidation = (value) => validateMinLength(value, 4);
const priceValidation = (value) => value && !isNaN(value);
const brandValidation = (value) => validateMinLength(value, 2);
const categoryValidation = (value) => categories.includes(value);
const descriptionValidation = (value) => validateMinLength(value, 10);

//Error messages
const errorMsg = {
    title: 'Title must be at least 4 characters',
    price: 'Price must be a number',
    brand: 'Brand must be at least 2 characters',
    category: 'Please select a category',
    description: 'Description must be at least 10 characters'
}
// add product function
function addProduct() {
    const product = {
        title: productName.value,
        price: productPrice.value,
        brand: productBrand.value,
        category: productCategory.value,
        description: productDescription.value
    }
    // check validations
    if (!titleValidation(product.title)) {
        alert(errorMsg.title);
        return;
    }
    if (!priceValidation(product.price)) {
        alert(errorMsg.price);
        return;
    }
    if (!brandValidation(product.brand)) {
        alert(errorMsg.brand);
        return;
    }
    if (!categoryValidation(product.category)) {
        alert(errorMsg.category);
        return;
    }
    if (!descriptionValidation(product.description)) {
        alert(errorMsg.description);
        return;
    }
    // add product to local storage
    let products = JSON.parse(localStorage.getItem('products')) || [];
    products.push(product);
    localStorage.setItem('products', JSON.stringify(products));
    alert('Product added successfully');
}

// add event listener
addButton.addEventListener('click', addProduct);

productName.addEventListener('keyup', () => {titlePrev.textContent = productName.value;});
productPrice.addEventListener('keyup', () => {pricePrev.textContent = `$` +`${productPrice.value}`;});
productBrand.addEventListener('keyup', () => {brandPrev.textContent = productBrand.value;});
productCategory.addEventListener('change', () => {categoryPrev.textContent = productCategory.value;});
productDescription.addEventListener('keyup', () => {productDescPrev.textContent = productDescription.value;});

function redirect() {
    window.location.href = "shop.html";
}