var boxes = document.getElementsByClassName('box');
var boxesContainer=document.querySelector('.boxes');
var overlay = document.getElementById('overlay');
var i=0;
var shapes=[];
var boxess=[];
var counter=0;
Array.from(boxes).forEach(box=>{
    box.addEventListener('click',function(e){
        i++;
        boxess[i-1]=e.currentTarget;
        box.classList.add("click-card");
        var clicked=document.getElementsByClassName('click-card');
        
        shapes[i-1]=box.innerHTML;
        if(i%2 == 0){    
            if(shapes[i-1]==shapes[i-2]){
                counter++;
                console.log(counter);
                setTimeout(function () {
                    boxess[i - 1].classList.add("correct");
                    boxess[i - 2].classList.add("correct");
                    if(counter==8){
                        setTimeout(function(){
                            boxesContainer.classList.add('hide');
                            overlay.classList.add('visible');
                        },100);
                    }
                }, 0)
                
            }
            else{
                setTimeout(function(){
                    boxess[i - 1].classList.add("wrong");
                    boxess[i - 2].classList.add("wrong");

                },0)
               
               setTimeout(function(){                    boxess[i-1].classList.remove("click-card");
               boxess[i-2].classList.remove("click-card");
               boxess[i-1].classList.remove("wrong");
               boxess[i-2].classList.remove("wrong");

                } ,700)
            }
        }
        
    })
})

var playAgain=document.getElementById('play-again');
playAgain.addEventListener('click',(e)=>{
    location.reload();
})