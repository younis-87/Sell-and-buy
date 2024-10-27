let products = [];

document.getElementById('addProduct').addEventListener('click', function() {

    const productName = prompt("أدخل اسم المنتج:");

    const productPrice = prompt("أدخل سعر المنتج:");

    const contactNumber = prompt("أدخل رقم التواصل:");

    const productImage = prompt("أدخل رابط صورة المنتج:");

    if (productName && !isNaN(productPrice) && productPrice > 0 && contactNumber && productImage) {

        products.push({ name: productName, price: parseFloat(productPrice), contact: contactNumber, image: productImage });

        alert(`تم إضافة المنتج: ${productName} بسعر: ${productPrice} درهم`);

        displayAddedProducts();

    } else {

        alert("يرجى إدخال بيانات صحيحة.");

    }

});

document.getElementById('buyProduct').addEventListener('click', function() {

    const productList = document.getElementById('productList');

    productList.innerHTML = ''; // تفريغ المحتوى السابق

    if (products.length === 0) {

        productList.innerHTML = '<p>لا توجد منتجات متاحة للشراء.</p>';

        productList.classList.remove('hidden');

        return;

    }

    

    products.forEach((product, index) => {

        const productDiv = document.createElement('div');

        productDiv.className = 'product-item';

        productDiv.innerHTML = `

            <p>${product.name} - سعر: ${product.price} درهم</p>

            <input type="number" min="1" id="quantity${index}" placeholder="الكمية" />

            <button onclick="buyProduct(${index})">شراء</button>

        `;

        productList.appendChild(productDiv);

    });

    productList.classList.remove('hidden');

});

function buyProduct(index) {

    const quantity = document.getElementById(`quantity${index}`).value;

    if (quantity > 0) {

        const product = products[index];

        const totalPrice = product.price * quantity;

        alert(`تم شراء ${quantity} من المنتج: ${product.name} بسعر إجمالي: ${totalPrice} درهم`);

    } else {

        alert('يرجى إدخال كمية صحيحة.');

    }

}

function displayAddedProducts() {

    const addedProductsDiv = document.getElementById('addedProducts');

    addedProductsDiv.innerHTML = ''; // تفريغ المحتوى السابق

    if (products.length === 0) {

        addedProductsDiv.innerHTML = '<p>لا توجد منتجات مضافة بعد.</p>';

        return;

    }

    products.forEach(product => {

        const productDiv = document.createElement('div');

        productDiv.className = 'product-item';

        productDiv.innerHTML = `

            <p>${product.name} - سعر: ${product.price} درهم</p>

            <p>رقم التواصل: ${product.contact}</p>

            <img src="${product.image}" alt="${product.name}" style="width: 100px; height: auto;" />

            <button onclick="contactSeller('${product.contact}')">تواصل مع البائع</button>

        `;

        addedProductsDiv.appendChild(productDiv);

    });

}

function contactSeller(contact) {

    alert(`يمكنك التواصل مع البائع على الرقم: ${contact}`);

}