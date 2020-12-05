var button = document.getElementById('btn');
var colour = document.querySelector('.colour');
var colours = ['rgb(66,135,245)','rgb(201,135,245)','rgb(104,224,74)','rgb(224,182,74)','rgb(255,168,245)'];
var all = document.querySelector('body');

button.addEventListener('click',function(){
    var current = colours[Math.floor(Math.random()*5)];
    colour.innerHTML = current;
    all.style.backgroundColor = current;
});