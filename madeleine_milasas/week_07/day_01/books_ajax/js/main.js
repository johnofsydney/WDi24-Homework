

const fetchBook = function () {
  // get search input
  const search = document.getElementById('title').value;
  // make new xhr obj
  const xhr = new XMLHttpRequest();
  // xhr state change *async
  xhr.onreadystatechange = function () {
    if ( xhr.readyState !== 4 ) {
      return;
    }
    // convert string into object
    const book = JSON.parse( xhr.response );
    const bookCover = book.items[0].volumeInfo.imageLinks.thumbnail;
    // remove previous image
    prevImg = document.querySelector( 'img' );
    if (prevImg) {
      prevImg.parentNode.removeChild( prevImg );
    }
    // create img element and append
    const img = document.createElement( 'img' );
    img.src = bookCover;
    document.body.appendChild( img );
  }
  // set up xhr and make request *async
  xhr.open( 'GET', `https://www.googleapis.com/books/v1/volumes?q=${ search }` );
  xhr.send();
};


const button = document.getElementById('search');
button.addEventListener('click', fetchBook );
