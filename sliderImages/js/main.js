/*
------------------------------
METHOD: set the size of the canvas
------------------------------
*/
var svgElement = document.getElementById("countyMapContainer");
let sliderElement = document.getElementById("tobaccoYearSlider");


/*
------------------------------
METHOD: slider click interaction
------------------------------
*/
sliderElement.addEventListener("input", (event) => {
  const tobaccoYear = event.target.value;
  let currentTobaccoMap = document.getElementById("chart" + (tobaccoYear));
  console.log("chart" + (tobaccoYear))
  console.log(currentTobaccoMap)
  const channelStations = document.querySelectorAll(".chart");
  channelStations.forEach((element) => (element.classList.remove('active')))
  currentTobaccoMap.classList.add("active");
})


/*
------------------------------
METHOD: create a set of map images to be stacked on each other and revealed via the slider
------------------------------
*/
for (let x = 1996; x < 2013; x++) {
  let newDiv = document.createElement("div");
  newDiv.className = "chart";
  newDiv.id = "chart" + x;
  newDiv.setAttribute("data-year", x);

  let newDivText = document.createElement("h2");
  newDivText.className = "chartText";
  newDivText.textContent = x;
  newDivText.setAttribute("data-year", x);

  let newDivImage = document.createElement("img");
  newDivImage.src = "images/smokingLevels" + x + ".svg";
  newDivImage.className = "chartImage";
  newDivImage.setAttribute(
    "alt",
    "Map of every US county in the US, with the top 100 counties with US debt highlighted in red. These counties are generally concentratd in the Southeast, going as far west as Texas, and as far north as West Virginia."
  );
  newDiv.appendChild(newDivText);
  newDiv.appendChild(newDivImage);
  svgElement.appendChild(newDiv);
}

let firstMap = document.querySelector(".chart");
firstMap.classList.add("active");

