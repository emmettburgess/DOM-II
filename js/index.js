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
signBtn1.addEventListener("click", function(event){
    TweenLite.to(signBtn1, 1, {rotation: 360});
});

signBtn2.addEventListener("click", function(){
    signBtn2.style.backgroundColor = "green";
    signBtn2.style.color = "black";
    setTimeout(function(){
        signBtn2.style.color = "white";
        signBtn2.style.backgroundColor = "#17A2B8";
    }, 500);
}, false);
signBtn2.addEventListener("click", function(event){
    TweenLite.to(signBtn2, 1, {rotation: 360});
});

signBtn3.addEventListener("click", function(){
    signBtn3.style.backgroundColor = "yellow";
    signBtn3.style.color = "black";
    setTimeout(function(){
        signBtn3.style.color = "white";
        signBtn3.style.backgroundColor = "#17A2B8";
    }, 500);
}, false);
signBtn3.addEventListener("click", function(event){
    TweenLite.to(signBtn3, 1, {rotation: 360});
});

let navs = Array.from(document.getElementsByClassName("nav-link"));
console.log(navs);

let nav1 = navs[0];

nav1.addEventListener("mouseover", function() {
    nav1.style.color = "#17A2B8";

    setTimeout(function(){
        nav1.style.color = "black";
    }, 500);
}, false);



// let contentPickEle = document.querySelector(".content-pick");
// contentPickEle.addEventListener("click", event => {
//   if (event.target.className === "btn") {

//       event.target.style.backgroundColor = "green";
//       event.target.color = "white";
 
//   }
// });

let navColor = document.querySelector('header .nav') ;

navColor.addEventListener("mouseover", function(event) {
    event.target.style.color = "green";

    setTimeout(function() {
        event.target.style.color = "";
    }, 500);
}, false);

let headerChange = document.querySelectorAll('.text-content');

headerChange.forEach(header => {
    header.addEventListener("wheel", function(event) {
        event.target.style.color = "blue";
    });
});

document.addEventListener("copy", function(event){
    event.preventDefault();
    alert("Write your own content, you pleb.");
});

let title = document.querySelector(".logo-heading");
title.addEventListener("click", function(event){
    TweenLite.to(title, 1, {rotation: 360});
});

document.addEventListener("keydown", function(event){
    if (event.keyCode === 81) {
        alert("Q was pressed.");
    };
});


window.addEventListener("load", (event) => {
    alert("Page is loaded");
});

title.addEventListener("dblclick", function(event) {
    event.target.style.color = "grey";
});

nav1.addEventListener("click", function(){
    alert("You're on the homepage, idiot.");
});