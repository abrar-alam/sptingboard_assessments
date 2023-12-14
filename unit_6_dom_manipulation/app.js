// 1
let v = document.getElementById("container");
console .dir(v);

//2
let w = document.querySelector("section#container");
console .dir(w);

//3

let x = document.querySelectorAll("li.second");


//4
let y = document.querySelectorAll("ol li.third");

//5
// w.innerText = 'Hello';
w.prepend("Hello")

//6
let z = document.querySelector("div.footer");
z.classList.add("main");

//7
z.classList.toggle("main");

//8

let li = document.createElement("li");

//9
li.innerText= "four";

//10
document.querySelector("ul").append(li);

//11
for  (let my_li of document.querySelectorAll("ol")){
    my_li.style.backgroundColor = "green";

}

// 12
document.querySelector("div.footer").remove();