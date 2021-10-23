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
    if (selected_quantity == '1') {
        document.getElementById("total-price").innerText = '5.00'
    } else if (selected_quantity == '3') {
        document.getElementById("total-price").innerText = '13.00'
    } else if (selected_quantity == '6') {
        document.getElementById("total-price").innerText = '25.00'
    } else if (selected_quantity == '12') {
        document.getElementById("total-price").innerText = '46.00'
    }
}

function addToCart() {
    var selected_flavor = document.getElementById("flavor").value;
    var selected_glazing = document.getElementById("glazing").value;
    var selected_quantity = document.getElementById("quantity").value;
    document.getElementById("message").innerText = `${selected_quantity} ${selected_flavor} cinnamon roll with ${selected_glazing} glazing is added to cart.`
    var cart_items = parseFloat(document.getElementById("cart-logo-number").innerText)
    document.getElementById("cart-logo-number").innerText = cart_items + 1
}