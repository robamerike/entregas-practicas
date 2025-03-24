const form = document.getElementById("registroForm");
const nombre = document.getElementById("nombre");
const correo = document.getElementById("correo");
const password = document.getElementById("password");
const confirmPassword = document.getElementById("confirmPassword");

const errorNombre = document.getElementById("errorNombre");
const errorCorreo = document.getElementById("errorCorreo");
const errorPassword = document.getElementById("errorPassword");
const errorConfirm = document.getElementById("errorConfirm");

const loader = document.getElementById("loader");
const mensajeExito = document.getElementById("mensajeExito");

form.addEventListener("submit", (e) => {
  e.preventDefault();

  // Limpiar errores
  errorNombre.textContent = "";
  errorCorreo.textContent = "";
  errorPassword.textContent = "";
  errorConfirm.textContent = "";
  mensajeExito.textContent = "";

  let valido = true;

  // Validación de nombre
  const nombreRegex = /^[A-Za-zÁÉÍÓÚáéíóúÑñ\s]+$/;
  if (nombre.value.trim() === "") {
    errorNombre.textContent = "El nombre es requerido.";
    valido = false;
  } else if (!nombreRegex.test(nombre.value.trim())) {
    errorNombre.textContent = "El nombre solo debe contener letras y espacios.";
    valido = false;
  }

  // Validación de correo
  const correoRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!correoRegex.test(correo.value.trim())) {
    errorCorreo.textContent = "Correo inválido.";
    valido = false;
  }

  // Validación de contraseña fuerte
  const passValida = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[\W_]).{8,}$/;
  if (!passValida.test(password.value)) {
    errorPassword.textContent = "Debe tener al menos 8 caracteres, un número, una mayúscula, una minúscula y un símbolo.";
    valido = false;
  }

  // Confirmar contraseña
  if (password.value !== confirmPassword.value) {
    errorConfirm.textContent = "Las contraseñas no coinciden.";
    valido = false;
  }

  // Si todo está bien
  if (valido) {
    loader.style.display = "block";
    setTimeout(() => {
      loader.style.display = "none";
      mensajeExito.textContent = "✅ Formulario enviado con éxito (simulado)";
      form.reset();
    }, 5000);
  }
});
