const contenedor = document.getElementById("productos");
const loader = document.getElementById("loader");

fetch("https://fakestoreapi.com/products")
  .then(res => res.json())
  .then(data => {
    loader.style.display = "none";

    data.forEach(producto => {
      const div = document.createElement("div");
      div.className = "producto";
      div.innerHTML = `
        <h3>${producto.title}</h3>
        <img src="${producto.image}" alt="${producto.title}" />
        <p><strong>Precio:</strong> $${producto.price}</p>
        <p>${producto.description.substring(0, 100)}...</p>
        <button onclick="alert('Producto agregado: ${producto.title}')">Agregar al carrito</button>
      `;
      contenedor.appendChild(div);
    });
  })
  .catch(err => {
    loader.textContent = "Error al cargar productos.";
    console.error("Error:", err);
  });
