// 1. Array de productos
const productos = [
  { nombre: "Laptop", precio: 80, stock: 5 },
  { nombre: "Mouse", precio: 20, stock: 10 },
  { nombre: "Teclado", precio: 40, stock: 6 },
  { nombre: "Monitor", precio: 120, stock: 3 }
];

const carrito = [];

// 2. Agregar productos al carrito
function agregarAlCarrito(nombreProducto, cantidad) {
  const producto = productos.find(p => p.nombre === nombreProducto);
  if (!producto) {
    console.log("Producto no encontrado.");
    return;
  }
  if (producto.stock < cantidad) {
    console.log("Stock insuficiente.");
    return;
  }

  const enCarrito = carrito.find(p => p.nombre === nombreProducto);
  if (enCarrito) {
    enCarrito.cantidad += cantidad;
  } else {
    carrito.push({ nombre: nombreProducto, precio: producto.precio, cantidad });
  }

  producto.stock -= cantidad;
  console.log(`${cantidad} x ${nombreProducto} agregado al carrito.`);
}

// 3. Calcular total
function calcularTotal() {
  return carrito.reduce((total, producto) => total + producto.precio * producto.cantidad, 0);
}

// 4. Aplicar descuento
function aplicarDescuento(total) {
  if (total > 100) {
    return total * 0.9; // 10% de descuento
  }
  return total;
}

// 5. Simular proceso de compra
function procesarCompra() {
  console.log("Procesando compra...");
  setTimeout(() => {
    const total = calcularTotal();
    const totalConDescuento = aplicarDescuento(total);
    console.log(`Total con descuento: $${totalConDescuento.toFixed(2)}`);
  }, 3000);
}

// 6. Simulación completa
agregarAlCarrito("Laptop", 1);
agregarAlCarrito("Mouse", 2);
agregarAlCarrito("Monitor", 1);

// 7. Mostrar cuenta regresiva
function cuentaRegresiva(segundos) {
  let tiempo = segundos;
  const intervalo = setInterval(() => {
    console.log(`Compra confirmada en ${tiempo}...`);
    tiempo--;
    if (tiempo < 0) {
      clearInterval(intervalo);
      procesarCompra();
    }
  }, 1000);
}

cuentaRegresiva(3);

// 🔥 Reto adicional: Eliminar productos del carrito
function eliminarDelCarrito(nombreProducto) {
  const index = carrito.findIndex(p => p.nombre === nombreProducto);
  if (index !== -1) {
    const item = carrito[index];
    const productoOriginal = productos.find(p => p.nombre === nombreProducto);
    if (productoOriginal) productoOriginal.stock += item.cantidad;

    carrito.splice(index, 1);
    console.log(`${nombreProducto} eliminado del carrito.`);
  } else {
    console.log(`${nombreProducto} no está en el carrito.`);
  }
}
