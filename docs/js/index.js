const li = document.querySelectorAll(".nav-item");
const bloque = document.querySelectorAll(".taps");
const li2 = document.querySelectorAll(".nav-item");
const bloque2 = document.querySelectorAll(".taps2");

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

// li2.forEach((cadali2, i) => {
//   li2[i].addEventListener("click", () => {
//     li2.forEach((cadali2, i) => {
//       li2[i].classList.remove("actives");
//       bloque2[i].classList.remove("actives");
//     });
//     li2[i].classList.add("actives");
//     bloque2[i].classList.add("actives");
//   });
// });
