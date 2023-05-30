window.onload = function()
{
	load();

}
var is_admin = false;
function load()
{
	var darkModeToggle = document.querySelector('#dark-mode-toggle');
	darkModeToggle.onclick = toggleDarkMode;
	var is_dark = localStorage.getItem("dark");
	if(is_dark == "1")
	{
		var all_elem = document.querySelectorAll('*');
		all_elem.forEach(element => {
			element.classList.toggle('dark-mode');
		});
	}
	var footer = document.querySelector('footer p');
	var data = new Date();
	var p_d = document.createElement("p");
	//p_d.style.display = 'inline';
	p_d.innerHTML = data.getFullYear() + ' ' + data.getDate() + '/' + data.getMonth();
	footer.appendChild(p_d);

	/// adaugari in cos

	var colectie_prod = document.querySelectorAll(".card-body > .btn");
	console.log(colectie_prod[0]);
	var cart = document.querySelector(".cart-content");
	console.log(cart);
	for(var buton of colectie_prod)
	{
		buton.onclick = function()
		{
			var b = event.target;
			var div_p = b.parentElement;
			var titlu = div_p.querySelector(".card-title").innerHTML;
			console.log(titlu);
			var pret = (div_p.querySelector(".card-price").innerHTML);
			var pret_str = pret.split(" ");
			var pret_int = parseInt(pret_str[0]);
			console.log(pret_int);
			var add_crt = document.createElement("li");
			add_crt.innerHTML = titlu + "-" + pret;
			var ul_cart = cart.querySelector("ul");

			ul_cart.appendChild(add_crt);
			var total = document.querySelector(".cart-total");
			add_crt.onclick = function()
			{

				var pret_cos = parseInt((event.target.innerHTML.split("-")[1]).split(" ")[0]);
				total.innerHTML = (parseInt(total.innerHTML.split(" ")[0]) - pret_cos) + "Lei";
				event.target.remove();
				event.stopPropagation(); 
			}
			
			total.innerHTML = (parseInt(total.innerHTML.split(" ")[0]) + pret_int) + "Lei";
		}
	}
	/// raspuns node
	var formular = document.getElementById("contact-form");
	var rasp_contact = document.querySelector(".raspuns");
	if(formular != null)
	{
		formular.onsubmit = async function()
		{
			event.preventDefault();
			var data = new FormData(this);
			 var jsonData = {};
			 data.forEach(function(value, key) {
	    			jsonData[key] = value;
	  			});
			var rasp = await fetch("/contact", {
				method: "post",
				headers: {
	      			"Content-Type": "application/json"
	    		},
				body: JSON.stringify(jsonData)
			})
			var msg = await rasp.text();
			rasp_contact.innerHTML = msg;
			
		}
	}
	var help_red = document.querySelector(".dot");
	if(help_red != null){help_red.onclick = function()
		{
			console.log("help!!");
			window.location.href = "/contact"
		}}
}

function toggleDarkMode()
{
	//document.body.classList.toggle('dark-mode');
	var all_elem = document.querySelectorAll('*');
	all_elem.forEach(element => {
		element.classList.toggle('dark-mode');
	});
	var dark_local = localStorage.getItem("dark");
	if(dark_local == "1")
		localStorage.setItem("dark", "0");
	else 
		localStorage.setItem("dark", "1");
}

function randomHSLA(){
	var is_dark = localStorage.getItem("dark");
    if(is_dark == false)
    	return `hsla(${(360 * Math.random())}, 70%, 70%, 0.8)`
    else
    	return `hsla(${(360 * Math.random())}, 15%, 20%, 0.6)`
}

window.setInterval(function()
	{
		var footer = document.getElementsByTagName("footer");
		//footer.style.backgroundColor = randomHSLA();
		for(const elem of footer)
		{
			elem.style.backgroundColor = randomHSLA();
		}
	}
	,1000);

window.setTimeout(
	function()
	{
		var help = document.getElementsByClassName("dot");
		for(const elem of help)
		{
			elem.style.opacity = '1';
			elem.style.transition = 'opacity 0.8s ease'
		}
	}
	,3000);