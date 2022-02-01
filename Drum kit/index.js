// varijabla ce poprimiti vrijednost ukupnog broja elemenata s imenom klase drum
var numberOfButtons = document.getElementsByClassName("drum").length;

// napraviti while petlju koja ce se ispucati onoliko puta koliko je duzina broja elemenata s klasom drum
var i = 0;
while( i < numberOfButtons){
    document.getElementsByClassName("drum")[i].addEventListener("click", buttonClicked);
    i++;
};

// funkcija određuje koji button je pritisnut i poziva drugu funkciju kojoj dodijeljuje parametar buttonPressed
function buttonClicked(){
    var buttonPressed = this.innerHTML
    soundEffect(buttonPressed);
    buttonAnimation(buttonPressed)
    console.log(buttonPressed);
}

// dodijeljuje event listener cijelom dokumentu
document.addEventListener("keydown", keyPressed);

function keyPressed(e){
    soundEffect(e.key);
    buttonAnimation(e.key)
    console.log(e.key);
}



function soundEffect(key){
    switch (key) {
        case "w":
           var tom1 = new Audio("sounds/tom-1.mp3");
           tom1.play();
           break;

        case "a":
            var tom2 = new Audio("sounds/tom-2.mp3");
           tom2.play();
           break;

        case "s":
            var tom3 = new Audio("sounds/tom-3.mp3");
           tom3.play();
           break;

        case "d":
            var tom4 = new Audio("sounds/tom-4.mp3");
            tom4.play();
        break;

        case "j":
            var snare = new Audio("sounds/snare.mp3");
           snare.play();
           break;

        case "k":
            var crash = new Audio("sounds/crash.mp3");
           crash.play();
           break;

        case "l":
            var kick = new Audio("sounds/kick-bass.mp3");
           kick.play();
           break;

       default: console.log(buttonInnerHTML);
           break;
   }
}


function buttonAnimation(currentKey){

    var activeButton = document.querySelector("." + currentKey)    
    activeButton.classList.add("pressed")
    setTimeout(function() {
        activeButton.classList.remove("pressed");
    }, 100);

}