document.addEventListener("DOMContentLoaded", function () {
  // Get button element
  const changeColorBtn = document.getElementById("changeColorBtn");
  const container = document.querySelector(".container");

  // Array of background colors to cycle through
  const colors = [
    "#ffffff", // White (default)
    "#f8f8e8", // Light yellow
    "#e8f8f8", // Light blue
    "#f8e8f8", // Light purple
    "#e8f8e8", // Light green
  ];

  let colorIndex = 0;

  // Add click event listener to button
  changeColorBtn.addEventListener("click", function () {
    // Change to next color
    colorIndex = (colorIndex + 1) % colors.length;
    container.style.backgroundColor = colors[colorIndex];

    // Display a message
    console.log("Color changed to: " + colors[colorIndex]);
  });

  // Display welcome message in console
  console.log("Welcome to the Simple HTML Project!");
});
