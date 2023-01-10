

let marca = prompt ("¿Que zapatillas busca? Adidas - Nike - Jordan" )
    console.log("Marca ingresada;" , marca );
    if (((marca !== "adidas") && (marca !== "jordan") && (marca !== "nike"))){
      alert("Marca NO disponible")
    }   
         if (marca == "adidas") {
           modelo = prompt ("¿Que Modelo?  Yeezy700 (300 usd) - Yeezy350 (240 usd) - HumanRace (200 Usd)");
            
         }
         if( marca == "jordan"){ 
            modelo = prompt ("¿Que Modelo?  Jordan 1 white- Jordan 4 blue - uptempo");
         }
         if ( marca == "nike"){ 
            modelo = prompt ("¿Que Modelo?  Air Max 1 - Air Force - Huarache") 
         }
         console.log("modelo Elegido;",modelo,);
      let cuotas = parseInt (prompt("En cuantas cuotas con interes desea pagar 3 - 6 - 12")) 

      function interes_cuotas (valor, cuotas){
      let interes;
  
      if (cuotas == 3){
         interes = valor * 0.15;
         return interes
      }
      if (cuotas == 6){
         interes = valor * 0.40;
         return interes
      }
      if (cuotas == 12){
         interes = valor * 0.90;
         return interes
      }else{
         return false
      }  
   }
let valor;

switch (modelo) {
	case "yeezy700":
		valor = 300;
	   break;
   case "yeezy350":
      valor = 240;
      break;
   case "humanrace":
      valor = 200;
      break;
   case "air max 1":
      valor = 73;
      break;
   case "air force":
      valor = 120;
      break;
   case "huarache":
      valor = 100;
      break;
   case "jordan 1 white":
      valor = 125;
      break;
   case "jordan 4 blue":
      valor = 250;
      break;
   case "uptempo":
      valor = 88;
      break;   
	default:
		valor = 0;
		break;
}
console.log("Valor;",valor)
console.log("Valor mas Interes;",valor + interes_cuotas (valor, cuotas))


 
