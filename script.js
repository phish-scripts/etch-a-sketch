// creates divs
function createDiv(amt)
{
    for (let i = 1; i <= amt; i++)
    {
        let div = document.createElement("div");
        document.querySelector(".container").append(div);
    }
}

createDiv(16);