// Array de productos deportivos
const productos = [
  { nombre: "Zapatillas", precio: 100 },
  { nombre: "Camisa", precio: 30 },
  { nombre: "Pantalón", precio: 50 },
];

// Función para mostrar los productos disponibles
function mostrarProductos() {
  alert("Productos disponibles:");
  productos.forEach((producto, index) => {
    alert(`${index + 1}. ${producto.nombre} - $${producto.precio}`);
  });
}

// Función para buscar un producto por su nombre
function buscarProducto(nombre) {
  return productos.find(
    (producto) => producto.nombre.toLowerCase() === nombre.toLowerCase()
  );
}

const productosSeleccionados = [];
let total = 0;

mostrarProductos();

// Solicitar al usuario que escriba el nombre del producto a comprar
while (productosSeleccionados.length < 3) {
  const nombreProducto = prompt(
    'Ingresa el nombre de un producto a comprar (o "salir" para terminar):'
  );

  if (nombreProducto.toLowerCase() === "salir") {
    break;
  }

  const producto = buscarProducto(nombreProducto); // {nombre, precio}

  //para visualizar cada producto agregado
  if (producto) {
    productosSeleccionados.push(producto);
    total += producto.precio;
    console.log(`Producto agregado: ${producto.nombre}`);
  } else {
    console.log("Producto no encontrado. Intenta nuevamente.");
  }
}

console.log("Productos seleccionados:");
//mostramos los productos seleccionados y el total de compra
productosSeleccionados.forEach((producto) => {
  console.log(`${producto.nombre} - $${producto.precio}`);
});

console.log(`Total de Compra: $${total}`);
