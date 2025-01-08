debugger;
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

function buttonPressed(button) {
    if(button == "button1"){ 
        resetSounds();
        sound1.play();
    }if(button == "button2"){ 
        resetSounds();
        sound2.play();
    }if(button == "button3"){ 
        resetSounds();
        sound3.play();
    }
    if(button == "button4"){ 
        resetSounds();
        sound4.play();
    }
    if(button == "button5"){ 
        resetSounds();
        sound5.play();
    }if(button == "button6"){ 
        resetSounds();
        sound6.play();
    }if(button == "button7"){ 
        resetSounds();
        sound7.play();
    }
    if(button == "button8"){ 
        resetSounds();
        sound8.play();
    }if(button == "button9"){ 
        resetSounds();
        sound9.play();
    }if(button == "button10"){ 
        resetSounds();
        sound10.play();
    }if(button == "button11"){ 
        resetSounds();
        sound11.play();
    }if(button == "button12"){ 
        resetSounds();
        sound12.play();
    }
    
    
}
