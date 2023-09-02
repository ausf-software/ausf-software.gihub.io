class News {
	constructor (data, title, _text, site) {
		this.data = data;
		this.title = title;
		this._text = _text;
		this.site = site;
	}
	
	toString() {
		return "<div><h3>"+ this.data + "<h1>" + this.title + 
				"</div><div class = 'text-news'><p>" + this._text + 
				"<br></div><div><a href = '" + this.site + "'>Read more</a></div>";
	}
};

const news = [
	new News ("Apr 5, 2023", "Update: Finite state machine calculator", "Added the calculation of the canonical equation, and the construction of state encoding tables and input sets", ""),
	new News ("Apr 4, 2023", "HotFix: Finite state machine calculator", "A few negative values no longer pose a threat", ""),
	new News ("Apr 2, 2023", "Realise: Finite state machine calculator", "A finite state machine calculator from a given linear function of the form: f(x₁, x₂, ... , x₃₂) = α₁x₁ + α₂x₂ + ... + α₃₂x₃₂ + β", "")
];

document.getElementById('n1').innerHTML = news[0].toString();
document.getElementById('n2').innerHTML = news[1].toString();
document.getElementById('n3').innerHTML = news[2].toString();