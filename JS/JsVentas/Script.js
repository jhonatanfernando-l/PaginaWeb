const shopProducto = document.getElementById("shopProduct");
const verCarrito = document.getElementById("verCarrito");
const modocontainer = document.getElementById("modocontainer");
let carrito = [];

productos.forEach((product) => {
    let content = document.createElement("div");

    content.className = "card";
    content.innerHTML = `
    <img src="${product.img}">
    <h3>${product.nombre}</h3>
    <p>Bs.${product.precio}</p>
    `;

    shopProducto.append(content);

    /*SECCION DE BOTON*/
    let comprar = document.createElement("button");
    comprar.innerText = "Comprar";
    comprar.className = "compras";

    content.append(comprar);

    //SECCION DE LISTA DE COMPRAS
    comprar.addEventListener("click", () => {
        carrito.push({
            id: product.id,
            img: product.img,
            nombre: product.nombre,
            precio: product.precio,
        });
    });
});

verCarrito.addEventListener("click", () => {
    const modoHeadder = document.createElement("div");
    modoHeadder.className = "modo-header";
    modoHeadder.innerHTML = `
    <h1 class="modo-header-title">CARRITO DE COMPRAS</h1>
    `;

    modocontainer.append(modoHeadder);

    const modobotton = document.createElement('h1');
    modobotton.innerText = "X";
    modobotton.className = "modo-header-button";


    //HABILITACION DEL BOTON HACIENDO USO DE EVENTOS

    modobotton.addEventListener("click",()=>{
        modocontainer.style.display = "none";
    });


    modoHeadder.append(modobotton);

    //creacion de la caja de loss productos
    carrito.forEach((product)=>{
        let carritoContent = document.createElement("div");
        carritoContent.className = "modo-content";
        carritoContent.innerHTML = `
        <img src="${product.img}">
        <h3>${product.nombre}</h3>
        <p>Bs${product.precio}</p>
        `;

        modocontainer.append(carritoContent);
    })//fin de la seccion "creacion de caja"

    const total = carrito.reduce((acc, el)=> acc + el.precio, 0);
    const totalCompra = document.createElement("div");
    /*name para el css */
    totalCompra.className = "total-content";
    totalCompra.innerHTML = `Total a cancelar: Bs. ${total}`;
    modocontainer.append(totalCompra);

});
