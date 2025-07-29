
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

createGrid(24,24)

// on hover, change the color of a div
// document.querySelectorAll(".column").forEach(column => column.classList.add("ink"));

const grid = document.querySelectorAll(".column");

// Function that allows a div to be filled with Ink
function addInk()
{
    const grid = document.querySelectorAll(".column");
    // iterates through each box and adds an event listener to the box
    for (box of grid)
    {
        // the box is given the ink class when hovered over
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

    if (xcoord && ycoord > 32)
    {
        alert("thats WAYYYYY too many squares. you are sticking with the old grid buddy.")
    }
    else
    {
        deleteGrid()
        createGrid(xcoord, ycoord);
        console.log("width: " + xcoord);
        console.log("height: " + ycoord);
    }




})


// the Delete Grid function
function deleteGrid()
{
    let counter = 0;
    console.log("Refreshing the etch-a-sketch...")
    
    // This selects all rows within the DOM
    let rowsDeleted = document.querySelectorAll(".row")
    // a pointer that starts at the head of the list of "row" elements
    let parentNode = rowsDeleted[0].parentNode;

    // this forEach function iterates through the list of "rows", and deletes them
    rowsDeleted.forEach((node) => {
        let parentNode = node.parentNode;
        // tells the parentNode to remove the node from the webpage
        parentNode.removeChild(node);
        counter++;
    })
    console.log(counter + " row(s) deleted");

}



