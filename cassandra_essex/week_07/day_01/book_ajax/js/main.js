const getBook = function(){
  const bookTitle = document.getElementsByTagName('input')[0].value;
  console.log(bookTitle);

  const xhr =new XMLHttpRequest();
  xhr.onreadystatechange = function (){
    console.log('readyState', xhr.readyState);
  if (xhr.readyState !== 4) {
    return;
  }


  const info = JSON.parse(xhr.response).items[0];
  const title = info.volumeInfo.title;
  const t = document.createElement('h2');
  t.innerHTML = `${title}`;
  document.body.appendChild(t);



  const image = info.volumeInfo.imageLinks.smallThumbnail;

  const i = document.createElement('img');
  i.src = `${image}`;
  document.body.appendChild(i);
  }

xhr.open('GET',`https://www.googleapis.com/books/v1/volumes?q=title:${bookTitle}`);
xhr.send();
};


const button = document.getElementsByTagName('button')[0];
button.addEventListener('click', getBook);
