let boxes= document.querySelectorAll(".box");
let reset= document.querySelector("#resetbtn");
let newgame= document.querySelector(".newgame");
let msgp= document.querySelector(".msgp");
let msg= document.querySelector(".msg");
let turno= true;
const win = [
    [0,1,2],
    [0,3,6],
    [0,4,8],
    [1,4,7],
    [2,5,8],
    [2,4,6],
    [3,4,5],
    [6,7,8]
];
boxes.forEach(function myfunc(box){
    box.addEventListener("click", ()=>{
        
        if(turno)
        {
            box.innerText="O";
            turno=false;
        }
        else{
            box.innerText="X";
            turno=true;
        }
        box.disabled= true;
        checkwinner();
    })
})

const checkwinner= ()=>{
    for(let pattern of win)
    {
        let posval1= boxes[pattern[0]].innerText;
        let posval2= boxes[pattern[1]].innerText;
        let posval3= boxes[pattern[2]].innerText;

        if(posval1!="" && posval2!="" && posval3!="")
        {
            if(posval1==posval2&& posval2==posval3)
            {
                showwinner(posval1);
            }
        }
    }
}
const showwinner =(winner)=>{
    msg.classList.remove("hide");
    msgp.innerText="Congratulations!! Winner is "+ winner;
    disable();

}
const enableboxes=()=>{
    for(let box of boxes){
        box.disabled=false;
        box.innerText="";
    }
}

const resetgame=()=>{
    turno=true;
    enableboxes();
    msg.classList.add("hide");
}
const disable =()=>{
    for(let box of boxes){
        box.disabled=true;
    }
}

newgame.addEventListener("click", resetgame);
reset.addEventListener("click", resetgame);