// Create body
const body = document.body;

// Create header
const header = document.createElement("header");
header.className = "header";
body.append(header);

// Create title
const title = document.createElement("div");
title.className = "title";
title.textContent = "Etch-a-Sketch";
header.append(title);

// Create main
const main = document.createElement("main");
main.className = "main";
body.append(main);

// Create settings
const settings = document.createElement("div");
settings.className = "settings";
main.append(settings);

// Create slider container
const sliderContainer = document.createElement("div");
sliderContainer.className = "sliderContainer";
settings.append(sliderContainer);

// Create slider value text
const sliderValue = document.createElement("div");
sliderValue.className = "sliderValue";
sliderValue.innerHTML = "16 x 16";
sliderContainer.append(sliderValue);

// Create slider in settings
const slider = document.createElement("input");
slider.className = "slider";
slider.type = "range";
slider.value = "16";
slider.min = "1";
slider.max = "64";
sliderContainer.append(slider);

// Function to update slider value text
let sliderOutput = document.getElementsByClassName("sliderValue");
slider.oninput = function () {
  sliderValue.innerHTML = slider.value + " x " + slider.value;
};

// Create grid
const grid = document.createElement("div");
grid.className = "grid";
main.append(grid);

// Create footer
const footer = document.createElement("footer");
footer.className = "footer";
main.append(footer);
