console.log("is it working?");

//Part 1 Rectangle
const rectangle = {
  width: 4,
  length: 4,
};

const isSquare = function (square) {
if ( square.width === square.length) {
  console.log('rectangle is a square');
} else if ( square.width !== square.length) {
  console.log('rectangle is not a square');
}
};
isSquare(rectangle);

const area = function (ar) {
let areaOf = ar.width * ar.length;
console.log(`The area of the rectangle is ${areaOf} cm2`);
};
area(rectangle);

const perimeter = function (per) {
let perimeterOf = ( per.width + per.length ) * 2;
console.log(`The perimeter of the rectangle is ${perimeterOf}`);
};
perimeter(rectangle);


//Part 2 Triangle
const triangle = {
  sideA: 5,
  sideB: 4,
  sideC: 3,
};

const isEquilateral = function (eq) {
if ( eq.sideA === eq.sideB && eq.sideA === eq.sideC ) {
  console.log('triangle is equilateral');
} else {
  console.log('triangle is not equilateral')
}
};
isEquilateral(triangle);


const isIsosceles = function (iso) {
  if (iso.sideA === iso.sideB || iso.sideA === iso.sideC || iso.sideB === iso.sideC) {
    console.log( `the triangle is an isoceles triangle`);
  } else {
    console.log(`triangle is not an isoceles triangle`);
  }
};
isIsosceles(triangle);

const areaTri = function (ar) {
  let a = 0.5 * ar.sideA;//half base
  let a2 = Math.pow(a, 2);//half base squared
  let c = ar.sideB;//hypotenuse one side
  let c2 = Math.pow(c,2);//hypotenuse squared
  let h1 = c2 - a2;//find b2
  let height = Math.sqrt(h1);
  let areaOf = 0.5 * ar.sideA * height;
  console.log(`The area of the triangle is ${areaOf}`);
};
areaTri(triangle);


const isObtuse = function (ob) {
  console.log('working');
  let a = Math.pow(ob.sideA, 2);//a squared
  let b = Math.pow(ob.sideB, 2);//b squared
  let c = Math.pow(ob.sideC, 2);//c squared
  debugger;
  //(c * c) / 2 < (a * a) + (b * b) < (c * c)
  if ( a + b > c ) {
  console.log(`the triange is obtuse`);
} else {
  console.log(`the triangle is not obtuse`);
}
};
isObtuse(triangle);
