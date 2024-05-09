let div_footer = document.querySelector("#footer");

let div = `
    <div class="arriba_footer">
        <p class="sigenos">
            Sígenos...
        </p>
        <div class="imgs_redes">
            <img src="https://raw.githubusercontent.com/EduardoAjcajon/Img_Tienda/0a27608117ae4782255a086b8f97f46f0be09c1d/facebook-svgrepo-com.svg" alt="" class="img">
            <img src="https://raw.githubusercontent.com/EduardoAjcajon/Img_Tienda/0a27608117ae4782255a086b8f97f46f0be09c1d/instagram-svgrepo-com.svg" alt="" class="img ">
            <img src="https://raw.githubusercontent.com/EduardoAjcajon/Img_Tienda/0a27608117ae4782255a086b8f97f46f0be09c1d/twitter-svgrepo-com.svg" alt="" class="img ">
            <img src="https://raw.githubusercontent.com/EduardoAjcajon/Img_Tienda/0a27608117ae4782255a086b8f97f46f0be09c1d/youtube-svgrepo-com.svg" alt="" class="img ">
        </div>
    </div>
    <div class="abajo_footer">
        <div class="logotipo_foter">
            <span class="material-symbols-outlined logo"> shopping_bag </span>
            <p class="name_tienda_footer"> ByteVariedades </p>
        </div>
        <div class="contactos">
            <p class="contacto_text">
                Contacto
            </p>
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