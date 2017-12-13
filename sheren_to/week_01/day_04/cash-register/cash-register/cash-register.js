console.log('tester');

//cash register
// Input
const cartForParty = {
  banana: "1.25",
  handkerchief: ".99",
  Tshirt: "25.01",
  apple: "0.60",
  nalgene: "10.34",
  proteinShake: "22.36"
};

// Output
//cashRegister(cartForParty)); // 60.55
const items = [
  { itemName: "banana", itemPrice: "1.25" },
  { itemName: "handkerchief", itemPrice: "0.99" },
  { itemName: "Tshirt", itemPrice: "25.01" },
  { itemName: "apple", itemPrice: "0.60" },
  { itemName: "nalgene", itemPrice: "10.34" },
  { itemName: "proteinShake", itemPrice: "22.36" }
];

const cashRegister = function ( shoppingList ) {
  let total = 0;
  for ( let prices in cartForParty ) {
    console.log(parseFloat(cartForParty[prices]));
    total += parseFloat(cartForParty[prices]);
  }
  console.log(total);
};
cashRegister(cartForParty);
