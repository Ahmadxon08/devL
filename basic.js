// let modeBtn = document.getElementById('dark-light');

// modeBtn.addEventListener('click', function () {
//   document.body.classList.toggle('dark');
// });

document.addEventListener('DOMContentLoaded', function () {
    const toggleBtn = document.getElementById('toggleBtn');
    const body = document.body;

    toggleBtn.addEventListener('click', function () {
        body.classList.toggle('dark-mode');
    });
});



let backtop = document.getElementById("backtop");

function toggleBacktop() {
  if (
    document.body.scrollTop > 100 ||
    document.documentElement.scrollTop > 200
  ) {
    backtop.style.bottom = "20px";
  } else {
    backtop.style.bottom = "-50px";
  }
}