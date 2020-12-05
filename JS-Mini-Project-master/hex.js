var button = document.getElementById('btn');
var colour = document.querySelector('.colour');
var arr = ['1','2','3','4','5','6','7','8','9','A','B','C','D','E','F'];
var all = document.querySelector('body');

button.addEventListener('click',function(){
    var c='#';
    for(var i=1;i<=6;i++) {
        var current = arr[Math.floor(Math.random()*arr.length)];
        c+=current;
    }
    colour.innerHTML = c;
    all.style.backgroundColor = c;
});