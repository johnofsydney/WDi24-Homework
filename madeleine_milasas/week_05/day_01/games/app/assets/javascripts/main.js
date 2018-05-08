let clown = 0;

const showImage = function () {
  img = document.createElement('img');
  img.setAttribute('src', `/assets/clown${ clown }.jpg`);
  img.setAttribute('class', 'creepy');
  $('.container').prepend(img)
  clown++;
  if ( clown == 3 ) {
    clown = 0;
  }
};

const removeAll = function () {
  document.querySelector('.creepy').remove();
  document.querySelector('.creepy-text').remove();
};

const showText = function () {
  text = document.createElement('h1');
  text.setAttribute('class', 'creepy-text');
  text.textContent = "HAVING FUN YET?"
  $('.container').prepend(text);
};


setTimeout(showImage, 3000);
setTimeout(showText, 4000);
setTimeout(removeAll, 6000);


setTimeout(showImage, 10000);
setTimeout(showText, 11000);
setTimeout(removeAll, 13000);

setTimeout(showImage, 20000);
setTimeout(showText, 21000);
setTimeout(removeAll, 23000);
