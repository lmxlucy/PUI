window.onload = function() {
    displayCartLogo();
    displayCart();
}

function displayCart() {
    let cart = JSON.parse(localStorage.getItem("cart")) || [];
    let overallPrice = 0;

    if (cart.length) {
        Object.values(cart).map((element, index) => {
            let cartRow = document.createElement('div');
            cartRow.classList.add('cart-row');
            let cartRowContents = `
                <div class="cart-image cart-column">
                    <img src="${element.image}">
                </div>
                <div class="cart-options cart-column">
                    <h2>${element.flavor} Cinnamon Roll</h2><br><br>
                    <div class="select-wrapper">
                        <select name="glazing" id="glazing" class="glazing">
                            <option value="no">Glazing: None</option>
                            <option value="sugar-milk">Glazing: Sugar-milk</option>
                            <option value="vanilla-milk">Glazing: Vanilla-milk</option>
                            <option value="double-chocolate">Glazing: Double-chocolate</option>
                        </select>
                    </div><br>
                    <div class="select-wrapper">
                        <select name="quantity" id="quantity" class="quantity">
                            <option value="1">Quantity: 1</option>
                            <option value="3">Quantity: 3</option>
                            <option value="6">Quantity: 6</option>
                            <option value="12">Quantity: 12</option>
                        </select>
                    </div><br>
                    <button class="remove" type="button">Remove</button>
                </div>
                <h2 class="cart-price cart-column">
                    $${element.price}
                </h2>`;
            cartRow.innerHTML = cartRowContents;
            cartRow.getElementsByClassName("glazing")[0].selectedIndex = element.glazing;
            cartRow.getElementsByClassName("quantity")[0].selectedIndex = element.quantity;
            cartRow.getElementsByClassName('remove')[0].addEventListener('click', function() { removeCartItem(index); });
            cartRow.getElementsByClassName('quantity')[0].addEventListener('change', function() { updateCartItem(index); });
            cartRow.getElementsByClassName('glazing')[0].addEventListener('change', function() { updateCartItem(index); });
            document.getElementsByClassName("cart-items")[0].appendChild(cartRow)
            overallPrice += parseFloat(element.price);
        });
        document.getElementsByClassName('cart-total-price')[0].innerText = '$' + overallPrice.toFixed(2);
    }
}

function updateCartItem(index) {
    let cart = JSON.parse(localStorage.getItem("cart"));
    var element = cart[index];
    element.quantity = document.getElementsByClassName("quantity")[index].selectedIndex;
    element.glazing = document.getElementsByClassName("glazing")[index].selectedIndex;
    if (element.quantity == 0) {
        element.price = 3.49;
    } else if (element.quantity == 1) {
        element.price = 3.49 * 3;
    } else if (element.quantity == 2) {
        element.price = 3.49 * 6;
    } else {
        element.price = 3.49 * 12;
    }
    cart.splice(index, 1, element);
    localStorage.setItem("cart", JSON.stringify(cart));
    location.reload();
}

function removeCartItem(index) {
    let cart = JSON.parse(localStorage.getItem("cart"));
    cart.splice(index, 1);
    localStorage.setItem("cart", JSON.stringify(cart));
    location.reload();
}

function displayCartLogo() {
    let cart_items = JSON.parse(localStorage.getItem("cart")).length;
    document.getElementsByClassName("cart-logo-number")[0].innerText = cart_items;
}

function showFlavorChange() {
    let selected_flavor = document.getElementById("flavor").value;
    document.getElementById("flavor_chosen").innerText = selected_flavor;
    document.getElementById("product_image").src = "image/" + selected_flavor + ".png";
}

function showGlazingChange() {
    let selected_glazing = document.getElementById("glazing").value;
    document.getElementById("glazing_chosen").innerText = selected_glazing;
}

function showQuantityChange() {
    let selected_quantity = document.getElementById("quantity").value;
    document.getElementById("total-price").innerText = 3.49 * selected_quantity;
}

function addToCart() {
    //confirmation message
    let selected_flavor = document.getElementById("flavor").value;
    let selected_glazing = document.getElementById("glazing").value;
    let selected_quantity = document.getElementById("quantity").value;
    document.getElementById("message").innerText = `${selected_quantity} ${selected_flavor} cinnamon roll with ${selected_glazing} glazing is added to cart.`;

    //add to shopping cart
    let selected_glazing_index = document.getElementById("glazing").selectedIndex;
    let selected_quantity_index = document.getElementById("quantity").selectedIndex;
    let image = document.getElementById("product_image").src;
    let price = document.getElementById("total-price").innerText;
    let cart = JSON.parse(localStorage.getItem("cart")) || [];
    let newItem = { flavor: selected_flavor, glazing: selected_glazing_index, quantity: selected_quantity_index, image: image, price: price };
    cart.push(newItem);
    localStorage.setItem("cart", JSON.stringify(cart));

    //update cart logo
    displayCartLogo();
}