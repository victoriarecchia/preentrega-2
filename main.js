/* El siguiente programa servirá para realizar un control de stock de botines 
de futbol, pudiendo agregar, eliminar botines y consultar la lista de disponibles*/

let botines = [];
let idBotin = 1;

// Clase botin con su metodo constructor
class Botin {
  constructor(marca, modelo, precio) {
    this.marca = marca;
    this.modelo = modelo;
    this.precio = precio;
    this.id = idBotin++;
  }
}

// Agrego 4 botines al array mediante el metodo push.

// 1er botin
botines.push({ marca: "Nike", modelo: "Tiempo Legend", precio: "$93.000", })
idBotin++;
// 2do botin
botines.push({ marca: "Adidas", modelo: "Accuracy", precio: "$103.000" })
idBotin++
// 3er botin
botines.push({ marca: "Puma", modelo: "Future", precio: "$101.000" })
idBotin++
// 4to botin
botines.push({ marca: "Adidas", modelo: "Predator", precio: "$109.000" })
idBotin++

/*Cargar nuevo botin al inventario mediante una función flecha y el metodo push. 
Ademas al agregar un botin se incrementa la variable idBotin*/
const cargarBotin = (botin) => {
  botines.push(botin);
  idBotin++;
}

// Consulta de stock
const consultarStock = () => {
  console.log("Lista de botines disponibles:");
  console.log("Marca - Modelo - Precio");
  for (let i = 0; i < botines.length; i++) {
    console.log(`  ${i + 1} - ${botines[i].marca} ${botines[i].modelo}. Precio: ${botines[i].precio}`);
  }

}


// Modificar precio
// Aseguramos que exista el modelo del botin y coincida con el solicitado por pantalla.
const modificarPrecio = (modeloBotin) => {
  const botinAModificar = botines.find(botin => botin.modelo === modeloBotin);

  if (botinAModificar) {
    let nuevoPrecio = prompt(`Ingresa el nuevo precio para ${modeloBotin}`);
    botinAModificar.precio = nuevoPrecio;
    console.log(`Precio modificado correctamente para ${modeloBotin}`);
  } else {
    console.log("No se encontró un botin con ese modelo");
  }
}

// Seccion de Menus
let estado = true;
const bienvenida = () => {
  while (estado) {
    let opcion = parseInt(
      prompt(
        `Bienvenido al control de inventario de botines.\nIngrese una opcion por teclado:
        1. Cargar un nuevo botin.
        2. Consultar stock de botines.
        3. Modificar precio de un botin.
        4. Salir.
        `
      )
    )

    switch (opcion) {
      // Cargar un nuevo botin
      case 1:
        let marca = prompt("Ingrese la marca del botin");
        let modelo = prompt("Ingrese el modelo del botin");
        let precio = prompt("Ingrese el precio del botin");
        let botin = new Botin(marca, modelo, precio);
        cargarBotin(botin);
        idBotin++;
        break;

      // Consultar stock 
      case 2:
        consultarStock();
        break;
      case 3:
        consultarStock();
        let botinAModificar = prompt("Ingrese el modelo del botin a modificar precio");
        modificarPrecio(botinAModificar);
        break;

      // Salir del menu
      case 4:
        estado = false;
        break;

      default:
        alert("Ingrese una opcion valida");
        break;
    }
  }
}

bienvenida();