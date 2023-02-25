function ProductosCargados(){

   let recuperando_productos = localStorage.getItem("productos");
   recuperando_productos = JSON.parse(recuperando_productos);

   contenedorProductos.innerHTML = "";

    productos.forEach(productos => {

        const div = document.createElement("div");
        //div.classList.add("producto");
        div.innerHTML =
        `<div class= "col-12">
        <figure class="snip1268 m-2 p-2 overflow-auto">
                  <div class="image">
                  <img class="producto-img" src="${productos.img}" alt="${productos.marca}">
                    <a href="#" class="add-to-cart producto-id tipografia fs-4"><button id="agregar${productos.id}">Add to Cart</button></a>
                  </div>
              <figcaption class="border">
                    <h2 class="fs-4 titulo-card producto-modelo tipografia fs-4">${productos.modelo}</h2>
                 <div class="d-flex justify-content-between " >
                  <div class="price producto-estado tipografia fs-4">${productos.estado}</div>
                  <div class="price producto-precio tipografia fs-4">$${productos.precio}</div>
                 </div> 
                 <div class="price m-2 producto-talle tipografia fs-4">talle: ${productos.talle}</div>     
              </figcaption>
            </figure> 
        </div>
        
`;
    contenedorProductos.append(div); 
    localStorage.setItem('contenedorProductos', JSON.stringify(productos))
      const boton = document.getElementById(`agregar${productos.id}`)
      
      boton.addEventListener("click", ()=>{
        agregarAlCarrito(productos.id);
      })
      
    })
}

const agregarAlCarrito = (prodId) =>{
  const item = productos.find ((productos) => productos.id === prodId)
  carrito.push(item)
  ActualizarCarrito()
  console.log(carrito)
}


const ActualizarCarrito = () => {
  
  bodycarrito.innerHTML = "";

    carrito.forEach(productos => {

       const div = document.createElement("div");
       div.innerHTML =
       `
       <div class="col-12 border">
       <div class="d-flex ">
         <img src="${productos.img}" alt="" class="divv">
         <div class="justify-content-end  d-flex  col-10">
           <h3 class="mx-3 my-auto tipografia text-end">${productos.modelo}</h3>
           <h3 class="mx-3 my-auto tipografia">${productos.talle}</h3>
           <h3 class="mx-3 my-auto tipografia"> $${productos.precio}</h3>
           <button type="button" class="ms-4 btn-danger" onclick ="eliminardelcarrito(${productos.id})"><i class="bi bi-trash-fill "></i></button>
         </div>
       </div>
     </div>
`
    bodycarrito.appendChild(div)

    localStorage.setItem('carrito', JSON.stringify(carrito))
})
total.innerText = carrito.length
precioTotal.innerText = carrito.reduce((acc, productos) => acc + productos.precio)
}
//esta parte la google xq no me salia jeje
const eliminardelcarrito= (prodId) => {
 const item = carrito.find ((productos) => productos.id === prodId)
  const indice = carrito.indexOf(item)
  carrito.splice(indice, 1)
  ActualizarCarrito()
}
//API DOLAR BLUE
const footer = document.createElement("footer");
fetch("https://www.dolarsi.com/api/api.php?type=valoresprincipales")
  .then(response => response.json())
  .then(data=>{    
   document.getElementById("footer").innerHTML = `
                                <hr>
                                <div class="text-center">  
                                <p><i class="bi bi-cash mt-4 fs-1 text-success"></i></p>
                                <p class="mb-2 p-0 fs-6 text-secondary">Valor Dolar Blue:</p>
                                <p class="m-0 p-0 fs-6">Compra: <h4 class= "text-danger fs-6">$${data[1].casa.compra}</h4> Venta: <h4 class= "text-danger fs-6">$${data[1].casa.venta} </h4></p><div> 
    `
  })
  
  