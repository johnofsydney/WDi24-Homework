// Atbash Cipher - JavaScript
//
// The Atbash cipher is a simple substitution cipher that relies on transposing all the letters in the alphabet such that the resulting alphabet is backwards. The first letter is replaced with the last letter, the second with the second-last, and so on.
//
// An Atbash cipher for the Latin alphabet would be as follows:
//
// Plain:  abcdefghijklmnopqrstuvwxyz
// Cipher: zyxwvutsrqponmlkjihgfedcba
// It is a very weak cipher because it only has one possible key, and it is a simple monoalphabetic substitution cipher. However, this may not have been an issue in the cipher's time.
//
// Examples
//
// Encoding "test" gives "gvhg"
// Decoding "gvhg" gives "test"

console.log("connected");

const atbash = {

  alphaArray: "abcdefghijklmnopqrstuvwxyz".split(""),


  code: function (string) {
    console.log(this.alphaArray);
    console.log(string);
    stringArray = string.split("");
    $.each(stringArray, function (index, value) {
      console.log(index, value);
    });

  },

  decode: function (string) {
    console.log(string);
  }

}
