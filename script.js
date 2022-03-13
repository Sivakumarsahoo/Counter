const clickbtn=document.querySelectorAll("button");
const count=document.querySelector(".count");

function fun(){

    let value=this.innerHTML;
  
    if(value=="Incro")
     {
         count.innerHTML+="+1";
         
         count.innerHTML=eval(count.innerHTML);
         count.style.color="#06FF00"
     }
     else if(value=="Decro")
     {
         count.innerHTML+="-1";
         count.innerHTML=eval(count.innerHTML);
         count.style.color="#FF1700"
     }
     else
     {
         count.innerHTML="0";
         count.style.color="#42C2FF"
     }
}
for(let i=0;i<3;i++)
{
    
    clickbtn[i].addEventListener("click",fun);
}