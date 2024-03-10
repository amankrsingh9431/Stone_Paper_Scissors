const photo=[
    {
        cover:'image/paper.png'
    },
    {
        cover:'image/scissors.png'
    },
    {
        cover:'image/stone.png'
    }
]
let randomnumber;
let Computer=document.getElementById("Computer")
let paper=document.getElementById("paper")
let number=document.getElementById("number")
const pap=document.querySelectorAll(".pap")
let num=10;
let count=0;
let loss=0;
function checkran(){
    randomnumber=Math.floor(Math.random()*3);
    change()
}
function change(){
    Computer.src=photo[randomnumber].cover;  
}
pap.forEach((paps)=>{
    paps.addEventListener('click',function(){
       if(paps.innerHTML==="Paper"){
        paper.src='image/paper.png';
       }
       else  if(paps.innerHTML==="Scissors"){
        paper.src='image/scissors.png';
       }
       else  if(paps.innerHTML==="Stone"){
        paper.src='image/stone.png';
       }
       checkran();
       compare();
       num--;
    })
})
function compare(){
    number.innerHTML=num;
    if(paper.src===Computer.src){
        count++;
        document.getElementById("total").innerHTML=count;
    }
    else{
        loss++;
        document.getElementById("defeat").innerHTML=loss;
    }
    numchng()
}
function numchng(){
    if(num===0){
        document.getElementById("changer").style.display="block";
        if(count>loss){
            document.getElementById("changer").innerHTML="Congrtulation you are winner";
        }
        else if(count<loss){
            document.getElementById("changer").innerHTML="Computer are winner";
        }
        if(count===loss){
            document.getElementById("changer").innerHTML="Tie the match";
        }
        document.getElementById("box").style.display="none";
        document.getElementById("reset").style.display="block";
    }   
}
function reset(){
    num=10;
    loss=0;
    count=0;
    number.innerHTML=num;
    document.getElementById("defeat").innerHTML=loss;
    document.getElementById("total").innerHTML=count;
    document.getElementById("box").style.display="flex";
    document.getElementById("changer").style.display="none";
    document.getElementById("reset").style.display="none";
}