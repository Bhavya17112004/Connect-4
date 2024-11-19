var val_c1 = 1
var val_c2 = 1
var val_c3 = 1
var val_c4 = 1
var val_c5 = 1
var val_c6 = 1
var val_c7 = 1
var turn = 1

//Function to check the winner
function check(player) {
    setTimeout(() => {

        //Vertically
        for (i = 1; i <= 7; i++) {
            for (j = 1; j <= 3; j++) {
                if (document.getElementById(`c${i}r${j}`).style.backgroundColor == `${player}` && 
                    document.getElementById(`c${i}r${j + 1}`).style.backgroundColor == `${player}` && 
                    document.getElementById(`c${i}r${j + 2}`).style.backgroundColor == `${player}` && 
                    document.getElementById(`c${i}r${j + 3}`).style.backgroundColor == `${player}`) {
                    alert(`${player} wins`)
                    location.reload()
                }
            }
        }

        //Horizontally
        for (i = 1; i <= 6; i++) {
            for (j = 1; j <= 4; j++) {
                if (document.getElementById(`c${j}r${i}`).style.backgroundColor == `${player}` && 
                    document.getElementById(`c${j + 1}r${i}`).style.backgroundColor == `${player}` && 
                    document.getElementById(`c${j + 2}r${i}`).style.backgroundColor == `${player}` && 
                    document.getElementById(`c${j + 3}r${i}`).style.backgroundColor == `${player}`) {
                    alert(`${player} wins`)
                    location.reload()
                }

            }

        }

        //Horizontally from bottom-left to top-right
        for (i = 1; i <= 4; i++) {
            for (j = 1; j <= 3; j++) {
                if (document.getElementById(`c${i}r${j}`).style.backgroundColor == `${player}` && 
                    document.getElementById(`c${i + 1}r${j + 1}`).style.backgroundColor == `${player}` && 
                    document.getElementById(`c${i + 2}r${j + 2}`).style.backgroundColor == `${player}` && 
                    document.getElementById(`c${i + 3}r${j + 3}`).style.backgroundColor == `${player}`) {
                    alert(`${player} wins`)
                    location.reload()
                }
            }
        }

        //Horizontally from bottom-right to top-left
        for (i = 1; i <= 4; i++) {
            for (j = 6; j >= 4; j--) {
                if (document.getElementById(`c${i}r${j}`).style.backgroundColor == `${player}` && 
                    document.getElementById(`c${i + 1}r${j - 1}`).style.backgroundColor == `${player}` && 
                    document.getElementById(`c${i + 2}r${j - 2}`).style.backgroundColor == `${player}` && 
                    document.getElementById(`c${i + 3}r${j - 3}`).style.backgroundColor == `${player}`) {
                    alert(`${player} wins`)
                    location.reload()
                }

            }
        }

    }, 100)

}

//To check if there is an empty cell
function checkDraw() {
    let isFull = true;
    document.querySelectorAll(".column").forEach((column) => {
        if (eval(`val_${column.id}`) <= 6) {
            isFull = false;
            return;
        }
    });
    return isFull;
}

document.querySelectorAll(".column").forEach((e) => {
    e.addEventListener("click", () => {
        const sum = eval(`val_${e.id}`);
        eval(`val_${e.id}++`);

        if (sum <= 6 && turn % 2 !== 0) {
            document.getElementById(`${e.id}r${sum}`).style.backgroundColor = "red";
            turn++;
            check('red');
            document.getElementById("whosturn").innerText = "Yellow's Turn";
        } else if (sum <= 6 && turn % 2 === 0) {
            document.getElementById(`${e.id}r${sum}`).style.backgroundColor = "yellow";
            turn++;
            check('yellow');
            document.getElementById("whosturn").innerText = "Red's Turn";
        }

        // Check if the board is full after each move
        setTimeout(() => {
            if (checkDraw()) {
            alert("It's a draw!");
            location.reload();
        }}, 100);
    });
});