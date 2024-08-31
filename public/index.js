for(var k=0;k<7;k++)
{
var selButton=document.getElementsByClassName("drum")[k].addEventListener("click", w);
}

function w(){
    makeSound(this.innerHTML);  
    makeAnimation(this.innerHTML); 
}

document.addEventListener("keydown", function(event){
    var v=event.key;
    makeSound(v);
    makeAnimation(v);
});




function makeSound(v){
    if(v==="w"){ad("tom-1");}
    else if(v==="a"){ad("tom-2");}
    else if(v==="s"){ad("tom-3");}
    else if(v==="d"){ad("tom-4");}
    else if(v==="j"){ad("crash");}
    else if(v==="k"){ad("kick-bass");}
    else if(v==="l"){ad("snare");}
}

function ad(x){
    var audio=new Audio('./sounds/' + x + '.mp3');
    audio.play();
}

function makeAnimation(currentKey){
    var ele=document.querySelector("." + currentKey);
    ele.classList.add("pressed");

    setTimeout(function(){
        ele.classList.remove("pressed");
    },100);
}
