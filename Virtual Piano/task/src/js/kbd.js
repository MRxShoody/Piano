
document.addEventListener('keydown',function (event){
   new Audio("white_keys/" + event.key.toUpperCase() + ".mp3").play().then(r => console.log(r));
});



