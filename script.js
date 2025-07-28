
// Creaating a Grid
let container1 = document.querySelector(".container");
function createGrid(xcoord, ycoord)
{
    console.log("running createGrid()")
    for (let i = 1; i <= xcoord; i++)
    {
        let row = document.createElement("div")
        row.className = "row";
        container1.append(row);
        
        for (let j = 1; j <= ycoord; j++)
        {
            let column = document.createElement("div");
            column.className = "column";
            row.append(column);
        }
    }
    addInk();
    console.log("a " + xcoord + "x" + ycoord+" grid has been created.");
}

createGrid(16,16)

// on hover, change the color of a div
// document.querySelectorAll(".column").forEach(column => column.classList.add("ink"));

const grid = document.querySelectorAll(".column");

// Function that allows a div to be filled with Ink
function addInk()
{
    const grid = document.querySelectorAll(".column");
    for (box of grid)
    {
        box.addEventListener("mouseover", (event) => 
        { 
            event.target.classList.add("ink");
        })
    }
}


// reset button
let resetButton = document.getElementById("reset");
resetButton.addEventListener("click", () => {
    console.log("Pressed the reset button");
    let xcoord = window.prompt("How many squares as the width?");
    let ycoord = window.prompt("How many squares for the height?");
    console.log("width: " + xcoord);
    console.log("height: " + ycoord);

    createGrid(xcoord, ycoord);


})

