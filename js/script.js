var button = document.querySelector(".search-put");
var modal = document.querySelector(".search-form");

button.addEventListener("click", function (evt) {
  evt.preventDefault();
  modal.classList.toggle("modal-close");
});