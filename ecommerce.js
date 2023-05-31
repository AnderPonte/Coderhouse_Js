let tiendajs = document.getElementById("tienda");

let carrito = JSON.parse(localStorage.getItem("carritodata")) || [];

let crearTienda = () => {
  return (tiendajs.innerHTML = productos.map((x) => {
    let { id, nombre, precio, desc, img } = x;
    let existeProducto = carrito.find((x) => x.id === id) || [];
    return `
      <div id=product-id-${id} class="item">
       <img class="image" src=${img} alt="" />
        <div class="details">
          <h3>${nombre}</h3>
          <p> ${desc}</p>
          <div class="precio-cantidad">
            <h4>$ ${precio}</h4>
            <div class="buttons">
              <i onclick ="disminuir(${id})" class="bi bi-dash-lg"></i>
              <div id=${id} class="cantidad">
              ${existeProducto.item === undefined ? 0 : existeProducto.item}
              </div>
              <i onclick ="incrementar(${id})" class="bi bi-plus-lg"></i>
            </div>
          </div>
        </div>
      </div>
      `;
  }));
};

crearTienda();

// funciones para incrementarar, disminuir y actualizar

let incrementar = (id) => {
  let idSeleccionado = id;
  let existeProducto = carrito.find((x) => x.id === idSeleccionado.id);

  if (!existeProducto) {
    carrito.push({
      id: idSeleccionado.id,
      item: 1,
    });
  } else {
    existeProducto.item += 1;
  }

  localStorage.setItem("carritodata", JSON.stringify(carrito));
  actualizar(idSeleccionado.id);
};

let disminuir = (id) => {
  let idSeleccionado = id;
  let existeProducto = carrito.find((x) => x.id === idSeleccionado.id);

  if (existeProducto === undefined) return;
  else if (existeProducto.item === 0) return;
  else {
    existeProducto.item -= 1;
  }

  carrito = carrito.filter((x) => x.item !== 0);

  localStorage.setItem("carritodata", JSON.stringify(carrito));
  actualizar(idSeleccionado.id);
};

let actualizar = (id) => {
  let existeProducto = carrito.find((x) => x.id === id);
  if (existeProducto) {
    document.getElementById(id).innerHTML = existeProducto.item;
  } else {
    document.getElementById(id).innerHTML = 0;
  }

  carritoCalculo();
};

let carritoCalculo = () => {
  let cartIcon = document.getElementById("cantidadCarrito");
  cartIcon.innerHTML = carrito.map((x) => x.item).reduce((a, b) => a + b, 0);
};

carritoCalculo();
