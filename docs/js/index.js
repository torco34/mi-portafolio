const li = document.querySelectorAll(".nav-item");
li.forEach((cadaLi, i) => {
  li[i].addEventListener("click", () => {
    li.forEach((cadaLi, i) => {
      li[i].classList.remove("active");
    });
    li[i].classList.add("active");
  });
});

// este es el escrol

const boton = document.getElementById("boton");
const header = document.getElementById("header");

window.onscroll = () => {
  let scrollPunto = window.pageYOffset;
  if (scrollPunto <= 300) {
    boton.style.display = "none";
    boton.style.transition = "8s";
    header.style.borderBottom = "none";
  } else {
    boton.style.display = "block";
    boton.style.transition = "0.5s";
    header.style.borderBottom = "3px solid #AA8B56";
  }
};
