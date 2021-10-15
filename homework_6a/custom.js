function showFlavorChange() {
    var selected_flavor = document.getElementById("flavor").value;
    document.getElementById("flavor_chosen").innerText = selected_flavor;
    document.getElementById("product_image").src = "image/" + selected_flavor + ".png"
}

function showGlazingChange() {
    var selected_glazing = document.getElementById("glazing").value;
    document.getElementById("glazing_chosen").innerText = selected_glazing;
}