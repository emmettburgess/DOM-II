// Your code goes here

let signBtns = Array.from(document.getElementsByClassName("btn"));

let signBtn1 = signBtns[0];
let signBtn2 = signBtns[1];
let signBtn3 = signBtns[2];

signBtn1.addEventListener("click", function(){
    signBtn1.style.backgroundColor = "red";
    signBtn1.style.color = "black";
    setTimeout(function(){
        signBtn1.style.color = "white";
        signBtn1.style.backgroundColor = "#17A2B8";
    }, 500);
}, false);

signBtn2.addEventListener("click", function(){
    signBtn2.style.backgroundColor = "green";
    signBtn2.style.color = "black";
    setTimeout(function(){
        signBtn2.style.color = "white";
        signBtn2.style.backgroundColor = "#17A2B8";
    }, 500);
}, false);

signBtn3.addEventListener("click", function(){
    signBtn3.style.backgroundColor = "yellow";
    signBtn3.style.color = "black";
    setTimeout(function(){
        signBtn3.style.color = "white";
        signBtn3.style.backgroundColor = "#17A2B8";
    }, 500);
}, false);

let navs = Array.from(document.getElementsByClassName("nav-link"));
console.log(navs);

let nav1 = navs[0];
nav1.addEventListener("mouseover", function() {
    nav1.style.color = "#17A2B8";

    setTimeout(function(){
        nav1.style.color = "black";
    }, 500);
}, false);



let contentPickEle = document.querySelector(".content-pick");
contentPickEle.addEventListener("click", event => {
  if (event.target.className === "btn") {

      event.target.style.backgroundColor = "green";
      event.target.color = "white";
 
  }
});