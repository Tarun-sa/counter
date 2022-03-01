const decreaseBtn=document.getElementById("decrease");
const resetBtn=document.getElementById("reset");
const increaseBtn=document.getElementById("increase");
const counter =document.getElementById("counter");

let i=0;
  var increaseCounter;
   var decreaseCounter;
increaseBtn.addEventListener("click",()=>{
clearInterval(decreaseCounter);
   increaseCounter= setInterval(() => {
       i++; 
       counter.textContent=i;
       if(i<0)
       counter.style.color="red";
       else 
       counter.style.color="green";
    }, 800);
})
resetBtn.addEventListener("click",()=>{

    clearInterval(increaseCounter);
    clearInterval(decreaseCounter);
    i=0;
    counter.style.color="black";
    counter.textContent=i;

   
})
decreaseBtn.addEventListener("click",()=>{
  clearInterval(increaseCounter);
   decreaseCounter= setInterval(() => {
        i--;  
       counter.textContent=i; 
        if(i<0)
       counter.style.color="red";
       else 
       counter.style.color="green";
    }, 800);
})

