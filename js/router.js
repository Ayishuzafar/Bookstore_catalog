function router() {

const app = document.getElementById("app");

const route = window.location.hash || "#home";

if(route === "#home") {

app.innerHTML = `
<div class="container">
<h1>📚 Welcome to BookVerse</h1>
<p>Discover your next favorite book.</p>
</div>
`;

}

else if(route === "#books") {

app.innerHTML = `
<div class="container">

<h1>Books Collection</h1>

<input
type="text"
id="searchInput"
class="search-box"
placeholder="Search books...">

<div id="bookList" class="books"></div>

</div>
`;

renderBooks();

}

else if(route === "#about") {

app.innerHTML = `
<div class="container">
<h1>About BookVerse</h1>

<p>
BookVerse is a modern online book catalog
built using HTML, CSS and JavaScript.
</p>

</div>
`;

}

else if(route === "#contact") {

app.innerHTML = `
<div class="container">
<h1>Contact</h1>

<p>Email: support@bookverse.com</p>

</div>
`;

}

}