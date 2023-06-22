 //For click with mouse.
for(var i=0; i<7; i++){
document.querySelectorAll("button")[i].addEventListener("click", function() {
     
        makeSound(this.innerHTML);
        buttonAnimation(this.innerHTML);
    });
}


//For click with keyboard 
document.addEventListener("keydown", function(event){
        makeSound(event.key);
        buttonAnimation(event.key);
});


//Click function
function makeSound(key){
    switch (key) {
        case ("w"):  
        var  kick= new Audio('./sounds/kick-bass.mp3');
        kick.play(); 
        break;
    
        case "a":  
        var  tom1= new Audio('./sounds/tom-1.mp3');
        tom1.play(); 
        break;
    
        case "s":  
        var  tom2= new Audio('./sounds/tom-2.mp3');
        tom2.play(); 
        break;
    
        case "d":  
        var  tom4= new Audio('./sounds/tom-4.mp3');
        tom4.play(); 
        break;
    
        case "j":  
        var  tom3= new Audio('./sounds/tom-3.mp3');
        tom3.play(); 
        break;
    
        case "k":  
        var  crash= new Audio('./sounds/crash.mp3');
        crash.play(); 
        break;
    
        case "l":  
        var  snare= new Audio('./sounds/snare.mp3');
        snare.play(); 
        break;
      
        default:console.log(this.innerHTML);
            
      }
};
function buttonAnimation(currentKey){
   var activateButton = document.querySelector("." + currentKey).classList.add("pressed");
    setTimeout(function(){
        document.querySelector("." + currentKey).classList.remove("pressed");
    }, 100);
}