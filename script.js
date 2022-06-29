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

// Create slider value text
const sliderValue = document.createElement("div");
sliderValue.className = "sliderValue";
sliderValue.textContent = "1x1";
settings.append(sliderValue);

// Create slider in settings
const Slider = document.createElement("input");
Slider.className = "Slider";
Slider.type = "range";
Slider.value = "16";
Slider.min = "1";
Slider.max = "64";
settings.append(Slider);

// Create grid
const grid = document.createElement("div");
grid.className = "grid";
main.append(grid);

// Create footer
const footer = document.createElement("footer");
footer.className = "footer";
main.append(footer);
