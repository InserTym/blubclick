let l = false;
let count = 0;
function on() {
  if (l == false) {
  document.getElementById('blub').src='https://media.discordapp.net/attachments/1183497336056451126/1183857819720617984/1702324082835.png?ex=6589dc83&is=65776783&hm=12480c56ca782f73ab31c9e15ebb04cb674d8b5c236b59fd0e6eed67122904e2&';
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
    document.getElementById('blub').src="https://media.discordapp.net/attachments/1183497336056451126/1183858559096729600/1702324257031.png?ex=6589dd33&is=65776833&hm=cbce50a1e2a49dca890c7c72283223c949d5639df9703882c3fec5203ff2d82c&";
    document.getElementById('on').src="https://media.discordapp.net/attachments/1183497336056451126/1183840438499684442/1702319936850.png?ex=6589cc53&is=65775753&hm=c0bb7b8bd957110640982a007818f4cdc2bd0353059369e35e1d36f304926f9a&";
    document.body.style.backgroundColor = "white";
    document.getElementById("header").style.backgroundColor = "#464451";
    document.getElementById("footer").style.backgroundColor = "#464451";
    document.getElementById("counts").style.color = "#293133";
  document.getElementById("header").style.boxShadow = "0 0 50px 20px #293133";
    return l  = false;
  }
}
