
// Creaating a Grid
let container1 = document.querySelector(".container");
function createGrid()
{
    for (let i = 1; i <= 16; i++)
    {
        let row = document.createElement("div")
        row.className = "row";
        container1.append(row);
        
        for (let j = 1; j <= 16; j++)
        {
            let column = document.createElement("div");
            column.className = "column";
            row.append(column);
        }
    }
    console.log("16x16 Grid has been made");
}

createGrid()

// On Hover, change the color of a div

document.querySelectorAll(".column").forEach(column => column.classList.add("ink"));