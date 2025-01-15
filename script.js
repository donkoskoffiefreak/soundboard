
var sound1 = new Audio("sounds/song1_macmiller.mp3");
var sound2 = new Audio("sounds/song2_tyler.mp3");
var sound3 = new Audio("sounds/song3_chiefkeef.mp3");
var sound4 = new Audio("sounds/effect4.mp3");
var sound5 = new Audio("sounds/effect5.mp3");
var sound6 = new Audio("sounds/effect6.mp3");
var sound7 = new Audio("sounds/grappig7.mp3");
var sound8 = new Audio("sounds/grappig8.mp3");
var sound9 = new Audio("sounds/grappig9.mp3");
var sound10 = new Audio("sounds/alarm10.mp3");
var sound11 = new Audio("sounds/alarm11.mp3");
var sound12 = new Audio("sounds/alarm12.mp3");

var sounds = [
    sound1, sound2, sound3, sound4, sound5, sound6, sound7, sound8, sound9, sound10, sound11, sound12
];

function resetSounds(){
    for(var i=0; i<sounds.length; i++) {
        sounds[i].pause();
        sounds[i].currentTime = 0;
    }
}

function playSounds(button) {
    resetSounds();
    switch(button){
        case "button1":
            sound1.play();
            break;
        case "button2":
            sound2.play();
            break;
        case "button3":
            sound3.play();
        case "button4":
            sound4.play();
            break;
        case "button5":
            sound5.play();
            break;
        case "button6":
            sound7.play();
        case "button7":
            sound7.play();
            break;
        case "button8":
            sound8.play();
            break;   
        case "button9":
            sound9.play();
            break;
        case "button10":
            sound10.play();
            break;
        case "button11":
            sound11.play();
            break;
        case "button12":
            sound12.play();
            break;
    }
    
    
    
}
