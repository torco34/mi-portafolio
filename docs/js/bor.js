console.log(location.hash.slice(1));

const taps1 = document.getElementById("taps1");
const taps2 = document.getElementById("taps2");
const li = document.getElementById("ul");
console.log(taps1);
console.log(taps2);
console.log(li);
(function (e) {
  let pest = location.hash.slice(1);
  console.log(pest);
  if (pest) {
    let tap = document.getElementById(pest);

    console.log(tap);
    if (tap) {
      tap.click();
    }
  }
})();

li.addEventListener("click", () => {
  console.log("torco");
  if (true) {
    taps1.classList.remove("active");
  } else {
    taps2.classList.add("active");
  }
});
