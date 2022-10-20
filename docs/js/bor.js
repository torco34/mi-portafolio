const li = document.querySelectorAll(".nav-item");
const bloque = document.querySelectorAll(".taps");
console.log(bloque);

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
