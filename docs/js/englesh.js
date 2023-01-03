const headerEngle = document.getElementById("headerEngles");

window.onscroll = () => {
  let scrollPunto = window.pageYOffset;
  if (scrollPunto <= 100) {
    headerEngle.style.borderBottom = "none";
  } else {
    headerEngle.style.borderBottom = "4px solid #1b9e9e";
  }
};
