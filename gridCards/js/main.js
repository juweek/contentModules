/*
------------------------------
METHOD: set the size of the canvas
------------------------------
*/
// Get the modal
// Get the button that opens the modal
var btn = document.querySelectorAll(".card");

let modal = document.querySelector(".modal-content");


btn.forEach((element) =>
  element.addEventListener("click", (event) => {
    modal.classList.add("active");
  })
);

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks on <span> (x), close the modal
span.onclick = function () {
  modal.classList.remove("active");
};


//create a row of three HTML buttons
