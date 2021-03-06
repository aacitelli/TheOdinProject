/*

    General Planning: 

    For each box, assign event listeners.

    When the mouse enters, modify the color to something different.
    That's about all there is to it at a basic level. Can't wait until
    it ends up being harder than I thought. 

*/

// Big fan of variable array sizes in JS
var canvas = document.getElementById("canvas");

initializeGrid();

// Initializes a 20x20 grid and assigns event listeners as they're created
function initializeGrid()
{
    // Loops Through Rows
    for (let i = 0; i < 20; i++)
    {
        // Loops through columns
        for (let i = 0; i < 20; i++)
        {
            // Initializes that component 
            let currentBox = document.createElement("div");

            // Assigning a class - Toggle is favored over add/remove
            currentBox.classList.toggle("gridBox");
            currentBox.style.backgroundColor = "white";
            
            // Appending to parent (canvas)
            canvas.appendChild(currentBox);
        }
    }
    
    let elementsArray = document.querySelectorAll(".gridBox");

    elementsArray.forEach(function(element)
    {
        element.addEventListener("mouseenter", function()
        {          
            // Constructing a new string basically, JS be crazy 
            element.style.backgroundColor = "rgb(" + 
                (Math.random() * 255) + ", " + 
                (Math.random() * 255) + ", " + 
                (Math.random() * 255) + ")";                       
        });     
    });
}

/* Adding reset functionality */
var resetButton = document.getElementById("resetButton");
resetButton.addEventListener("click", function()
{
    // Basically just a modification of the above code 
    let elementsArray = document.querySelectorAll(".gridBox");

    elementsArray.forEach(function(element)
    {
        element.style.backgroundColor = "white";    
    });
});