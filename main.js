import { multiply, multiplyWithx } from './lib';
document.getElementById('submit').addEventListener ("click", function(){
  let d = document.getElementById("inputa").value;
  let e = document.getElementById("inputb").value;
  let f = document.getElementById("inputc").value;
  document.getElementById("psatu").innerHTML=multiply(d,e);
  document.getElementById("pdua").innerHTML=multiplyWithx(f);
});

