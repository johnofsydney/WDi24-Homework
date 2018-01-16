console.log("ready");

const tables = () => {
  for (var i = 1; i <= 12; i++) {

    for (var j = 1; j <= 12; j++) {
      console.log(`${j} x ${i} = ${j * i}`);
    }
  }
}

$(document).ready( ()=> {
  console.log(" onnected");
})

tables()
