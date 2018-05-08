
// Set input field max to current year
const currentYear = ( new Date() ).getFullYear();
document.getElementById( 'search-year' ).setAttribute( 'max', currentYear );

//*********************  DOM Actions ******************************//

const DOM = {
  button: document.getElementById( 'search' ),

  removePrevious: function () {
    const prevImg = document.querySelector('img');
    if ( prevImg ) {
      prevImg.remove();
    }
    const prevDescrip = document.querySelector( 'p' );
    if (prevDescrip) {
      prevDescrip.remove();
    }
  },

  noneAlert: function () {
    const alert = document.createElement( 'p' );
    alert.innerText = "Sorry, no results for that year."
    document.body.appendChild( alert );
    this.button.innerText = "Again, again."
  },

  addImg: function (src) {
    const img = document.createElement( 'img' );
    img.src = src;
    document.body.appendChild( img );
  },

  addDescrip: function (src) {
    const descrip = document.createElement( 'p' );
    descrip.innerText = src;
    document.body.appendChild( descrip );
  }
};


////       ********************  MAIN FETCH  **********************         ////


const fetchSpace = function () {
  DOM.button.innerText = "It's coming..."
  const searchYear = document.getElementById( 'search-year' ).value;
  // start xhr...
  const xhr = new XMLHttpRequest();
  xhr.onreadystatechange = function () {
    if ( xhr.readyState !== 4 ) return;
    DOM.removePrevious();
    const spaceInfo = JSON.parse( xhr.response );
    // choose random image from that year
    const numImages = spaceInfo.collection.items.length;
    if ( 0 === numImages ) {
      DOM.noneAlert();
      return;
    }
    const seed = Math.floor( Math.random() * numImages );
    const chosen = spaceInfo.collection.items[ seed ];
    // add image
    const imgSrc = chosen.links[0].href;
    DOM.addImg( imgSrc );
    // add description
    const descripSrc = chosen.data[0].description;
    DOM.addDescrip( descripSrc );
    DOM.button.innerText = "Again, again."
  };
  xhr.open( 'GET', `https://images-api.nasa.gov/search?media_type=image&year_start=${ searchYear }&year_end=${ searchYear }` );
  xhr.send();
};



//////////////////////////////////////
////        Events                ////
//////////////////////////////////////

DOM.button.addEventListener( 'click', fetchSpace );
