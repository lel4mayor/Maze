const map = [
    "WWWWWWWWWWWWWWWWWWWWW",
    "W   W     W     W W W",
    "W W W WWW WWWWW W W W",
    "W W W   W     W W   W",
    "W WWWWWWW W WWW W W W",
    "W         W     W W W",
    "W WWW WWWWW WWWWW W W",
    "W W   W   W W     W W",
    "W WWWWW W W W WWW W F",
    "S     W W W W W W WWW",
    "WWWWW W W W W W W W W",
    "W     W W W   W W W W",
    "W WWWWWWW WWWWW W W W",
    "W       W       W   W",
    "WWWWWWWWWWWWWWWWWWWWW"
];

const delta = 25;

var player = document.getElementById("playerPosition");
var playerRow;
var playerCol;



// setting up maze
//
//-----------------------------------------------------------------------------
for ( i = 0; i < map.length; i++ ) {
    for ( x = 0; x < map[i].length; x++ ) {
        
        if ( map[i][x] === "W") {
            var wallCell = document.createElement("div");
            wallCell.setAttribute("id", "wallCell");
            document.body.appendChild(wallCell);
            
        } else if ( map[i][x] === " ") {
            var floorCell = document.createElement("div");
            floorCell.setAttribute("id", "floorCell")
            document.body.appendChild(floorCell);
            
       } else if ( map[i][x] === "S") {
            var startCell = document.createElement("div");
            startCell.setAttribute("id", "startCell");
            document.body.appendChild(startCell);
            playerCol = x;
            playerRow = i;
        } else if ( map[i][x] === "F") {
            var finishCell = document.createElement("div");
            finishCell.setAttribute("id", "finishCell");
            document.body.appendChild(finishCell);
        }
    }
};


// player position & moves
//
//-----------------------------------------------------------------------------

function movePlayer(x,y) {
    var moveRow = playerRow + x;
    var moveCol = playerCol + y;
    var destCell = map[moveRow][moveCol];

    if (destCell && destCell !== "W") {
        playerRow += x;
        playerCol += y;
        console.log("You moved");
        playerCoord();
        if (destCell ==="F") {
            youWin();
        }
    } else {
        console.log("You hit a wall");
    }
}

function playerCoord() {
    player.style.top = (playerRow * delta) + 9 + "px";
    player.style.left = (playerCol * delta) + 9 + "px";
}

function youWin() {
    alert("You Win!")
}

movePlayer(0,0);
