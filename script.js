let boxes=document.querySelectorAll(".box");
let newg = document.querySelector("#newgame");

let turnO=true;

const win_pattern =[
    [0,1,2],
    [3,4,5],
    [6,7,8],
    [0,3,6],
    [1,4,7],
    [2,5,8],
    [0,4,8],
    [2,4,6],
]
const newgame=()=>{
    turnO=true;
    enable_boxes();
}

newg.addEventListener("click",newgame);

for (let box of boxes){
    count=0;
    box.addEventListener("click",()=>{
        console.log("Box was clicked")
        if(turnO===true){
            box.innerText="O";
            box.style.color="#ffa175";
            turnO=false;
            count++;
        }else{
            box.innerText="X";
            turnO=true;
            count++;
        }
        check_winner();
        draw(count);
        box.disabled=true;
        
        
    })

}
const draw=(num)=>{
    if(num===9){
        alert("Game has drawn");
    }
    
}

const check_winner = () => {
    for (let pattern of win_pattern){
        let p1val=boxes[pattern[0]].innerText;
        let p2val=boxes[pattern[1]].innerText;
        let p3val=boxes[pattern[2]].innerText;

        if(p1val !="" && p2val !="" && p3val !=""){
            if(p1val === p2val && p2val === p3val){
                disable_boxes();
                alert(`PLAYER ${p1val} IS THE WINNER`);
            }
        }
    }
}

const disable_boxes=()=>{
    for(let box of boxes){
        box.disabled=true;
    }
}

const enable_boxes=()=>{
    for(let box of boxes){
        box.disabled=false;
        box.innerText="";
    }
}
