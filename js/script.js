window.onload = function () {
	document.getElementById("header").innerHTML += "<nav id='menu'><div id='site_menu' class='site_menu'>" + 
													"<a id='home' href='https://ausf-software.github.io/'>Home</a>" + 
													"<a id='product' href='https://ausf-software.github.io/product'>Products</a>" + 
													"<a id='tutorials'>Tutorials</a>" + 
													"<a id='documentation'>Documentation</a>" + 
													"<a id='downloads'>Downloads</a>" + 
													"<a id='github' href='https://github.com/ausf-software'>GitHub</a>" + 
													"<a id='menu' class='icon' href='#'>&#9776;</a></div></nav>";
	
	document.getElementById("footer").innerHTML += "<div class='container'>" +
													"<div id='site_menu' class='site_menu'>" +
													"<a id='home' href='https://ausf-software.github.io/'>Home</a>" +
													"<a id='product' href='https://ausf-software.github.io/product'>Products</a>" +
													"<a id='tutorials'>Tutorials</a>" +
													"<a id='documentation'>Documentation</a>" +
													"<a id='downloads'>Downloads</a>" +
													"<a id='github' href='https://github.com/ausf-software'>GitHub</a></div>"+
													"<p class='cop'>AUSF-software &#169;2023</p></div>";
	
	document.getElementById("menu").onclick = function(){
		var x = document.getElementById('site_menu');
		if (x.className === "site_menu") {
			x.className += " responsive";
		} else {
			x.className = "site_menu";
		}
	}
};
