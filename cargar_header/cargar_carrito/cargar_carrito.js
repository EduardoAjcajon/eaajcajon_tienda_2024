async function cargarCarrito() {
    try {
        const respuesta = await fetch('https://fakestoreapi.com/products?limit=2');
        const datos = await respuesta.json();
        const carritoItems = document.getElementById("carritoItems");
        carritoItems.innerHTML = '';    

        datos.forEach(item => {
            const shortText = item.title.split(' ').slice(0, 5).join(' ');
            carritoItems.innerHTML += `
                <div class="carrito-item">
                    <div class="box_img">
                        <img src="${item.image}" alt="${shortText}">
                    </div>
                    <div class="caja_descri">
                        <span class="name">${shortText}</span>
                        <span class="price">Q${item.price}</span>
                    </div>
                </div>
            `;
        });

        console.log("Datos cargados correctamente en el carrito");
    } catch (error) {
        console.log("Error al cargar el carrito:", error);
    }
}

function inicializarCarritoModal() {
    document.body.insertAdjacentHTML('beforeend', `
        <div id="carritoModal" class="modal">
            <div class="modal-content">
                <span class="close" id="closeCarrito">&times;</span>
                <h2>Tu Carrito de Compras</h2>
                <div id="carritoItems"></div>
            </div>
        </div>
    `);

    const modal = document.getElementById("carritoModal");
    const closeCarrito = document.getElementById("closeCarrito");

    document.getElementById("carritoIcon").addEventListener("click", () => {
        cargarCarrito();
        modal.style.display = "block";
    });

    closeCarrito.addEventListener("click", () => modal.style.display = "none");
    window.addEventListener("click", (event) => {
        if (event.target == modal) {
            modal.style.display = "none";
        }
    });
}

export { cargarCarrito, inicializarCarritoModal };
