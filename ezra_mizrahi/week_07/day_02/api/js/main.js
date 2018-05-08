const getPokemon = function ( e ) {
  e.preventDefault(); // don't leave this page

  const name = $('#query').val();

  $.getJSON(`https://pokeapi.co/api/v2/pokemon/${ name }`).done(function (info) {
    const pokemonWeight = info.weight;
    console.log(pokemonWeight + 'kg');
  }).done(function (info) {
    console.log(info.sprites.front_shiny);
    const sprite = info.sprites.front_shiny;
    const $image = $('#sprite');
    $image.attr('src', sprite);
  }).fail(function () {
    alert('how...how could you mess this up?');
  });
};

$(document).ready(function () {
  $('#pokemon-search').on('submit', getPokemon);
});
