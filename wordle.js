
var hieght = 6; //number of guesses
var width = 5; //length of the word

var row = 0; //current guess (attempt #)
var col = 0; //current letter for that attempt

var gameOver = false;
var word = "SQUID";


window.onload = function(){
    intialize();
}


function intialize() {
    
    //Create the game board
    for (let r = 0; r < hieght; r++) {
       for (let c = 0; c < width; c++) {
           // <span id="0-0" class="tile">P</span>
           let tile = document.createElement("span");
           tile.id = r.toString() + "-" + c.toString();
           tile.classList.add("tile");
           tile.innerText = "";
           document.getElementById("board").appendChild(tile);
        }
    }


    // Listen for key Press
    document.addEventListener("keyup", (e) => {
        if (gameOver) return;
        
       // alert(e.code);
       if ("keyA" <= e.code && e.code <= "keyZ") {
        if (col < width) {
            let corrTile = document.getElementById(row.toString() + '-' + col.toString());
            if (corrTile.innerText == "") {
                corrTile.innerText = e.code [3];
                col += 1;
            }
        }
       
    }  else if (e.code == "Backspace") {
        if (0 < col && col <= width) {
            col -=1;
    }
     let currTile = document.getElementById(row.toString() + '-' + col.toString());
     currTile.innerText = "";}

     else if (e.code == "Enter") {
        update();
        row += 1; //start new row
        col = 0; //start at 0 for new row
     }

     if (!gameOver && row == hieght) {
        gameOver = true;
        document.getElementById("answer").innerText = word;
     }
  })
}


function update() {
     let correct = 0;
     for (let c = 0; c < width; c++) {
        let currTile = document.getElementById(row.toString() + '-' + c.toString());
        let lettter = currTile.innerText;

        //Is it in the correct position?
        if (word[c] == letter) {
           currTile.classList.add("correct");
            correct += 1;
        } //Not in the word?
        else if (word.includes(lettter)) {
            currTile.classList.add("present");
        } // Not in the word
        else {
           currTile.classList.add("absent");
        }

        if (correct == width) {
            gameOver = true;
        }
      } 

   }
