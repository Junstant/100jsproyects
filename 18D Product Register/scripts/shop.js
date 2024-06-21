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

    div.classList.add('conStyleOne');
    rowA.classList.add('rowA');
    rowB.classList.add('rowB');
    rowC.classList.add('rowC');

    const title = document.createElement('h2');
    title.classList.add('titlePrev');
    title.textContent = product.title;

    const price = document.createElement('h2');
    price.classList.add('pricePrev');
    price.textContent = product.price;

    rowA.appendChild(title);
    rowA.appendChild(price);

    const description = document.createElement('p');
    description.classList.add('productDescPrev', 'textAreaStyleOne');
    description.textContent = product.description;

    rowB.appendChild(description);

    const category = document.createElement('h4');
    category.classList.add('categoryPrev', 'labelCard');
    category.textContent = product.category;

    const brand = document.createElement('h4');
    brand.classList.add('brandPrev', 'labelCard');
    brand.textContent = product.brand;

    rowC.appendChild(category);
    rowC.appendChild(brand);

    div.appendChild(rowA);
    div.appendChild(rowB);
    div.appendChild(rowC);

    fragment.appendChild(div);
    productContainer.appendChild(fragment);
});


function redirect() {
    window.location.href = "add_product.html";
}