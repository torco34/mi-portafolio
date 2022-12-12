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

window.onscroll = () => {
  let scrollPunto = window.pageYOffset;
  if (scrollPunto <= 600) {
    boton.style.display = "none";
    boton.style.transition = "0.8s";
  } else {
    boton.style.display = "block";
    boton.style.transition = "1s";
  }
};
