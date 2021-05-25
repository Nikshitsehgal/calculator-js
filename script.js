/**********************
 ***********************
 *****Nikshit Sehgal****
 ***********************
 ***********************/

let firstnumber;
let myoperator;

function setnumber(n) {
  document.getElementById("abcd").value += n;
}

function operation(o) {
  firstnumber = document.getElementById("abcd").value;
  document.getElementById("abcd").value = "";
  myoperator = o;
}

var secondnumber;

function result() {
  secondnumber = document.getElementById("abcd").value;
  if (myoperator == "+") r = parseInt(firstnumber) + parseInt(secondnumber);
  else if (myoperator == "-")
    r = parseInt(firstnumber) - parseInt(secondnumber);
  else if (myoperator == "/")
    r = parseInt(firstnumber) / parseInt(secondnumber);
  else if (myoperator == "*")
    r = parseInt(firstnumber) * parseInt(secondnumber);
  document.getElementById("abcd").value = r;
}

function clear1() {
  document.getElementById("abcd").value = "";
}

function myTimeer() {
  let d = new Date();
  let t = d.toLocaleTimeString();
  document.getElementById("mytimer").innerHTML = t;
  // setTimeout(myTimeer,1000);
}
setInterval(myTimeer, 2000);

myTimeer();
