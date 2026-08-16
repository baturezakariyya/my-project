const h1 = document.querySelector("h1");
const img = document.querySelector("img");

// text / HTML
h1.textContent = "Hello Welccome to the CSC220: Web Development II ";
h1.innerHTML = "Hello <em>CSC220</em>";

// attributes
img.setAttribute("alt", "logo");

// inline style
h1.style.color = "red";

// classes
h1.classList.add("highlight");
h1.classList.remove("hidden");
h1.classList.toggle("dark");