let nombre  = process.env.NOMBRE || 'sin nombre';
let web     = process.env.WEB || 'no tengo web';


console.log('Hola ' + nombre)
console.log('mi web es ' + web)


//probar ejecutar estas dos opciones
//node entorno.js
//NOMBRE=Daniel WEB=www node entorno.js