let div_footer = document.querySelector("#footer");

let div = `
    <div class="arriba_footer">
        <p class="sigenos">
            Sígenos...
        </p>
        <div class="imgs_redes">
            <img src="https://raw.githubusercontent.com/EduardoAjcajon/Img_Tienda/daded0be8533218f6ca1ce525be0b397a8b01d68/facebook-3-logo-svgrepo-com.svg" alt="" class="img">
            <img src="https://raw.githubusercontent.com/EduardoAjcajon/Img_Tienda/daded0be8533218f6ca1ce525be0b397a8b01d68/icons8-instagram-480.svg" alt="" class="img ">
            <img src="https://raw.githubusercontent.com/EduardoAjcajon/Img_Tienda/daded0be8533218f6ca1ce525be0b397a8b01d68/icons8-x-384.svg" alt="" class="img ">
            <img src="https://raw.githubusercontent.com/EduardoAjcajon/Img_Tienda/daded0be8533218f6ca1ce525be0b397a8b01d68/youtube-168-svgrepo-com.svg" alt="" class="img ">
        </div>
    </div>
    <div class="abajo_foo">
        <div class="logotipo">
            <span class="material-symbols-outlined logo"> shopping_bag </span>
            <p class="name_tienda"> ByteVariedades </p>
        </div>
        <div class="contactos">
            <p class="correo">
                eaajcajon@scl.edu.gt
            </p>
            <p class="numero">
                4248-8462
            </p>
        </div>
        <div class="productos">
            <p class="categorias_footer">Electronics</p>
            <p class="categorias_footer">Jewelery</p>
            <p class="categorias_footer">Men's clothing</p>
            <p class="categorias_footer">Women's clothing</p>
        </div>
    </div>
`

div_footer.innerHTML = div;