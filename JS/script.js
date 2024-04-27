const outputDepth = document.getElementById("output-depth");
const outputDepthValue = document.getElementById("output-depth-value");

// Update the paragraph text with the current value of the range input
outputDepth.addEventListener("input", function () {
  outputDepth.style.setProperty("--range-value", outputDepth.value + "%");
  outputDepthValue.textContent = outputDepth.value;
  outputDepthValue.style.left = outputDepth.value + "%";
});
