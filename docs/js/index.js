(function () {
  AOS.init();
})();
const header = document.getElementById("header");
const inicio = document.getElementById("home");
const acerca = document.getElementById("onmi");
const conocer = document.getElementById("servicess");
const proyecto = document.getElementById("proyect");
const contacto = document.getElementById("contacts");
console.log(inicio, acerca, conocer, proyecto, contacto, header);
const CambioColor = (event) => {
  inicio.classList.remove("active");
  acerca.classList.remove("active");
  conocer.classList.remove("active");
  acerca.classList.remove("active");
  proyecto.classList.remove("active");
  contacto.classList.remove("active");

  const link = event.target;
  console.log(link);
  link.classList.remove("active");

  lokjikio;
  link.classList.add("active");
};

header.addEventListener("click", CambioColor);
