let carrito = [];

function agregarAlCarrito(nombre, precio) {
    let producto = {
        nombre: nombre,
        precio: precio,
    };

    carrito.push(producto);
    actualizarCarrito();
}

function actualizarCarrito() {
    let listaCarrito = document.getElementById("lista-carrito");
    let totalCarrito = document.getElementById("total-carrito");

    listaCarrito.innerHTML = "";

    let total = 0;
    for (let i = 0; i < carrito.length; i++) {
        let producto = carrito[i];
        total += producto.precio;

        let li = document.createElement("li");
        li.innerText = producto.nombre + " - $" + producto.precio;
        listaCarrito.appendChild(li);
    }

    totalCarrito.innerText = total;
}
