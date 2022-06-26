function audioPlay(audio){

    switch (audio) {
        case 'w':
        var tom1 = new Audio("sounds/tom-1.mp3");
        tom1.play();
        break;
    case 'a':
        var tom2 = new Audio("sounds/tom-2.mp3");
        tom2.play();
        break;
    case 's':
        var tom3 = new Audio("sounds/tom-3.mp3");
        tom3.play();
        break;
    case 'd':
        var tom4 = new Audio("sounds/tom-4.mp3");
        tom4.play();
        break;
    case 'j':
        var snare = new Audio("sounds/snare.mp3");
        snare.play();
        break;
    case 'k':
        var crash = new Audio("sounds/crash.mp3");
        crash.play();
        break;
    case 'l':
        var kick = new Audio("sounds/kick-bass.mp3");
        kick.play();
        break;

    default: alert("wrong key ");
        break;
}
}

function buttonAnimation(cur_key){
    var after_effectkey =document.querySelector("."+cur_key);
    after_effectkey.classList.add("pressed");
setTimeout(function(){
    after_effectkey.classList.remove("pressed");
},100)

}

//  on key press
document.addEventListener("keydown",function(event){
    // console.log(event.key);
   var key=event.key;
   audioPlay(key);
   buttonAnimation(key)
  
})

//  on click
var btn = document.querySelectorAll("button")
for (var index = 0; index < document.querySelectorAll(".drum").length; index++) {
    btn[index].addEventListener("click", function () {
         var btn_text = this.innerHTML;
        audioPlay(btn_text);
        buttonAnimation(btn_text);
        
    })
}









