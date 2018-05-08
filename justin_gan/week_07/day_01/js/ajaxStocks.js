// const fetchQuote = function () {
//   const query = document.getElementById( 'search' ).value
//
//   console.log( query );
//
//   const xhr = new XMLHttpRequest();
//   xhr.onreadystatechange = function () {
//     if ( xhr.readyState !== 4 ) {
//       return;
//     }
//     const stockInfo = JSON.parse( xhr.response );
//     const price = stockInfo.l;
//
//     // const div = document.createElement( 'div' );
//     // div.innerHTML = `<img src=${ thumbnail }>`;
//     // document.body.appendChild( div );
//     let stockResult = document.getElementById( 'stock-result' );
//     stockResult.innerHTML = `<p>${ price }</p>`;
//   }
//   xhr.open( 'GET', `http://finance.google.com/finance/info?client=ig&q=NASDAQ%3A${ query }`);
//   xhr.send();
// }
//
//
// const stockSubmit = document.getElementById( 'stock-submit' );
// stockSubmit.addEventListener( 'click', fetchQuote );
