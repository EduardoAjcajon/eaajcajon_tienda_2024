

async function cargarCarrito (){
    try{
        const respuesta = await fetch('https://fakestoreapi.com/carts/user/2')
        const datos = await respuesta.json();
        console.log("Datos correctos")
    }
    catch{
        console.log("error")
    }
}


export { cargarCarrito };