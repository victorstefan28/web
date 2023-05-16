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