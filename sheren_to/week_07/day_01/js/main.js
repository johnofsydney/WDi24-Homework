console.log('ajax google books');

const fetchBook = function () {
  const xhr = new XMLHttpRequest();
  xhr.onreadystatechange = function () {
    console.log('readyState', xhr.readyState);

    if (xhr.readyState !== 4) {
      return;
    }

    const info = JSON.parse( xhr.response );

    const h2 = document.createElement('h2');
    h2.innerHTML = `${ info['items'][0]['volumeInfo']['title'] }`;
    document.body.appendChild( h2 );

    const h3 = document.createElement('h3');
    h3.innerHTML = `${ info['items'][0]['volumeInfo']['authors'] }`;
    document.body.appendChild( h3 );

    const img = document.createElement('img');
    img.src = `${ info['items'][0]['volumeInfo']['imageLinks']['thumbnail'] }`;
    document.body.appendChild( img );

    const p = document.createElement('p');
    p.innerHTML = `${ info['items'][0]['volumeInfo']['description'] }`;
    document.body.appendChild( p );

  }

    const book_title = document.getElementById("user_input").value;
    console.log(book_title);
      xhr.open('GET', `https://www.googleapis.com/books/v1/volumes?q=title:${book_title}`);
      xhr.send();

  console.log('fetchBook is done');
};

const button = document.getElementsByTagName('button')[0];
button.addEventListener('click', fetchBook);
