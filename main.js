import { cargar_categorias } from "./cargar_categorias/Cargar_categorias.js";
import { cargarProductos } from "./Cargar_productos/cargar_productos.js"
 
// Selecciona el elemento con el ID 'root'
const DOM = document.querySelector("#root");

// Estructura HTML básica
DOM.innerHTML = `
    <header id="header"></header>
    <main class="body">
    <section id="div_summery_description"></section>
    <section id="div_product_list">
    </section>
    </main>
    <footer id="footer"></footer>
`;

// Función para cargar categorías y productos
async function cargarCategoriasYProductos() {
    try {
        // Obtener productos de la API
        const response = await fetch('https://fakestoreapi.com/products');
        const data = await response.json();

        // Llamar a la función para cargar productos
        cargarProductos(data);

        // Llamar a la función para cargar categorías
        cargar_categorias();
    } catch (error) {
        console.error("Error al cargar categorías y productos:", error);
    }
}

// Llamar a la función para cargar categorías y productos
cargarCategoriasYProductos();
