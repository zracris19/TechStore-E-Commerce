// ============================
// SHOPPING CART
// ============================

let cart = [];


// ============================
// ADD TO CART
// ============================

function addToCart() {

    cart.push("Product");

    updateCartCount();

    alert("Product berhasil ditambahkan ke cart!");
}


// ============================
// UPDATE CART COUNT
// ============================

function updateCartCount() {

    const cartCount = document.getElementById("cart-count");

    cartCount.textContent = cart.length;

}