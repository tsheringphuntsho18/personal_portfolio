const toggleSwitch = document.getElementById("custom-toggle");

toggleSwitch.addEventListener("change", function () {
  if (this.checked) {
    // Handle the checked state
    console.log("Toggle switch is ON");
  } else {
    // Handle the unchecked state
    console.log("Toggle switch is OFF");
  }
});
