
//filtro (modelos,Marcas)
   const producto = [
      {modelo: "yeezy 700", valor: 300},
      {modelo: "yeezy 350", valor:240},
      {modelo: "human race", valor:200},
      {modelo: "air max 1", valor:73},
      {modelo: "air force", valor:120},
      {modelo: "huarache", valor:100},
      {modelo: "jordan 1 white", valor:125},
      {modelo: "jordan 4 blue", valor:250},
      {modelo: "uptempo", valor:88},
   ]
   function int(){
      let producto_final = prompt ("¿Que modelo desea?")
      //seguir
      let seguir =prompt("desea comprar algo mas?");
      if(seguir == "si"){
        int() 
   }   
   const productoselecto = producto.find((producto) => producto.modelo === producto_final)
   console.log(productoselecto);
}
int()
   let cuotas = parseInt (prompt("En cuantas cuotas con interes desea pagar 3 - 6 - 12"))
   const interes = [
            {cuota: 3, interesAgregado:producto.valor*0.15},
            {cuota: 6, interesAgregado: producto.valor*0.35},
            {cuota: 12, interesAgregado: producto.valor*0.55},]
   const interesfinal = interes.find((interes) => interes.cuota == cuotas)
      
   console.log("Valor mas Interes;",productoselecto + interesfinal.interesAgregado  )


   

    
//interes x cuotas
     
       
      



