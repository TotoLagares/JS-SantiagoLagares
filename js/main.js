
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
      
   productoselecto = producto.find((producto) => producto.modelo === producto_final)
   console.log(productoselecto);
   let sumarIva = productoselecto.valor * 1.21
   console.log ("Valor + Iva",sumarIva);

   
   //prueba
   let cuotas = parseInt (prompt("En cuantas cuotas con interes desea pagar 3 - 6 - 12"))
   const interes = [
      {cuota: 3, intereses: 1.15 },
      {cuota: 6, intereses: 1.35 },
      {cuota: 12, intereses:  1.55 },
   ]
   let ValorFinal = (interes.find((interes) => interes.cuota == cuotas))
   console.log ("Valor Final (Iva + Interes)",ValorFinal.intereses * sumarIva)
   let seguir =prompt("desea comprar algo mas?");
      if(seguir == "si"){
        int() 
   }
}
int()



   

    
//interes x cuotas
     
       
   
