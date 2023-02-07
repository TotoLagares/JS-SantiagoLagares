
let productos = [ ]
let carrito = []
document.addEventListener("DOMContentLoaded", () => {
   if (localStorage.getItem("carrito")){
       carrito = JSON.parse(localStorage.getItem('carrito'))
       ActualizarCarrito()
   }
})
document.addEventListener("DOMContentLoaded", () => {
   if (localStorage.getItem("productos")){
      productos = JSON.parse(localStorage.getItem("productos"))
       ProductosCargados()
      }
   })


function VenderProductos(){
   let Marca_producto = document.getElementById("InputMarca");
   let Modelo_producto = document.getElementById("InputModelo");
   let Precio_producto = document.getElementById("InputPrecio");
   let Talle_producto = document.getElementById("InputTalle");
   let Estado_producto = document.getElementById("InputEstado");
   let Img_producto = document.getElementById("InputImg"); 

   let ProductoVenta = {
      marca:Marca_producto.value,
      modelo:Modelo_producto.value,
      precio:Precio_producto.value,
      talle:Talle_producto.value,
      estado:Estado_producto.value,
      img:Img_producto.value,
      id: Math.random()
   }
   productos.push(ProductoVenta);
   
   let productos_json = JSON.stringify(productos);

   localStorage.setItem("productos",productos_json);

   
}

let btn_vender = document.getElementById("btn-vender")
btn_vender.addEventListener("click", VenderProductos)
btn_vender.addEventListener("click", ProductosCargados)

const contenedorProductos = document.querySelector("#contenedor-productos");
const bodycarrito = document.getElementById("carrito-body-modal")
const total = document.getElementById("total")
const precioTotal = document.getElementById("precioTotal")



   
