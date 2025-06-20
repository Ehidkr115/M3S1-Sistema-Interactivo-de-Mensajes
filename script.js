function verificarEdad() {
  // Solicita el nombre al usuario
  const nombre = prompt("¿Cuál es tu nombre?");

  // Expresión regular que solo permite letras y espacios (incluye tildes y ñ)
  const soloLetras = /^[a-zA-ZáéíóúÁÉÍÓÚñÑ\s]+$/;

  // Validación: si el nombre contiene caracteres no permitidos o está vacío, muestra error y termina
  if (!soloLetras.test(nombre) || nombre.trim() === "") {
    alert("Error: El nombre solo debe contener letras y no puede estar vacío.");
    console.error("Error: El nombre solo debe contener letras y no puede estar vacío.");
    return;
  }

  // Solicita la edad al usuario
  const edadInput = prompt("¿Cuál es tu edad?");
  const edad = parseInt(edadInput); // Convierte la entrada a número entero

  // Validación: edad debe ser un número entero positivo
  if (isNaN(edad) || edad <= 0 || !Number.isInteger(edad)) {
    alert("Error: Por favor, ingresa una edad válida en números enteros positivos.");
console.error("Error: Por favor, ingresa una edad válida en números enteros positivos.");
    return;
  }

  // Muestra un mensaje según la edad
  if (edad < 18) {
    alert("Hola " + nombre + ", eres menor de edad. ¡Sigue aprendiendo y disfrutando del código!");
  } else {
    alert("Hola " + nombre + ", eres mayor de edad. ¡Prepárate para grandes oportunidades en el mundo de la programación!");
  }
}