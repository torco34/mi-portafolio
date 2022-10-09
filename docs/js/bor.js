const li = document.querySelectorAll(".nav-item");
const bloque = document.querySelectorAll(".index");
console.log(li);

li.forEach((cadaLi, i) => {
  li[i].addEventListener("click", () => {
    li.forEach((cadaLi, i) => {
      li[i].classList.remove("active");
      bloque[i].classList.remove("active");
    });
    li[i].classList.add("active");
    bloque[i].classList.add("active");
  });
});

// const list = document.getElementById("ul");
// const inicio = document.getElementById("inicio");
// const servicio = document.getElementById("servicio");
// const trabajo = document.getElementById("trabajo");
// const sobre = document.getElementById("sobre");

// // const color = document.querySelector(".nav-item");

// function agregarColor(e) {
//   inicio.classList.remove("active");
//   servicio.classList.remove("active");
//   trabajo.classList.remove("active");
//   sobre.classList.remove("active");
//   const link = e.target;
//   link.classList.add("active");
//   lokjikio;
//   link.classList.remove("active");
// }
// list.addEventListener("click", agregarColor);
// ("use strict");
// console.log(location.hash.slice(1));
