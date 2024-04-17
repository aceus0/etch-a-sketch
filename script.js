
function addBoxes(numBoxes) {
    const container = document.querySelector("#container");
    const containerSize = 512; 
    const boxesPerRow = Math.ceil(Math.sqrt(numBoxes)); 
    const boxSize = containerSize / boxesPerRow; 

    container.innerHTML = ''; 

    let i = 0;
    while (i < numBoxes) {
        const pixel = document.createElement("div");
        pixel.style.backgroundColor = "white";
        pixel.setAttribute("class", "pixel");
        pixel.style.width = `${boxSize}px`;
        pixel.style.height = `${boxSize}px`;
        pixel.style.flex = `0 0 ${boxSize}px`;
        container.appendChild(pixel);
        i++;
    }
}
function randomColor() {
    let randomNumber = Math.floor(Math.random() * 6)
    switch (randomNumber) {
        case 0: return `#FF0000`;

        case 1: return `#ffa500`;

        case 2: return `#faeb36`;

        case 3: return `#79c314`;

        case 4: return `#487de7`;

        case 5: return `#4b369d`;
        
        case 6: return `#70369d`;
    }
}

let boxNumber = 81
addBoxes(boxNumber);


const container = document.querySelector(`#container`)
    container.addEventListener('mouseover', (e) => {
    if (e.target.className === `pixel`){

        e.target.style.backgroundColor = `${randomColor()}`;
    }
})

const newGrid = document.querySelector("#newGrid");

newGrid.addEventListener('click', ()=> {
    let userInput = prompt(`Please enter how large you'd like to make the gird.\nThe maximum size is 100x100.\n\nEx. for a 50x50 grid, type "50".`);
    userInput = userInput
        if (isNaN(userInput)){
            alert(`You must type a number!`)
        } else if (userInput > 100 || userInput < -100) {
        alert(`${userInput} is too large!`)
        } else if (userInput == null) {}
        else {
            intUserInput = parseInt(userInput);
            boxNumber = intUserInput * intUserInput;
            console.log(typeof boxNumber)
            addBoxes(boxNumber);
            }
        }
    );