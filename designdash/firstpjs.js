
window.onscroll = function() {myFunction()};
var navbar = document.getElementById("div1");

var sticky = navbar.offsetTop;

function myFunction() {
if (window.pageYOffset >= sticky) {
navbar.classList.add("sticky")
} else {
navbar.classList.remove("sticky");
}
}


var myIndex = 0;
carousel();

function carousel() {
  var i;
  var x = document.getElementsByClassName("mySlides");
  for (i = 0; i < x.length; i++) {
    x[i].style.display = "none";  
  }
  myIndex++;
  if (myIndex > x.length) {myIndex = 1}    
  x[myIndex-1].style.display = "block";  
  setTimeout(carousel, 500); // Change image every 2 seconds
}


function showDiv(Div) {
    var x = document.getElementById(Div);
    if(x.style.display=="none") {
        x.style.display = "block";
    } else {
        x.style.display = "none";
    }
}


document.getElementById("demo1").innerHTML = `<p style="color: rgb(235, 241, 241); margin-left: 110px;">PUBG</p>
<span class="fa fa-star checked" style="margin-left: 60px;"></span>
<span class="fa fa-star checked"></span>
<span class="fa fa-star checked"></span>
<span class="fa fa-star "></span>
<span class="fa fa-star"></span>`;

document.getElementById("demo2").innerHTML = `<p style="color: rgb(235, 241, 241); margin-left: 90px;">FANTASTIC</p>
<span class="fa fa-star checked" style="margin-left: 60px;"></span>
<span class="fa fa-star checked"></span>
<span class="fa fa-star checked"></span>
<span class="fa fa-star checked"></span>
<span class="fa fa-star"></span>`;
document.getElementById("demo3").innerHTML = `<p style="color: rgb(235, 241, 241); margin-left: 70px;">RACE WITH US</p>
<span class="fa fa-star checked" style="margin-left: 60px;"></span>
<span class="fa fa-star checked"></span>
<span class="fa fa-star checked"></span>
<span class="fa fa-star checked"></span>
<span class="fa fa-star checked"></span>`;

document.getElementById("demo4").innerHTML = `<p style="color: rgb(235, 241, 241); margin-left: 70px;">SMASH KARTS</p>
<span class="fa fa-star checked" style="margin-left: 60px;"></span>
<span class="fa fa-star checked"></span>
<span class="fa fa-star checked"></span>
<span class="fa fa-star checked"></span>
<span class="fa fa-star checked"></span>`;

document.getElementById("demo5").innerHTML = `<p style="color: rgb(235, 241, 241); margin-left: 70px;">ELDEN RING</p>
<span class="fa fa-star checked" style="margin-left: 60px;"></span>
<span class="fa fa-star checked"></span>
<span class="fa fa-star checked"></span>
<span class="fa fa-star "></span>
<span class="fa fa-star"></span>`;

document.getElementById("demo6").innerHTML = `<p style="color: rgb(235, 241, 241); margin-left: 70px;">THE WITCHER</p>
<span class="fa fa-star checked" style="margin-left: 60px;"></span>
<span class="fa fa-star checked"></span>
<span class="fa fa-star checked"></span>
<span class="fa fa-star checked"></span>
<span class="fa fa-star"></span>`;

document.getElementById("demo7").innerHTML = `<p style="color: rgb(235, 241, 241); margin-left: 70px;">GHOSTRUNNER</p>
<span class="fa fa-star checked" style="margin-left: 60px;"></span>
<span class="fa fa-star checked"></span>
<span class="fa fa-star checked"></span>
<span class="fa fa-star checked"></span>
<span class="fa fa-star"></span>`;

document.getElementById("demo8").innerHTML = `<p style="color: rgb(235, 241, 241); margin-left: 70px;">GODZILLA 2</p>
<span class="fa fa-star checked" style="margin-left: 60px;"></span>
<span class="fa fa-star checked"></span>
<span class="fa fa-star checked"></span>
<span class="fa fa-star checked"></span>
<span class="fa fa-star checked"></span>`;

document.getElementById("demo9").innerHTML = `<p style="color: rgb(235, 241, 241); margin-left: 90px;">VECTOR</p>
<span class="fa fa-star checked" style="margin-left: 60px;"></span>
<span class="fa fa-star checked"></span>
<span class="fa fa-star checked"></span>
<span class="fa fa-star checked"></span>
<span class="fa fa-star"></span>`;

document.getElementById("demo10").innerHTML = `<p style="color: rgb(235, 241, 241); margin-left: 110px;">HADES</p>
<span class="fa fa-star checked" style="margin-left: 60px;"></span>
<span class="fa fa-star checked"></span>
<span class="fa fa-star checked"></span>
<span class="fa fa-star checked"></span>
<span class="fa fa-star checked"></span>`;

document.getElementById("demo11").innerHTML = `<p style="color: rgb(235, 241, 241); margin-left: 70px;">GOD OF WAR</p>
<span class="fa fa-star checked" style="margin-left: 60px;"></span>
<span class="fa fa-star checked"></span>
<span class="fa fa-star checked"></span>
<span class="fa fa-star checked"></span>
<span class="fa fa-star ckecked"></span>`;

document.getElementById("demo12").innerHTML = `<p style="color: rgb(235, 241, 241); margin-left: 70px;">DEATH LOOP</p>
<span class="fa fa-star checked" style="margin-left: 60px;"></span>
<span class="fa fa-star checked"></span>
<span class="fa fa-star checked"></span>
<span class="fa fa-star checked"></span>
<span class="fa fa-star"></span>`;

document.getElementById("demo13").innerHTML = `<p style="color: rgb(235, 241, 241); margin-left: 80px;">SIMULATOR</p>
<span class="fa fa-star checked" style="margin-left: 60px;"></span>
<span class="fa fa-star checked"></span>
<span class="fa fa-star checked"></span>
<span class="fa fa-star checked"></span>
<span class="fa fa-star"></span>`;

document.getElementById("demo14").innerHTML = `<p style="color: rgb(235, 241, 241); margin-left: 80px;">HITMAN-3</p>
<span class="fa fa-star checked" style="margin-left: 60px;"></span>
<span class="fa fa-star checked"></span>
<span class="fa fa-star checked"></span>
<span class="fa fa-star checked"></span>
<span class="fa fa-star"></span>`;

document.getElementById("demo15").innerHTML = `<p style="color: rgb(235, 241, 241); margin-left: 60px;">DEATH STARNDING</p>
<span class="fa fa-star checked" style="margin-left: 60px;"></span>
<span class="fa fa-star checked"></span>
<span class="fa fa-star checked"></span>
<span class="fa fa-star checked"></span>
<span class="fa fa-star"></span>`;

document.getElementById("demo16").innerHTML = `<p style="color: rgb(235, 241, 241); margin-left: 70px;">MASS EFFECT</p>
<span class="fa fa-star checked" style="margin-left: 60px;"></span>
<span class="fa fa-star checked"></span>
<span class="fa fa-star checked"></span>
<span class="fa fa-star checked"></span>
<span class="fa fa-star"></span>`;

document.getElementById("demo17").innerHTML = `<p style="color: rgb(235, 241, 241); margin-left: 110px;">pubg</p>
<span class="fa fa-star checked" style="margin-left: 60px;"></span>
<span class="fa fa-star checked"></span>
<span class="fa fa-star checked"></span>
<span class="fa fa-star checked"></span>
<span class="fa fa-star"></span>`;

