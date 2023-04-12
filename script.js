const btn = document.querySelectorAll(".btn");

btn.forEach(function (button) {
  console.log(button);
  button.addEventListener("click", function (e) {
    const showText = e.currentTarget.parentElement.nextElementSibling;
    showText.classList.toggle("ans");
  });
});
