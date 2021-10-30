function showFlavorChange() {
    var selected_flavor = document.getElementById("flavor").value;
    document.getElementById("flavor_chosen").innerText = selected_flavor;
    document.getElementById("product_image").src = "image/" + selected_flavor + ".png"
}

function showGlazingChange() {
    var selected_glazing = document.getElementById("glazing").value;
    document.getElementById("glazing_chosen").innerText = selected_glazing;
}

function showQuantityChange() {
    var selected_quantity = document.getElementById("quantity").value;
    document.getElementById("total-price").innerText = 3.49 * selected_quantity
}

function addToCart() {
    //confirmation message
    var selected_flavor = document.getElementById("flavor").value;
    var selected_glazing = document.getElementById("glazing").value;
    var selected_quantity = document.getElementById("quantity").value;
    document.getElementById("message").innerText = `${selected_quantity} ${selected_flavor} cinnamon roll with ${selected_glazing} glazing is added to cart.`

    //add to shopping cart
    var selected_glazing_index = document.getElementById("glazing").selectedIndex;
    var selected_quantity_index = document.getElementById("quantity").selectedIndex;
    var image = document.getElementById("product_image").src
    var price = document.getElementById("total-price").innerText;
    addItemToCart(selected_flavor, selected_glazing_index, selected_quantity_index, image, price)
    updateCartTotal()

    //cart logo
    updateCartLogo()
}

function updateCartLogo() {
    var cart_items = document.getElementsByClassName("cart-row").length
    document.getElementById("cart-logo-number").innerText = cart_items
}

function removeCartItem(event) {
    var buttonClicked = event.target
    buttonClicked.parentElement.parentElement.remove()
    updateCartTotal()
    updateCartLogo()
}

function addItemToCart(selected_flavor, selected_glazing_index, selected_quantity_index, image, price) {
    var cartRow = document.createElement('div')
    cartRow.classList.add('cart-row')
    var cartRowContents = `
        <div class="cart-image cart-column">
            <img src="${image}">
        </div>
        <div class="cart-options cart-column">
            <h2>${selected_flavor} Cinnamon Roll</h2><br><br>
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
            <button class="hyperlink" type="button">Remove</button>
        </div>
        <h2 class="cart-price cart-column">
            $${price}
        </h2>`
    cartRow.innerHTML = cartRowContents
    cartRow.getElementsByClassName("glazing")[0].selectedIndex = selected_glazing_index
    cartRow.getElementsByClassName("quantity")[0].selectedIndex = selected_quantity_index
    cartRow.getElementsByClassName('hyperlink')[0].addEventListener('click', removeCartItem)
    cartRow.getElementsByClassName('quantity')[0].addEventListener('change', updateCartPrice)
    cartItems = document.getElementsByClassName("cart-items")[0]
    cartItems.append(cartRow)
}

function updateCartTotal() {
    var cartItemContainer = document.getElementsByClassName('cart-items')[0]
    var cartRows = cartItemContainer.getElementsByClassName('cart-row')
    var total = 0
    for (var i = 0; i < cartRows.length; i++) {
        var cartRow = cartRows[i]
        var priceElement = cartRow.getElementsByClassName('cart-price')[0]
        var price = parseFloat(priceElement.innerText.replace('$', ''))
        console.log(price)
        console.log(quantity)
        total = total + price
    }
    document.getElementsByClassName('cart-total-price')[0].innerText = '$' + total
}

function updateCartPrice(event) {
    var input = event.target
    var cartRow = input.parentElement.parentElement.parentElement
    var newQuantity = cartRow.getElementsByClassName('quantity')[0].value
    var newPrice = 3.49 * newQuantity
    cartRow.getElementsByClassName('cart-price')[0].innerText = '$' + newPrice
    updateCartTotal()
}

function openShoppingCart() {
    document.getElementById("overlay").style.display = "block";
}

function closeShoppingCart() {
    document.getElementById("overlay").style.display = "none";
}