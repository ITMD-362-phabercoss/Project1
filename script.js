function init() {
  var click = document.getElementById("submit");
  click.addEventListener("click", function() { alert("Thank you for signing up for our newsletter!") });
}
window.addEventListener('load', init);
