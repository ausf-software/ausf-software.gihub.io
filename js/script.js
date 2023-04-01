window.onload = function () {
  document.getElementById("menu").onclick = function(){
  var x = document.getElementById('site_menu');
    if (x.className === "site_menu") {
      x.className += " responsive";
    } else {
      x.className = "site_menu";
    }
  }
};