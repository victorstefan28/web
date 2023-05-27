window.onload = function()
{
	load();

}

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