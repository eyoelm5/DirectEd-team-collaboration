const boxes = document.querySelectorAll(".box");
const mediaQuery = window.matchMedia('(max-width: 576px)')
let currentPlayer = "X";
let isGameOver = false;
let count1 = 0
let count2 = 0
let draw = 0



window.addEventListener('message', (event) => {
    console.log("Message got")
    if (event.data.type === 'hideIframe') {
      const iframe = document.querySelector('#iframe');
      iframe.style.opacity = 0;
      iframe.style.zIndex = -1
      setTimeout(() => {
        iframe.style.display = 'none'
      }, 1500)
    }

  });

boxes.forEach(cell =>{
    cell.innerHTML = ""
    cell.addEventListener("click", ()=>{
        if(!isGameOver && cell.innerHTML === ""){
            cell.innerHTML = currentPlayer;
            checkWin();
            cheakDraw();
            changeTurn();
        }
    })
})

function changeTurn(){
    if(currentPlayer === "X"){
        currentPlayer = "O";
        document.querySelector(".bg").style.left = "85px";
    }
    else{
        currentPlayer = "X";
        document.querySelector(".bg").style.left = "0";
    }
}

function checkWin(){
    let winConditions = [
        [0, 1, 2], [3, 4, 5], [6, 7, 8],
        [0, 3, 6], [1, 4, 7], [2, 5, 8],
        [0, 4, 8], [2, 4, 6]
    ]
    for(let i = 0; i<winConditions.length; i++){
        let v0 = boxes[winConditions[i][0]].innerHTML;
        let v1 = boxes[winConditions[i][1]].innerHTML;
        let v2 = boxes[winConditions[i][2]].innerHTML;

        if(v0 != "" && v0 === v1 && v0 === v2){
            isGameOver = true;
            if(currentPlayer === "X"){
                document.getElementById("results").innerHTML = "Player 1 wins";
            } else if (currentPlayer === "O"){
                document.getElementById("results").innerHTML = "Player 2 wins";
            }

            if(mediaQuery.matches){
                document.querySelector(".buttons").style.display = "flex"
            } else{
                document.querySelector(".buttons").style.display = "block"
            }

            for(j = 0; j<3; j++){
                boxes[winConditions[i][j]].style.backgroundColor = "#08D9D6"
                boxes[winConditions[i][j]].style.color = "#000"
            }

            if(currentPlayer === "X"){
                count1 += 1
            } else if(currentPlayer === "O"){
                count2 += 1
            }
            document.getElementById("player1").innerText = count1
            document.getElementById("player2").innerText = count2
        }
    }
}

function cheakDraw(){
    if(!isGameOver){
        let isDraw = true;
        boxes.forEach(cell =>{
            if(cell.innerHTML === "") isDraw = false;
        })

        if(isDraw){
            isGameOver = true;
            draw += 1;
            document.getElementById("results").innerHTML = "Draw";
            document.getElementById("draw").innerText = draw
            if(mediaQuery.matches){
                document.querySelector(".buttons").style.display = "flex"
            } else{
                document.querySelector(".buttons").style.display = "block"
            }
        }
    }
}

document.getElementById("play-again").addEventListener("click", restart)
function restart(){
    isGameOver = false;
    currentPlayer = "X";
    document.querySelector(".bg").style.left = "0";
    document.getElementById("results").innerHTML = "";
    document.querySelector(".buttons").style.display = "none"

    boxes.forEach(cell =>{
        cell.innerHTML = "";
        cell.style.removeProperty("background-color");
        cell.style.color = "#fff"
    })
}

document.getElementById("reset").addEventListener("click", () => {
    document.querySelector(".winners-page").style.display = "flex";
    if(count1 > count2){
        document.getElementById("winner").innerText = "The Winner is Player 1"
    } else if (count1 < count2){
        document.getElementById("winner").innerText = "The Winner is Player 2"
    } else{
        document.getElementById("winner").innerText = "It is a tie"
    }
    restart()
    count1 = 0 
    count2 = 0
    draw = 0
    document.getElementById("player1").innerText = count1
    document.getElementById("player2").innerText = count2
    document.getElementById("draw").innerText = draw
})

document.getElementById("cancel").addEventListener("click", () => {
    document.querySelector(".winners-page").style.display = "none";
})