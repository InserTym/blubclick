let l = false;
let count = 0;
function on() {
  if (l == false) {
  document.getElementById('blub').src='./image/1702324082835.png';
  document.getElementById('on').src='image/1702318088887.png';
  document.getElementById("header").style.backgroundColor = "#1c1c1c";
  document.getElementById("footer").style.backgroundColor = "#1c1c1c";
  document.getElementById("counts").style.color = "white";
  document.getElementById("header").style.boxShadow = "0 0 50px 20px #1c1c1c";
  document.body.style.backgroundColor = "#1C1C1C" ;
  count++;
  document.getElementById('counts').innerHTML = count;
  return l = true;
  } else if (l == true) {
    document.getElementById('blub').src="./image/1702324257031.png";
    document.getElementById('on').src="./image/1702319936850.png";
    document.body.style.backgroundColor = "white";
    document.getElementById("header").style.backgroundColor = "#464451";
    document.getElementById("footer").style.backgroundColor = "#464451";
    document.getElementById("counts").style.color = "#293133";
  document.getElementById("header").style.boxShadow = "0 0 50px 20px #293133";
    return l  = false;
  }
}
