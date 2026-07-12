document.getElementById("shopName").textContent = SHOP.name;

document.getElementById("productName").textContent = SHOP.product.name;

document.getElementById("price").textContent =
SHOP.product.price + " Birr";

document.getElementById("description").textContent =
SHOP.product.description;

document.getElementById("productImage").src =
SHOP.product.image;

function orderNow() {

    const color =
    document.getElementById("color").value;

    const city =
    document.getElementById("city").value;

    const message =
`🛍 New Order

Product: ${SHOP.product.name}

Price: ${SHOP.product.price} Birr

Color: ${color}

City: ${city}`;

    const url =
`https://t.me/${SHOP.telegram}?text=${encodeURIComponent(message)}`;

    window.open(url,"_blank");

}
