var boxesContainer = document.querySelector('.boxes');
var boxes = document.getElementsByClassName('box');
var overlay = document.getElementById('overlay');
var moves=document.getElementById('moves');
var result = document.getElementById('result');
var stats = document.getElementById('stats');
var resultStar = document.getElementById('resultStar');
var stars = document.querySelector('.stars');

var refresh = document.getElementById('refresh');

refresh.addEventListener('click',()=>{
    location.reload();
})


for(let i = 1 ; i<9 ; i++){
var random = Math.floor(Math.random() * 8);
 var box=boxes[random].innerHTML;
    boxes[random].innerHTML=boxes[random+i].innerHTML;
    boxes[random + i].innerHTML=box;
}


var i=0;
var shapes=[];
var boxess=[];
var counter=0;
var countStars=0;
Array.from(boxes).forEach(box=>{
    box.addEventListener('click',function(e){
        i++;
        boxess[i-1]=e.currentTarget;
        box.classList.add("click-card");
        var clicked=document.getElementsByClassName('click-card');
        
        shapes[i-1]=box.innerHTML;
        if(i%2 == 0){  
            moves.innerText=i/2;  
            if(shapes[i-1]==shapes[i-2]){
                counter++;
                console.log(counter);
                setTimeout(function () {
                    boxess[i - 1].classList.add("correct");
                    boxess[i - 2].classList.add("correct");
                    if(counter==8){
                        result.innerText=i/2;
                        resultStar.innerHTML=stars.innerHTML;
                        setTimeout(function(){
                            boxesContainer.classList.add('hide');
                            stats.classList.add('hide');
                            overlay.classList.add('visible');
                        },100);
                    }
                }, 0)
                
            }
            else{
                if((i/2) % 4 == 0){
                    countStars++;
                    switch(countStars){
                        case 1:
                            stars.children[2].outerHTML='<i class="fas fa-star-half-alt"></i>';
                            stars.children[2].classList.add('die');
                            break;
                        case 2:
                            stars.children[2].outerHTML = '<i class="far fa-star"></i>';
                            stars.children[2].classList.add('die');
                            break;

                        case 3:
                            stars.children[1].outerHTML = '<i class="fas fa-star-half-alt"></i>';
                            stars.children[1].classList.add('die');
                            break;
                        case 4:
                            stars.children[1].outerHTML = '<i class="far fa-star"></i>';
                            stars.children[1].classList.add('die');
                            break;
                        case 5:
                            stars.children[0].outerHTML = '<i class="fas fa-star-half-alt"></i>';
                            stars.children[0].classList.add('die');
                            break;
                        case 6:
                            stars.children[0].outerHTML = '<i class="far fa-star"></i>';
                            stars.children[0].classList.add('die');
                            break;
                        default:
                        break;
                        
                    }
                  
                }

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