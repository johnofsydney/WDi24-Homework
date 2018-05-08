// const bookInfo = function () {
//
//   const xhr = new XMLHttpRequest();
//
//   xhr.onreadystatechange = function () {
//     console.log('readyState', xhr.readyState);
//     if ( xhr.readyState !== 4 ) {
//       return;
//     }
//
//
//       const info = JSON.parse( xhr.response );
//
//
//       const p = document.createElement('p');
//       p.innerHTML = `${ info.items[0].volumeInfo.title}`;
//       document.body.appendChild( p );
//
//       const bookImage = document.createElement('img');
//       bookImage.src = info.items[0].volumeInfo.imageLinks.smallThumbnail;
//       document.body.appendChild( bookImage );
//       // console.log(info);
//       console.log(info);
//       // console.log(cats.items[0].volumeInfo.title)
//   }
//   xhr.open( 'GET', `https://www.googleapis.com/books/v1/volumes?q=cats`);
//   xhr.send();
//   console.log( 'book info is done' );
// };
//
// bookInfo();
//
// const inputField = document.getElementById('#input1');
// inputField.addEventListener('input', function () {
//   const input = this.value;
// });
//
// const button = document.getElementsByTagName('button')[0];
// button.addEventListener('click', bookInfo);


// const form = document.getElementById('title-search');
// form.addEventListener('submit', function ( event ) {
//   event.preventDefault(); // essential if you need a form, stay on same page
//   // get users query
//   const title = document.getElementById('query').value;
//   // make ajax request for title
//   const xhr = new XMLHttpRequest();
//   xhr.onreadystatechange = function () {
//     if ( xhr.readyState !== 4 ) { return; }
//
//     const info = JSON.parse( xhr.response );
//
//     if ( info.totalItems === 0 ) {
//       alert('title not found');
//       return;
//     }
//
//     const cover = info.items[0].volumeInfo.imageLinks.smallThumbnail;
//     document.getElementById('cover').setAttribute('src', cover);
//   }
//   xhr.open( 'GET', 'https://www.googleapis.com/books/v1/volumes?q=title:' + title );
//   xhr.send();
//     // show the book cover image on page
// });

// JQUERY AJAX
// $(document).ready(function () {
//   const $form = $('#title-search');
//   $form.on('submit', function ( e ) {
//     e.preventDefault(); // dont leave this page
//
//     const title = $('#query').val();
//
//     $.ajax(`https://www.googleapis.com/books/v1/volumes?q=title:${ title }`, {
//       success: function ( info ) {
//         if ( info.totalItems === 0 ) {
//           alert('title not found');
//           return;
//         }
//
//         const cover = info.items[0].volumeInfo.imageLinks.smallThumbnail;
//         const title = info.items[0].volumeInfo.title;
//
//         const $image = $('#cover');
//         $image.attr('src', cover);
//         $image.attr('title', title);
//       }
//     });
//   });
// });

// $.ajax('http://numbersapi.com/random/trivia?json').done(function (info) {
//   console.log(info);
// });

const fetchBook = function (e) {
  e.preventDefault(); // Don't leave this page.

  const title = $('#query').val();
  // $.ajax / $.get
  $.getJSON(`https://www.googleapis.com/books/v1/volumes?q=title:${ title }`).done(function (info) {
    const cover = info.items[0].volumeInfo.imageLinks.thumbnail;
    const $image = $('#cover');
    $image.attr('src', cover);
  }).done(function (info) {
    const title = info.items[0].volumeInfo.title;
    const $image = $('#cover');
    $image.attr('title', title);
  }).fail(function () {
    alert('Something bad happened');
  });
};

$(document).ready(function () {
  $('#title-search').on('submit', fetchBook);
});
