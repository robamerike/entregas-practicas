const productos = [
  { nombre: "Laptop", precio: 80, stock: 5 },
  { nombre: "Mouse", precio: 20, stock: 10 },
  { nombre: "Teclado", precio: 40, stock: 6 },
  { nombre: "Monitor", precio: 120, stock: 3 }
];

const carrito = [];

const productosDiv = document.getElementById("productos");
const carritoLista = document.getElementById("carrito-lista");
const totalElemento = document.getElementById("total");
const comprarBtn = document.getElementById("comprarBtn");
const loader = document.getElementById("loader");

// Mostrar productos
productos.forEach((producto, index) => {
  const div = document.createElement("div");
  div.className = "producto";
  div.innerHTML = `
    <h3>${producto.nombre}</h3>
    <p>Precio: $${producto.precio}</p>
    <p>Stock: ${producto.stock}</p>
    <button onclick="agregar(${index})">+</button>
    <button onclick="quitar(${index})">-</button>
  `;
  productosDiv.appendChild(div);
});

// Agregar producto al carrito
function agregar(index) {
  const producto = productos[index];
  if (producto.stock <= 0) {
    alert("Stock insuficiente");
    return;
  }

  let enCarrito = carrito.find(p => p.nombre === producto.nombre);
  if (enCarrito) {
    enCarrito.cantidad++;
  } else {
    carrito.push({ nombre: producto.nombre, precio: producto.precio, cantidad: 1 });
  }
  producto.stock--;
  actualizarCarrito();
}

// Quitar producto del carrito
function quitar(index) {
  const producto = productos[index];
  const enCarrito = carrito.find(p => p.nombre === producto.nombre);
  if (enCarrito) {
    enCarrito.cantidad--;
    producto.stock++;
    if (enCarrito.cantidad <= 0) {
      const i = carrito.indexOf(enCarrito);
      carrito.splice(i, 1);
    }
    actualizarCarrito();
  }
}

// Actualizar interfaz del carrito
function actualizarCarrito() {
  carritoLista.innerHTML = "";
  carrito.forEach(item => {
    const li = document.createElement("li");
    li.textContent = `${item.nombre} x${item.cantidad} - $${item.precio * item.cantidad}`;
    carritoLista.appendChild(li);
  });

  const total = calcularTotal();
  totalElemento.textContent = `Total: $${total}`;
}

// Calcular total
function calcularTotal() {
  return carrito.reduce((sum, p) => sum + p.precio * p.cantidad, 0);
}

// Simular compra
comprarBtn.addEventListener("click", () => {
  if (carrito.length === 0) {
    alert("El carrito está vacío");
    return;
  }

  loader.style.display = "block";
  comprarBtn.disabled = true;

  setTimeout(() => {
    loader.style.display = "none";
    const total = calcularTotal();
    const totalConDescuento = total > 100 ? total * 0.9 : total;
    alert(`Compra realizada con éxito. Total a pagar: $${totalConDescuento.toFixed(2)}`);
    carrito.length = 0;
    actualizarCarrito();
    comprarBtn.disabled = false;
  }, 5000);
});
