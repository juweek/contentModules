/*
------------------------------
METHOD: set the size of the canvas
------------------------------
*/
var svgElement = document.getElementById("treeMapContainer");
var buttonElements = document.querySelectorAll(".buttonsContainer button");
var chartElements = document.querySelectorAll("#treeMapContainer > div");

/*
------------------------------
METHOD: button click interaction
------------------------------
*/

buttonElements.forEach((element) =>
  element.addEventListener("click", (event) => {
    buttonElements.forEach((button) => {
      button.classList.remove("active");
    });

    let currentFilter = event.target.dataset.filter

    chartElements.forEach((chart) => {
      if (currentFilter == chart.dataset.chart) {
        chart.classList.add("active");
      }
      else {
        chart.classList.remove("active");
      }
    });

    event.target.classList.add("active");

    svgElement.classList = "";
    svgElement.classList.add(event.target.dataset.filter);
  })
);

//create a row of three HTML buttons 
