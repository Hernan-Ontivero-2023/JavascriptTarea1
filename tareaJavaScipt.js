//1) Realizar una funcion que reciba un numero y escriba una piramide desde 1 hasta ese numero de la siguiente forma: para valor 6

console.log("EJERCICIO 1");
console.log("1) Realizar una funcion que reciba un numero y escriba una piramide desde 1 hasta ese numero de la siguiente forma para valor 6")
console.log("*");
console.log("*");
console.log("<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<");

function piramide(num) {
    let cadena = '';
    for (let i = 1; i <= num; i++) {
      cadena += i;
      console.log(cadena);
    }
  }

  piramide(6);
console.log("para valor 3  <<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<");
  piramide(3);

console.log(" "); 
console.log(" "); 
  
console.log(" EJERCICIO 2 <***********<***********<**************************<***********<**************<****************<**************<***<***<*");

//2) Escribir una funcion que reciba 2 array y devuelva un array con todos los elementos que coinciden entre ellos

console.log("2) Escribir una funcion que reciba 2 array y devuelva un array con todos los elementos que coinciden entre ellos"); 


function elementosQueConciden(array1, array2) {
  let concidencia = [];
  for(let i = 0; i < array1.length; i++) {
    if(array2.includes(array1[i])) {
      concidencia.push(array1[i]);
  }

  }
 return concidencia
}
const array1 = ['renault', 'subaru', 'fiat'];
const array2 = ['skoda', 'mitsubishi', 'subaru'];

console.log("");
console.log("LISTA 1");
console.log("El elemento que concide es");
console.log(elementosQueConciden(array1,array2));

console.log("");
console.log("LISTA 2");
console.log("El elemento que concide es");
const array3 = [4, 3, true, 'xbox',NaN];
const array4 = ['xbox', 3, false, true, 3, true];
console.log(elementosQueConciden(array3, array4));

console.log("");

console.log(" EJERCICIO 3 <***********<***********<**************************<***********<**************<****************<**************<***<***<*");
//Crear las clases necesarias para generar carritos respetando la estructura del objeto dado.
console.log("Crear las clases necesarias para generar carritos respetando la estructura del objeto dado.");


class Producto {
    constructor(nombre, precio, unidades) {
      this.nombre = nombre;
      this.precio = precio;
      this.unidades = unidades;
    }
  }
  
  class Carrito {
    constructor() {
      this.montoTotal = 0;
      this.productos = [];
    }
  
    agregarProducto(nombre, precio, unidades) {
      const productoExistente = this.productos.find(producto => producto.nombre === nombre);
      if (productoExistente) {
        console.log(`Ya existe ${nombre} con ${productoExistente.unidades} unidades`);
      } else {
        const nuevoProducto = new Producto(nombre, precio, unidades);
        this.productos.push(nuevoProducto);
        this.montoTotal += precio * unidades;
      }
    }
  }
// GENERANDO CARRITOS
let carrito = new Carrito();

carrito.agregarProducto("Leche", 2, 1); 
carrito.agregarProducto("Azucar", 5, 2);
carrito.agregarProducto("Pan lactal", 10, 3);
carrito.agregarProducto("Arroz", 4, 10)
console.log(carrito); 

let carrito2 = new Carrito();

carrito2.agregarProducto("Coca cola", 21, 1); 
carrito2.agregarProducto("Fernet", 25, 2);
carrito2.agregarProducto("Queso", 11, 5);
carrito2.agregarProducto("Atun", 4, 10)
console.log(carrito2); 

let carrito3 = new Carrito();

carrito3.agregarProducto("Pollo", 28, 9); 
carrito3.agregarProducto("Fiambre", 29, 2);
carrito3.agregarProducto("chocolate", 17, 5);
carrito3.agregarProducto("Cafe", 10, 10)
console.log(carrito3); 
//Agregar al ejercicio anterior una validación para no permitir duplicados e imprimir un mensaje si el item ya existe “ya existe xxx con yyy unidades”
console.log("Agregar al ejercicio anterior una validación para no permitir duplicados e imprimir un mensaje si el item ya existe “ya existe xxx con yyy unidades”");
carrito3.agregarProducto("Pollo", 28, 4)
