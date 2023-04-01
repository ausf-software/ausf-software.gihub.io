// var lan = 0;

// function switchLanguage() {
//   if(lan == 0){
//   	setRussianLanguage();
//   	lan = 1;
//   } else {
//   	setEnglishLLanguage();
//   	lan = 0;
//   }
// }

// function setRussianLanguage() {
//   document.querySelector('#product').textContent = "Продукты";
//   document.querySelector('#tutorials').textContent = "Руководства";
//   document.querySelector('#documentation').textContent = "Документация";
//   document.querySelector('#downloads').textContent = "Скачать";
//   document.getElementById("lang_img").src="https://raw.githubusercontent.com/gosquared/flags/master/flags/flags/flat/32/Russia.png";
// }

// function setEnglishLLanguage() {
//   document.querySelector('#product').textContent = "Products";
//   document.querySelector('#tutorials').textContent = "Tutorials";
//   document.querySelector('#documentation').textContent = "Documentation";
//   document.querySelector('#downloads').textContent = "Downloads";
//   document.getElementById("lang_img").src="https://raw.githubusercontent.com/gosquared/flags/master/flags/flags/flat/32/United-States.png";
// }


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