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

// Agrego 3 botines al array mediante el metodo push.

// Primer botin
botines.push({ marca: "Nike", modelo: "Tiempo Legend", precio: "$93.000",})
idBotin++;
// 2do botin
botines.push({ marca: "Adidas", modelo: "Tiempo Legend", precio: "$103.000"})
idBotin++
// 3er botin
botines.push({ marca: "Puma", modelo: "Future", precio: "$109.000"})
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
  for (let i = 0; i < botines.length; i++) {
    console.log(`  ${i+1} - ${botines[i].marca} ${botines[i].modelo}. Precio: ${botines[i].precio}`);
  }

}

// Eliminar botin
// Consultamos si existe el id del botin a eliminar
const existeBotin = (array, idReferencia) => {
  let existe = array.some( elemento => elemento.id === idReferencia );
  return existe;
}
const eliminarBotin = (id) => {

  if(existeBotin(botines, id)) {
    botines = botines.filter(botin => botin.id !== id);
  } else {
    alert("No existe ningún usuario con ese ID");
  }
};

// Seccion de Menus

let estado = true;
const bienvenida = () => {
  while (estado) {
    let opcion = parseInt(
      prompt(
        `
        Bienvenido al control de inventario de botines. Seleccione una opcion
        1. Cargar un nuevo botin.
        2. Consultar stock.
        3. Eliminar un botin 
        4. Salir
        `
      )
    )


    switch (opcion) {
      case 1:
        let marca = prompt("Ingrese la marca del botin");
        let modelo = prompt("Ingrese el modelo del botin");
        let precio = prompt("Ingrese el precio del botin");
        let botin = new Botin(marca, modelo, precio);
        cargarBotin(botin);
        idBotin++;
        break;

      case 2:
        consultarStock();
        break;

      case 3:
        consultarStock();
      let botinAEliminar = prompt("Ingrese el numero del botin a eliminar");
      eliminarBotin(botinAEliminar);
        break;

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