"https://www.googleapis.com/books/v1/volumes?q="


let searchBar = document.querySelector("input");
let title = document.querySelector(".booktitle")
let search = document.querySelector(".go")
let cover = document.querySelector(".bookcover")
let description = document.querySelector(".description")
let author = document.querySelector(".author")

const fetchBook = function(){
  const xhr = new XMLHttpRequest()

  xhr.onreadystatechange = function() {
  if(xhr.readyState !== 4) return;
  const info = JSON.parse( xhr.response )
  title.innerHTML = info.items[0].volumeInfo.title;
  cover.setAttribute("src", info.items[0].volumeInfo.imageLinks.thumbnail )
  description.innerHTML = info.items[0].volumeInfo.description
  author.innerHTML = "by " + info.items[0].volumeInfo.authors.join(" & ")

  }
  xhr.open('GET', `https://www.googleapis.com/books/v1/volumes?q=${ searchBar.value }`);
  xhr.send();
}

search.addEventListener("click", fetchBook);
searchBar.addEventListener("change", fetchBook);
