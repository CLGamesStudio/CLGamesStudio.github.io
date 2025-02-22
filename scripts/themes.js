const btn = document.getElementById("theme-button");
const link = document.getElementById("theme-link");
const darkTheme = "styles/styles.css";
const lightTheme = "styles/light.css";

btn.addEventListener("click", changeTheme);
window.addEventListener('load', () => {
	let theme = localStorage.getItem("theme") == "true";
	link.setAttribute("href", theme ? darkTheme : lightTheme);
});

function changeTheme() {
	let theme = localStorage.getItem("theme") == "true";
    let currTheme = link.getAttribute("href");

	theme = !theme;
	
	currTheme = theme ? darkTheme : lightTheme;
	link.setAttribute("href", currTheme);

    localStorage.setItem("theme", theme);
}