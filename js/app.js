function renderBooks(filter = "") {

const bookList =
document.getElementById("bookList");

if(!bookList) return;

const filteredBooks =
books.filter(book =>
book.title.toLowerCase()
.includes(filter.toLowerCase())
);

bookList.innerHTML =
filteredBooks.map(book => `

<div class="card">

<img src="${book.image}" alt="${book.title}">

<h3>${book.title}</h3>

<p>
<strong>Author:</strong>
${book.author}
</p>

<p>
<strong>Price:</strong>
${book.price}
</p>

</div>

`).join("");

const searchInput =
document.getElementById("searchInput");

if(searchInput){

searchInput.addEventListener("input",
(event)=>{

renderBooks(event.target.value);

});

}

}

window.addEventListener(
"hashchange",
router
);

window.addEventListener(
"load",
router
);