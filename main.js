const seeMoreBtn = document.querySelector('#button1');
const seeMoreBtn2 = document.querySelector('#button2');
const goBackBtn = document.querySelector('#goBack');

const circularGallery = document.querySelector('.circularGallery');
const navList = document.querySelector('.navlist')
const goUpBtn = document.querySelector('.navButton');


goUpBtn.addEventListener('click', ()=>{
    navList.classList.toggle("goUp");
    goUpBtn.classList.toggle("rotateBtn");
})


const hide = () => {
    circularGallery.style.opacity="0";
    goBackBtn.style.opacity= "1";
}

seeMoreBtn.addEventListener('click', ()=>{
    hide();
});

seeMoreBtn2.addEventListener('click', ()=>{
    hide();
})

goBackBtn.addEventListener('click', ()=>{
    circularGallery.style.opacity="1";
    goBackBtn.style.opacity= "0";
})


/*animation icons */ 

const logo = document.querySelector('#logo');

const image1 = document.querySelector('#img1');
const image2 = document.querySelector('#img2');
const image3 = document.querySelector('#img3');
const image4 = document.querySelector('#img4');
const image5 = document.querySelector('#img5');
const image6 = document.querySelector('#img6');

const anim1 = document.querySelector('#anim1');
const anim2 = document.querySelector('#anim2');
const anim3 = document.querySelector('#anim3');
const anim4 = document.querySelector('#anim4');
const anim5 = document.querySelector('#anim5');
const anim6 = document.querySelector('#anim6');






let imgEngine= (img,time,classes )=>{
    setTimeout(
        function(){
            img.classList.add(classes);
            setTimeout(function(){
                img.style.opacity="0.35"
                img.classList.remove(classes);
                if(img.tagName=="IMG"){
                    img.style.opacity="0"; 
                }
            
            },4000);}

        ,time);
    
}
    

logo.addEventListener('click',()=>{
    imgEngine(image1,0,"animatedIcons");
    imgEngine(image6,3000,"animatedIcons");
    imgEngine(image2,6000,"animatedIcons");
    imgEngine(image3,9000,"animatedIcons");
    imgEngine(image5,12000,"animatedIcons");
    imgEngine(image4,15000,"animatedIcons");
    imgEngine(anim1,0,"animatedIcons2");
    imgEngine(anim6,3000,"animatedIcons2");
    imgEngine(anim2,6000,"animatedIcons2");
    imgEngine(anim3,9000,"animatedIcons2");
    imgEngine(anim5,12000,"animatedIcons2");
    imgEngine(anim4,15000,"animatedIcons2");
})


    

/* fede out overlay */

const loadingOverlay = document.querySelector('.loadingOverlay');
const logoFade = document.querySelector('#logo');

window.addEventListener('load',()=>{
    logoFade.style.opacity = "0";
    
    loadingOverlay.classList.add("fadeOut");

    setTimeout(function(){
        loadingOverlay.style.display="none";
        logoFade.style.opacity="1"; },2500)
    setTimeout(function(){
        logoFade.style.opacity="0.8"; },5000)
     
    setTimeout(function(){
        logoFade.style.opacity="0.8";
        imgEngine(image1,0,"animatedIcons");
        imgEngine(image6,3000,"animatedIcons");
        imgEngine(image2,6000,"animatedIcons");
        imgEngine(image3,9000,"animatedIcons");
        imgEngine(image5,12000,"animatedIcons");
        imgEngine(image4,15000,"animatedIcons");
        imgEngine(anim1,0,"animatedIcons2");
        imgEngine(anim6,3000,"animatedIcons2");
        imgEngine(anim2,6000,"animatedIcons2");
        imgEngine(anim3,9000,"animatedIcons2");
        imgEngine(anim5,12000,"animatedIcons2");
        imgEngine(anim4,15000,"animatedIcons2"); },4500)

})


/* planetstEXT */
let planet = document.querySelectorAll('.planet');
let planetsText = document.querySelectorAll('.planetText');
let circles = document.querySelector('.iconsSkills');

circles.addEventListener('mouseover',(e)=>{

   let planets = e.target;
    if(planets.tagName==="IMG" && planets.className === "planet"){
       let texts=  planets.nextElementSibling;
       planets.style.opacity= "1" ;
       planets.style.border = "1px solid green";
       
       console.log(texts);
       texts.firstChild.style.visibility="visible";
       setTimeout(function(){
            texts.firstChild.style.visibility="hidden"
            planets.style.opacity= "0.6"
            planets.style.border = "1px solid blue"
            },12000)
    }
  
})


/* cat game */ 
let balonColors=['#379895','#376A98','#373A98','#653798','#953798','#98376A'];
let balon =  document.querySelectorAll('.ballon');
const cat = document.querySelector('.cat');
const cats = document.querySelector('.cats');
const CatItems = document.querySelector('#catItems');
const scoreField = document.querySelector('#score');
const gameover = document.querySelector('#gameover')
const ballonWrapper = document.querySelector('.ballonWrapper')
const win = document.querySelector('#win'); 
const wool = document.querySelector('#wool');
const tryAgain = document.querySelector('#tryAgain');
const catit = document.querySelectorAll('.catit');
const level1 = document.querySelector('#level');
const cloud = document.querySelectorAll('.cloud'); 
let score = 0; 


let losingInside =()=>{
        
        gameover.style.display ="block";
        scoreField.style.display ="none";
        tryAgain.style.visibility="visible";
        ballonWrapper.classList.remove("opacity1");
            
        
}

let losing = ()=>{
    const firstScore = score;

    for(let i=0; i<cloud.length; i++){
            cloud[i].style.opacity="0.4";
        }
    setTimeout(function(){
            if(score == firstScore && score  < 30){
                losingInside();
            }
        },14000) 
}

let wining = () => {
    if(score == 30){
        win.style.display= "block"; 
        wool.style.display = "block";
        tryAgain.style.visibility="visible"; 
        tryAgain.style.left="200px"; 
        ballonWrapper.classList.remove("opacity1");
        ballonWrapper.classList.add("opacity2");
        gameover.style.display="none";
        
        for(let i=0; i<cloud.length; i++){
            cloud[i].style.opacity="0.4";
        }
        for(let i=0; i<balon.length; i++){
            
          
            balon[i].style.fillOpacity = "0.3";
            balon[i].style.pointerEvents = "none";
            scoreField.style.display ="none";
            
            
          
            
        }
        
}  
}  

let levels = (sc,speed,level)=>{
    if(score == sc){
        for( let i=0; i<catit.length; i++){
            catit[i].style.animationDuration=speed;
        }
        for(let i=0; i<cloud.length; i++){
            cloud[i].style.display="block";
        }
        level1.textContent = `Level ${level}`;
        level1.style.visibility="visible";
        
        setTimeout(function(){
            level1.style.visibility="hidden";
        },2000) 
    }
}





let disapear = ()=> {

CatItems.addEventListener('click',(e)=>{

    
        if(e.target.className="ballon" ){
            e.target.style.fillOpacity="0";
            e.target.parentNode.parentNode.opacity="0";
            e.target.style.pointerEvents ="none";
           
            

            score ++;
            
           
            setTimeout(function(){
                e.target.style.fillOpacity="0.6";
                e.target.parentNode.parentNode.opacity="0.6";
                e.target.style.pointerEvents ="auto";
                
                },6000)
                
                    
                  
        }
       
        wining();
        losing();
        levels(10,"6s",1);
        levels(20,"3s",2);
       
    scoreField.textContent= ` + ${score} to be awesome cat :)`;

 })}









 





const start = ()=>{

    let startGame = (sth)=>{
        sth.style.display="none"; 
        scoreField.style.display ="block";
        scoreField.textContent =` + ${score} to be awesome cat :)`;
        ballonWrapper.classList.remove("opacity2");
        ballonWrapper.classList.add("opacity1")
        score=0; 
        levels(0,"8s",0);
        for(let i=0; i<cloud.length; i++){
            cloud[i].style.display="none";
            cloud[i].style.opacity="1";  
         }
        
        
       
 
    
    }

    const startGame2 = (sth2) =>{


        sth2.addEventListener('click',()=>{
           
            startGame(cat);
            startGame(cats);
            startGame(gameover);
            startGame(win);
            startGame(wool);

            tryAgain.style.visibility="hidden";
        
            setTimeout(function(){
                ballonWrapper.classList.add("opacity1")
                if(score < 5 ){
                    losingInside();
                }
                },12000) 
  
                for(let i=0; i<=balon.length; i++){
                    balon[i].style.fill= balonColors[i];
                    balon[i].style.fillOpacity = "0.6"; 
                    
                }
            
        });


       
}

   startGame2(cat);
   startGame2(cats);
   startGame2(tryAgain);
}

start();
disapear();




    
   





