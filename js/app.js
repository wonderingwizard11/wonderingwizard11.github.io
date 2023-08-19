function showRate() {
  var rate = document.getElementById("hourlyRate");
  rate.style.display = "block";
}

function hideRate() {
  var rate = document.getElementById("hourlyRate");
  rate.style.display = "none";
}

function contact() {
  var footer = document.getElementById("footer");
  footer.scrollIntoView({ behavior: "smooth" });
}
